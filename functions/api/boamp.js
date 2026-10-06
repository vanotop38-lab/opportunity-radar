
const BOAMP_API = 'https://boamp-datadila.opendatasoft.com/api/explore/v2.0/catalog/datasets/boamp/records';

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300'
    }
  });
}

export async function onRequestGet(context) {
  const requestUrl = new URL(context.request.url);
  const q = (requestUrl.searchParams.get('q') || '').trim();
  const limit = Math.min(
    Math.max(Number(requestUrl.searchParams.get('limit') || 100), 1),
    100
  );

  const api = new URL(BOAMP_API);

  api.searchParams.set('limit', String(limit));
  api.searchParams.set('order_by', 'dateparution DESC');

  api.searchParams.set(
    'select',
    [
      'idweb',
      'id',
      'objet',
      'nomacheteur',
      'code_departement',
      'code_departement_prestation',
      'datelimitereponse',
      'dateparution',
      'descripteur_code',
      'descripteur_libelle',
      'type_marche',
      'type_marche_facette',
      'type_avis',
      'url_avis'
    ].join(',')
  );

  if (q) {
    const safeQ = q.replaceAll("'", "''");
    api.searchParams.set('where', `search(*, '${safeQ}')`);
  }

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
          error: `BOAMP upstream ${response.status}`,
          details: body.slice(0, 1000)
        },
        502
      );
    }

    return new Response(body, {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=300'
      }
    });
  } catch (error) {
    return json(
      {
        error: 'Impossible de joindre le service BOAMP',
        details: String(error)
      },
      502
    );
  }
}  

