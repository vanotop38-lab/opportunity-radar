const BOAMP_HTML_API =
  'https://boamp-datadila.opendatasoft.com/api/explore/v2.0/catalog/datasets/boamp-html/records';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300'
    }
  });
}

function cleanText(value) {
  if (!value) return '';

  return String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function findHtml(record) {
  if (!record || typeof record !== 'object') return '';

  const keys = Object.keys(record);

  for (const key of keys) {
    const value = record[key];

    if (
      typeof value === 'string' &&
      (
        key.toLowerCase().includes('html') ||
        value.includes('<html') ||
        value.includes('<div') ||
        value.includes('<p>')
      )
    ) {
      return value;
    }
  }

  return '';
}

function extractField(html, labels) {
  if (!html) return '';

  for (const label of labels) {
    const safe = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const regex = new RegExp(
      safe +
      '[\\s:]*</[^>]+>\\s*([\\s\\S]*?)(?=<(?:h[1-6]|strong|b|li|dt)[^>]*>|$)',
      'i'
    );

    const match = html.match(regex);

    if (match) {
      const value = cleanText(match[1]);
      if (value) return value;
    }
  }

  return '';
}

function extractLots(html) {
  if (!html) return [];

  const text = cleanText(html);
  const lots = [];

  const regex =
    /(?:Lot|LOT)\s*(?:n[°º]?\s*)?(\d+)\s*[:\-–]\s*([^]+?)(?=(?:Lot|LOT)\s*(?:n[°º]?\s*)?\d+\s*[:\-–]|$)/gi;

  let match;

  while ((match = regex.exec(text)) !== null) {
    const number = match[1];
    const title = match[2].trim();

    if (title && !lots.some(l => l.number === number)) {
      lots.push({
        number,
        title
      });
    }
  }

  return lots;
}

export async function onRequestGet(context) {
  const requestUrl = new URL(context.request.url);

  const idweb = (
    requestUrl.searchParams.get('idweb') ||
    requestUrl.searchParams.get('id') ||
    ''
  ).trim();

  if (!idweb) {
    return json(
      {
        error: 'Paramètre idweb manquant'
      },
      400
    );
  }

  const api = new URL(BOAMP_HTML_API);

  api.searchParams.set('limit', '1');

  const safeId = idweb.replaceAll('"', '\\"');

  api.searchParams.set(
    'where',
    `idweb="${safeId}"`
  );

  api.searchParams.set('select', '*');

  try {
    const response = await fetch(api.toString(), {
      headers: {
        accept: 'application/json'
      }
    });

    const body = await response.text();

    if (!response.ok) {
      return json(
        {
          error: `BOAMP HTML upstream ${response.status}`,
          details: body.slice(0, 1500)
        },
        502
      );
    }

    const data = JSON.parse(body);

    if (!data.records || !data.records.length) {
      return json(
        {
          error: 'Avis BOAMP introuvable',
          idweb
        },
        404
      );
    }

    const record = data.records[0];
    const html = findHtml(record);

    const result = {
      idweb,

      organisme: extractField(
        html,
        [
          "Nom de l'organisme acheteur",
          "Acheteur(s)"
        ]
      ),

      attention: extractField(
        html,
        ["A l'attention de"]
      ),

      adresse: extractField(
        html,
        ["Adresse"]
      ),

      contact: extractField(
        html,
        [
          "Point(s) de contact",
          "Point de contact"
        ]
      ),

      telephone: extractField(
        html,
        ["Téléphone"]
      ),

      courriel: extractField(
        html,
        ["Courriel"]
      ),

      adresseInternet: extractField(
        html,
        ["Adresse internet"]
      ),

      profilAcheteur: extractField(
        html,
        ["Adresse internet du profil d'acheteur"]
      ),

      titre: extractField(
        html,
        [
          "Titre du marché",
          "Intitulé du marché"
        ]
      ),

      objet: extractField(
        html,
        ["Objet du marché", "Objet"]
      ),

      lots: extractLots(html),

      officialUrl:
        `https://www.boamp.fr/pages/avis/?q=idweb:"${encodeURIComponent(idweb)}"`,

      source: record,

      html
    };

    return json(result);

  } catch (error) {
    return json(
      {
        error: 'Impossible de récupérer le détail BOAMP',
        details: String(error),
        idweb
      },
      502
    );
  }
}
