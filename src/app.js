/* =========================================================
   OPPORTUNITY RADAR
   src/app.js
   ========================================================= */


/* =========================================================
   DONNÉES DE SECOURS
   ========================================================= */

const DEMO = [
  [
    'Maintenance multi-sites des bâtiments administratifs',
    'Métropole de Lyon',
    'Auvergne-Rhône-Alpes',
    187000,
    '2026-10-20',
    'Maintenance, entretien'
  ],
  [
    'Prestations de nettoyage de locaux',
    'Ville de Grenoble',
    'Auvergne-Rhône-Alpes',
    96000,
    '2026-10-15',
    'Nettoyage, entretien'
  ],
  [
    'Entretien des espaces publics',
    'Commune de Valence',
    'Auvergne-Rhône-Alpes',
    240000,
    '2026-10-28',
    'Entretien, services'
  ],
  [
    'Maintenance préventive des installations',
    'Centre hospitalier',
    'Auvergne-Rhône-Alpes',
    420000,
    '2026-10-13',
    'Maintenance'
  ],
  [
    'Nettoyage de bâtiments scolaires',
    'Région Auvergne-Rhône-Alpes',
    'Auvergne-Rhône-Alpes',
    310000,
    '2026-11-02',
    'Nettoyage'
  ],
  [
    'Entretien courant des locaux',
    'Ville de Paris',
    'Île-de-France',
    155000,
    '2026-10-18',
    'Nettoyage'
  ],
  [
    'Maintenance technique de sites publics',
    'Département de l’Isère',
    'Auvergne-Rhône-Alpes',
    275000,
    '2026-10-30',
    'Maintenance'
  ],
  [
    'Nettoyage et hygiène de bâtiments',
    'CHU Toulouse',
    'Occitanie',
    198000,
    '2026-10-22',
    'Nettoyage, hygiène'
  ],
  [
    'Petite maintenance multiservice',
    'Ville de Nice',
    'Provence-Alpes-Côte d’Azur',
    74000,
    '2026-10-17',
    'Maintenance, services'
  ],
  [
    'Entretien des locaux administratifs',
    'Région PACA',
    'Provence-Alpes-Côte d’Azur',
    125000,
    '2026-11-05',
    'Nettoyage'
  ],
  [
    'Maintenance des équipements collectifs',
    'Agglomération Grenoble-Alpes',
    'Auvergne-Rhône-Alpes',
    365000,
    '2026-10-25',
    'Maintenance'
  ],
  [
    'Services d’entretien et nettoyage',
    'Commune de Chambéry',
    'Auvergne-Rhône-Alpes',
    112000,
    '2026-10-12',
    'Nettoyage, entretien'
  ]
].map((x, i) => ({
  id: 'demo-' + i,
  idweb: '',
  title: x[0],
  buyer: x[1],
  region: x[2],
  amount: x[3],
  deadline: x[4],
  tags: x[5],
  source: 'DEMO',
  url: '#',
  score: 0
}));


/* =========================================================
   DÉPARTEMENTS → RÉGIONS
   ========================================================= */

const DEPT_REGIONS = {

  '01': 'Auvergne-Rhône-Alpes',
  '03': 'Auvergne-Rhône-Alpes',
  '07': 'Auvergne-Rhône-Alpes',
  '15': 'Auvergne-Rhône-Alpes',
  '26': 'Auvergne-Rhône-Alpes',
  '38': 'Auvergne-Rhône-Alpes',
  '42': 'Auvergne-Rhône-Alpes',
  '43': 'Auvergne-Rhône-Alpes',
  '63': 'Auvergne-Rhône-Alpes',
  '69': 'Auvergne-Rhône-Alpes',
  '73': 'Auvergne-Rhône-Alpes',
  '74': 'Auvergne-Rhône-Alpes',

  '21': 'Bourgogne-Franche-Comté',
  '25': 'Bourgogne-Franche-Comté',
  '39': 'Bourgogne-Franche-Comté',
  '58': 'Bourgogne-Franche-Comté',
  '70': 'Bourgogne-Franche-Comté',
  '71': 'Bourgogne-Franche-Comté',
  '89': 'Bourgogne-Franche-Comté',
  '90': 'Bourgogne-Franche-Comté',

  '22': 'Bretagne',
  '29': 'Bretagne',
  '35': 'Bretagne',
  '56': 'Bretagne',

  '18': 'Centre-Val de Loire',
  '28': 'Centre-Val de Loire',
  '36': 'Centre-Val de Loire',
  '37': 'Centre-Val de Loire',
  '41': 'Centre-Val de Loire',
  '45': 'Centre-Val de Loire',

  '2A': 'Corse',
  '2B': 'Corse',
  '20': 'Corse',

  '08': 'Grand Est',
  '10': 'Grand Est',
  '51': 'Grand Est',
  '52': 'Grand Est',
  '54': 'Grand Est',
  '55': 'Grand Est',
  '57': 'Grand Est',
  '67': 'Grand Est',
  '68': 'Grand Est',
  '88': 'Grand Est',

  '02': 'Hauts-de-France',
  '59': 'Hauts-de-France',
  '60': 'Hauts-de-France',
  '62': 'Hauts-de-France',
  '80': 'Hauts-de-France',

  '16': 'Nouvelle-Aquitaine',
  '17': 'Nouvelle-Aquitaine',
  '19': 'Nouvelle-Aquitaine',
  '23': 'Nouvelle-Aquitaine',
  '24': 'Nouvelle-Aquitaine',
  '33': 'Nouvelle-Aquitaine',
  '40': 'Nouvelle-Aquitaine',
  '47': 'Nouvelle-Aquitaine',
  '64': 'Nouvelle-Aquitaine',
  '79': 'Nouvelle-Aquitaine',
  '86': 'Nouvelle-Aquitaine',
  '87': 'Nouvelle-Aquitaine',

  '14': 'Normandie',
  '27': 'Normandie',
  '50': 'Normandie',
  '61': 'Normandie',
  '76': 'Normandie',

  '75': 'Île-de-France',
  '77': 'Île-de-France',
  '78': 'Île-de-France',
  '91': 'Île-de-France',
  '92': 'Île-de-France',
  '93': 'Île-de-France',
  '94': 'Île-de-France',
  '95': 'Île-de-France',

  '44': 'Pays de la Loire',
  '49': 'Pays de la Loire',
  '53': 'Pays de la Loire',
  '72': 'Pays de la Loire',
  '85': 'Pays de la Loire',

  '09': 'Occitanie',
  '11': 'Occitanie',
  '12': 'Occitanie',
  '30': 'Occitanie',
  '31': 'Occitanie',
  '32': 'Occitanie',
  '34': 'Occitanie',
  '46': 'Occitanie',
  '48': 'Occitanie',
  '65': 'Occitanie',
  '66': 'Occitanie',
  '81': 'Occitanie',
  '82': 'Occitanie',

  '04': 'Provence-Alpes-Côte d’Azur',
  '05': 'Provence-Alpes-Côte d’Azur',
  '06': 'Provence-Alpes-Côte d’Azur',
  '13': 'Provence-Alpes-Côte d’Azur',
  '83': 'Provence-Alpes-Côte d’Azur',
  '84': 'Provence-Alpes-Côte d’Azur',

  '971': 'Guadeloupe',
  '972': 'Martinique',
  '973': 'Guyane',
  '974': 'La Réunion',
  '976': 'Mayotte'
};


/* =========================================================
   PROFIL UTILISATEUR
   ========================================================= */

let profile =
  JSON.parse(
    localStorage.getItem('or-profile') || 'null'
  ) || {

    activity:
      'services aux entreprises, nettoyage, maintenance',

    keywords:
      'nettoyage, entretien, maintenance, services',

    region:
      'Auvergne-Rhône-Alpes',

    minAmount:
      10000,

    maxAmount:
      500000
  };


/* =========================================================
   SAUVEGARDES
   ========================================================= */

let saved =
  JSON.parse(
    localStorage.getItem('or-saved') || '[]'
  );


let all = [];


/* =========================================================
   API
   ========================================================= */

const API_URL = '/api/boamp';

const DETAIL_API = '/api/boamp-detail';

let dataStatus = 'unknown';


/* =========================================================
   SÉCURITÉ HTML
   ========================================================= */

function esc(value) {

  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}


/* =========================================================
   NOMBRE
   ========================================================= */

function firstNumber(value) {

  if (value == null) {
    return null;
  }

  if (
    typeof value === 'number' &&
    Number.isFinite(value)
  ) {
    return value;
  }

  const match =
    String(value)
      .replace(/\s/g, '')
      .replace(/,/g, '.')
      .match(/-?\d+(?:\.\d+)?/);

  return match
    ? Number(match[0])
    : null;
}


/* =========================================================
   MONTANT
   ========================================================= */

function extractAmount(r) {

  const keys = [

    'montant',
    'montant_marche',
    'montant_total',
    'montant_maximum',
    'valeur_estimee',
    'estimated_value'

  ];

  for (const key of keys) {

    const value =
      firstNumber(r[key]);

    if (
      value != null &&
      value > 0
    ) {

      return value;
    }
  }

  return null;
}


/* =========================================================
   DÉPARTEMENT
   ========================================================= */

function getDepartmentCode(value) {

  const values =
    Array.isArray(value)
      ? value
      : [value];

  for (const item of values) {

    const code =
      String(item || '').trim();

    if (DEPT_REGIONS[code]) {
      return code;
    }

    const match =
      code.match(
        /\b(2A|2B|\d{2,3})\b/
      );

    if (
      match &&
      DEPT_REGIONS[match[1]]
    ) {

      return match[1];
    }
  }

  return '';
}


/* =========================================================
   DATES
   ========================================================= */

function formatDate(value) {

  if (!value) {
    return 'Non communiquée';
  }

  const date =
    new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {

    return 'Non communiquée';
  }

  return date.toLocaleDateString(
    'fr-FR'
  );
}


function formatDateTime(value) {

  if (!value) {
    return 'Non communiquée';
  }

  const date =
    new Date(value);

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {

    return 'Non communiquée';
  }

  return date.toLocaleString(
    'fr-FR'
  );
}


/* =========================================================
   EURO
   ========================================================= */

function formatEUR(value) {

  const number =
    firstNumber(value);

  if (
    number == null ||
    number <= 0
  ) {

    return 'Montant non communiqué';
  }

  return new Intl.NumberFormat(
    'fr-FR',
    {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }
  ).format(number);
}


/* =========================================================
   NORMALISATION BOAMP
   ========================================================= */

function normalizeRecord(input) {

  const r =
    input?.record?.fields ||
    input?.fields ||
    input ||
    {};


  const codes =
    Array.isArray(
      r.descripteur_code
    )
      ? r.descripteur_code.join(', ')
      : (
          r.descripteur_code || ''
        );


  const labels =
    Array.isArray(
      r.descripteur_libelle
    )
      ? r.descripteur_libelle.join(', ')
      : (
          r.descripteur_libelle || ''
        );


  const departmentCode =
    getDepartmentCode(
      r.code_departement
    );


  return {

    id:
      r.idweb ||
      r.id ||
      crypto.randomUUID(),

    idweb:
      r.idweb ||
      r.id ||
      '',

    title:
      r.objet ||
      'Objet non communiqué',

    buyer:
      r.nomacheteur ||
      'Acheteur non communiqué',

    region:
      DEPT_REGIONS[
        departmentCode
      ] ||
      'France',

    department:
      departmentCode,

    amount:
      extractAmount(r),

    deadline:
      r.datelimitereponse ||
      null,

    published:
      r.dateparution ||
      null,

    endDiffusion:
      r.datefindiffusion ||
      null,

    tags:
      labels ||
      codes ||
      r.type_marche_facette ||
      r.type_marche ||
      '',

    source:
      'BOAMP',

    url:
      r.url_avis ||
      '',

    procedure:
      r.procedure_libelle ||
      r.type_procedure ||
      '',

    nature:
      r.nature_libelle ||
      r.nature ||
      '',

    typeAvis:
      r.type_avis ||
      '',

    etat:
      r.etat ||
      '',

    criteres:
      r.criteres ||
      '',

    contractfolderid:
      r.contractfolderid ||
      '',

    score:
      0,

    cpv:
      codes,

    raw:
      r
  };
}


/* =========================================================
   BOAMP LIVE
   ========================================================= */

async function fetchLive() {

  const url =
    new URL(
      API_URL,
      window.location.origin
    );

  url.searchParams.set(
    'limit',
    '100'
  );


  const response =
    await fetch(
      url,
      {
        headers: {
          accept:
            'application/json'
        }
      }
    );


  if (!response.ok) {

    throw new Error(
      'BOAMP ' +
      response.status
    );
  }


  const data =
    await response.json();


  if (data.error) {

    throw new Error(
      data.error
    );
  }


  /*
   * IMPORTANT :
   * L'API BOAMP renvoie les annonces
   * dans "records".
   */

  if (
    !Array.isArray(
      data.records
    )
  ) {

    throw new Error(
      'Réponse BOAMP invalide'
    );
  }


  dataStatus =
    'live';


  return data.records
    .map(
      normalizeRecord
    );
}


/* =========================================================
   SCORE
   ========================================================= */

function score(o) {

  let value = 40;


  const keywords =
    (
      String(
        profile.keywords || ''
      ) +
      ' ' +
      String(
        profile.activity || ''
      )
    )
      .toLowerCase()
      .split(
        /[,;\s]+/
      )
      .filter(
        word =>
          word.length > 2
      );


  const text =
    (
      o.title +
      ' ' +
      o.tags +
      ' ' +
      o.buyer +
      ' ' +
      o.procedure
    )
      .toLowerCase();


  const unique =
    [
      ...new Set(
        keywords
      )
    ];


  const hits =
    unique.filter(
      word =>
        text.includes(word)
    );


  value +=
    Math.min(
      35,
      hits.length * 6
    );


  const wanted =
    String(
      profile.region || ''
    ).toLowerCase();


  if (
    wanted &&
    o.region &&
    o.region.toLowerCase() ===
      wanted
  ) {

    value += 12;

  } else if (
    wanted &&
    o.region !== 'France'
  ) {

    value -= 5;
  }


  const min =
    Number(
      profile.minAmount
    ) || 0;


  const max =
    Number(
      profile.maxAmount
    ) || Infinity;


  if (
    o.amount == null
  ) {

    value += 2;

  } else if (
    o.amount >= min &&
    o.amount <= max
  ) {

    value += 8;

  } else {

    value -= 8;
  }


  if (o.deadline) {

    const date =
      new Date(
        o.deadline
      );


    if (
      !Number.isNaN(
        date.getTime()
      )
    ) {

      const days =
        (
          date -
          new Date()
        ) /
        86400000;


      if (days < 0) {

        value -= 30;

      } else if (days <= 3) {

        value -= 8;

      } else if (days <= 7) {

        value -= 3;
      }
    }
  }


  return Math.max(
    0,
    Math.min(
      99,
      Math.round(value)
    )
  );
}


/* =========================================================
   CARTE OPPORTUNITÉ
   ========================================================= */

function card(o) {

  return `

    <div class="opp">

      <div class="score">
        ${o.score}
      </div>


      <div>

        <h3>
          ${esc(o.title)}
        </h3>


        <div class="meta">

          <span>
            ${esc(o.buyer)}
          </span>

          <span>
            ${esc(o.region)}
          </span>

          <span>
            ${formatEUR(o.amount)}
          </span>

          <span>
            Limite :
            ${formatDate(o.deadline)}
          </span>

        </div>


        <div
          class="muted"
          style="margin-top:5px"
        >
          ${esc(o.tags)}
          · BOAMP
        </div>

      </div>


      <div class="actions">

        <button
          class="primary"
          onclick="detail('${esc(o.id)}')"
        >
          Voir
        </button>


        <button
          onclick="toggleSave('${esc(o.id)}')"
        >
          ${
            saved.includes(o.id)
              ? '★'
              : '☆'
          }
        </button>

      </div>

    </div>
  `;
}


/* =========================================================
   RENDU
   ========================================================= */

function render(
  listId,
  data
) {

  const element =
    document.getElementById(
      listId
    );


  if (!element) {
    return;
  }


  element.innerHTML =
    data.length

      ? data
          .map(card)
          .join('')

      : `
        <div class="empty">
          Aucune opportunité ne correspond
          à vos critères.
        </div>
      `;
}


/* =========================================================
   STATUT
   ========================================================= */

function updateStatus() {

  const status =
    document.getElementById(
      'statusPill'
    );


  const notice =
    document.getElementById(
      'dataNotice'
    );


  if (status) {

    status.textContent =
      dataStatus === 'live'
        ? 'BOAMP LIVE'
        : 'MODE SECOURS';


    status.style.background =
      dataStatus === 'live'
        ? '#ecfdf3'
        : '#fffaeb';


    status.style.color =
      dataStatus === 'live'
        ? '#067647'
        : '#93370d';
  }


  if (notice) {

    notice.textContent =
      dataStatus === 'live'

        ? 'Données réelles BOAMP · API publique gratuite · actualisées automatiquement.'

        : 'Le service BOAMP est momentanément indisponible. Affichage des données de secours uniquement.';


    notice.style.background =
      dataStatus === 'live'
        ? '#ecfdf3'
        : '#fffaeb';


    notice.style.color =
      dataStatus === 'live'
        ? '#067647'
        : '#93370d';
  }
}


/* =========================================================
   INDICATEURS
   ========================================================= */

function updateMetrics() {

  const m1 =
    document.getElementById('m1');

  const m2 =
    document.getElementById('m2');

  const m3 =
    document.getElementById('m3');

  const m4 =
    document.getElementById('m4');


  if (m1) {
    m1.textContent =
      all.length;
  }


  if (m2) {

    m2.textContent =
      all.length

        ? Math.round(
            all.reduce(
              (sum, item) =>
                sum +
                item.score,
              0
            ) /
            all.length
          )

        : 0;
  }


  if (m3) {

    m3.textContent =
      all.filter(
        item => {

          if (!item.deadline) {
            return false;
          }


          const date =
            new Date(
              item.deadline
            );


          if (
            Number.isNaN(
              date.getTime()
            )
          ) {
            return false;
          }


          return (
            (
              date -
              new Date()
            ) /
            86400000
          ) < 7;
        }
      ).length;
  }


  if (m4) {
    m4.textContent =
      saved.length;
  }
}


/* =========================================================
   ACTUALISATION
   ========================================================= */

async function refresh() {

  const button =
    document.getElementById(
      'refresh'
    );


  if (button) {
    button.textContent =
      'Actualisation…';
  }


  try {

    const live =
      await fetchLive();


    all =
      live
        .map(
          opportunity => ({
            ...opportunity,
            score:
              score(opportunity)
          })
        )
        .sort(
          (a, b) =>
            b.score -
            a.score
        );


  } catch (error) {

    console.warn(
      'BOAMP indisponible :',
      error
    );


    dataStatus =
      'fallback';


    all =
      DEMO
        .map(
          opportunity => ({
            ...opportunity,
            score:
              score(opportunity)
          })
        )
        .sort(
          (a, b) =>
            b.score -
            a.score
        );
  }


  filter();


  render(
    'dashList',
    all.slice(0, 6)
  );


  updateStatus();

  updateMetrics();


  if (button) {
    button.textContent =
      'Actualiser';
  }
}


/* =========================================================
   FILTRES
   ========================================================= */

function filter() {

  const search =
    document.getElementById(
      'search'
    );


  const minScore =
    document.getElementById(
      'minScore'
    );


  const region =
    document.getElementById(
      'region'
    );


  const query =
    (
      search?.value ||
      ''
    ).toLowerCase();


  const minimumScore =
    Number(
      minScore?.value ||
      0
    );


  const selectedRegion =
    region?.value ||
    '';


  render(
    'oppList',

    all.filter(
      opportunity => {

        const text =
          (
            opportunity.title +
            ' ' +
            opportunity.buyer +
            ' ' +
            opportunity.tags +
            ' ' +
            opportunity.procedure
          )
            .toLowerCase();


        return (

          (
            !query ||
            text.includes(query)
          )

          &&

          opportunity.score >=
            minimumScore

          &&

          (
            !selectedRegion ||
            opportunity.region ===
              selectedRegion
          )

        );
      }
    )
  );
}


/* =========================================================
   PAGE DÉTAIL
   ========================================================= */

async function detail(id) {

  const opportunity =
    all.find(
      item =>
        String(item.id) ===
        String(id)
    );


  if (!opportunity) {
    return;
  }


  go('detail');


  const content =
    document.getElementById(
      'detailContent'
    );


  if (!content) {
    return;
  }


  content.innerHTML = `

    <div class="card">

      <div class="muted">
        BOAMP
      </div>

      <h1>
        ${esc(
          opportunity.title
        )}
      </h1>

      <div class="scorebig">
        ${opportunity.score}/100
      </div>

      <p>
        Chargement des informations
        détaillées de l'avis…
      </p>

    </div>

  `;


  /*
   * DEMO :
   * pas d'appel API détail.
   */

  if (!opportunity.idweb) {

    renderLocalDetail(
      opportunity
    );

    return;
  }


  /*
   * Données BOAMP réelles.
   */

  try {

    const url =
      new URL(
        DETAIL_API,
        window.location.origin
      );


    url.searchParams.set(
      'idweb',
      opportunity.idweb
    );


    const response =
      await fetch(
        url,
        {
          headers: {
            accept:
              'application/json'
          }
        }
      );


    if (!response.ok) {

      throw new Error(
        'Détail BOAMP ' +
        response.status
      );
    }


    const data =
      await response.json();


    if (data.error) {

      throw new Error(
        data.error
      );
    }


    renderFullDetail(
      opportunity,
      data
    );


  } catch (error) {

    console.error(
      'Erreur détail BOAMP :',
      error
    );


    renderLocalDetail(
      opportunity
    );
  }
}


/* =========================================================
   DÉTAIL LOCAL
   ========================================================= */

function renderLocalDetail(
  opportunity
) {

  const content =
    document.getElementById(
      'detailContent'
    );


  if (!content) {
    return;
  }


  content.innerHTML = `

    <div class="card">

      <div class="muted">
        ${esc(
          opportunity.source
        )}
      </div>


      <h1>
        ${esc(
          opportunity.title
        )}
      </h1>


      <div class="scorebig">
        ${opportunity.score}/100
      </div>


      <p>

        <b>Acheteur :</b>
        ${esc(
          opportunity.buyer
        )}

        <br>

        <b>Zone :</b>
        ${esc(
          opportunity.region
        )}

        <br>

        <b>Montant :</b>
        ${formatEUR(
          opportunity.amount
        )}

        <br>

        <b>Date limite :</b>
        ${formatDate(
          opportunity.deadline
        )}

      </p>


      <hr>


      <h3>
        Pourquoi ce marché correspond
      </h3>


      <p>
        Correspondance calculée à partir
        de votre activité, vos mots-clés,
        votre région et vos critères.
      </p>


      <h3>
        Checklist
      </h3>


      <ul>

        <li>
          Vérifier les pièces administratives
        </li>

        <li>
          Vérifier les critères de capacité
        </li>

        <li>
          Lire le dossier complet
        </li>

        <li>
          Vérifier la date limite
        </li>

      </ul>


      <button
        onclick="toggleSave('${esc(
          opportunity.id
        )}')"
      >
        ${
          saved.includes(
            opportunity.id
          )
            ? 'Retirer des sauvegardées'
            : 'Sauvegarder'
        }
      </button>


      ${
        opportunity.url

          ? `

            <p>

              <a
                href="${esc(
                  opportunity.url
                )}"
                target="_blank"
                rel="noopener"
              >
                🌐 Avis officiel BOAMP
              </a>

            </p>

          `

          : ''
      }

    </div>

  `;
}


/* =========================================================
   DÉTAIL COMPLET
   ========================================================= */

function renderFullDetail(
  opportunity,
  data
) {

  const meta =
    data.meta ||
    opportunity.raw ||
    {};


  const pdfUrl =
    data.pdfUrl ||
    data.pdf_url ||
    '';


  const officialUrl =
    data.officialUrl ||
    data.official_url ||
    opportunity.url ||
    '';


  const html =
    data.html ||
    data.htmlSynthese ||
    data.content ||
    '';


  const procedure =
    meta.procedure_libelle ||
    meta.type_procedure ||
    opportunity.procedure ||
    'Non communiquée';


  const nature =
    meta.nature_libelle ||
    meta.nature ||
    opportunity.nature ||
    'Non communiquée';


  const typeAvis =
    meta.type_avis ||
    opportunity.typeAvis ||
    'Non communiqué';


  const etat =
    meta.etat ||
    opportunity.etat ||
    'Non communiqué';


  const departments =
    Array.isArray(
      meta.code_departement
    )

      ? meta.code_departement.join(', ')

      : (
          meta.code_departement ||
          opportunity.department ||
          'Non communiqué'
        );


  const cpv =
    Array.isArray(
      meta.descripteur_libelle
    )

      ? meta.descripteur_libelle.join(', ')

      : (
          meta.descripteur_libelle ||
          opportunity.tags ||
          'Non communiqué'
        );


  const codes =
    Array.isArray(
      meta.descripteur_code
    )

      ? meta.descripteur_code.join(', ')

      : (
          meta.descripteur_code ||
          'Non communiqué'
        );


  const criteria =
    meta.criteres ||
    opportunity.criteres ||
    'Non communiqué';


  const content =
    document.getElementById(
      'detailContent'
    );


  if (!content) {
    return;
  }


  let htmlSection = '';


  /*
   * Affichage du contenu HTML
   * complet lorsqu'il est fourni
   * par l'API détail.
   */

  if (html) {

    const safeHtml =
      String(html)
        .replace(
          /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
          ''
        );


    htmlSection = `

      <hr>

      <h2>
        Avis complet
      </h2>

      <div
        style="
          width:100%;
          min-height:500px;
          padding:20px;
          border:1px solid #e5e7eb;
          border-radius:12px;
          background:#fff;
          overflow:auto;
        "
      >

        ${safeHtml}

      </div>

    `;
  }


  content.innerHTML = `

    <div class="card">

      <div class="muted">

        BOAMP

        ${
          opportunity.idweb
            ? ' · ' +
              esc(
                opportunity.idweb
              )
            : ''
        }

      </div>


      <h1>
        ${esc(
          opportunity.title
        )}
      </h1>


      <div class="scorebig">
        ${opportunity.score}/100
      </div>


      <div
        class="toolbar"
        style="
          margin-top:20px;
          display:flex;
          gap:10px;
          flex-wrap:wrap;
        "
      >

        ${
          pdfUrl

            ? `

              <a
                href="${esc(
                  pdfUrl
                )}"
                target="_blank"
                rel="noopener"
                style="
                  background:#155eef;
                  color:white;
                  text-decoration:none;
                  padding:10px 14px;
                  border-radius:9px;
                  font-weight:700;
                "
              >
                📄 Extrait PDF de l'avis
              </a>

            `

            : ''
        }


        ${
          officialUrl

            ? `

              <a
                href="${esc(
                  officialUrl
                )}"
                target="_blank"
                rel="noopener"
                style="
                  background:#111827;
                  color:white;
                  text-decoration:none;
                  padding:10px 14px;
                  border-radius:9px;
                  font-weight:700;
                "
              >
                🌐 Avis officiel BOAMP
              </a>

            `

            : ''
        }

      </div>


      <hr>


      <h2>
        Informations générales
      </h2>


      <p>

        <b>Acheteur :</b>
        ${esc(
          opportunity.buyer
        )}

        <br>

        <b>Région :</b>
        ${esc(
          opportunity.region
        )}

        <br>

        <b>Département :</b>
        ${esc(
          departments
        )}

        <br>

        <b>Nature :</b>
        ${esc(
          nature
        )}

        <br>

        <b>Type d'avis :</b>
        ${esc(
          typeAvis
        )}

        <br>

        <b>État :</b>
        ${esc(
          etat
        )}

      </p>


      <hr>


      <h2>
        Dates
      </h2>


      <p>

        <b>Publication :</b>
        ${formatDateTime(
          meta.dateparution ||
          opportunity.published
        )}

        <br>

        <b>Date limite :</b>
        ${formatDateTime(
          meta.datelimitereponse ||
          opportunity.deadline
        )}

        <br>

        <b>Fin de diffusion :</b>
        ${formatDateTime(
          meta.datefindiffusion
        )}

      </p>


      <hr>


      <h2>
        Procédure
      </h2>


      <p>

        <b>Procédure :</b>
        ${esc(
          procedure
        )}

        <br>

        <b>Type :</b>
        ${esc(
          meta.type_procedure ||
          'Non communiqué'
        )}

        <br>

        <b>Sous-type :</b>
        ${esc(
          meta.soustype_procedure ||
          'Non communiqué'
        )}

        <br>

        <b>Référence :</b>
        ${esc(
          meta.contractfolderid ||
          'Non communiquée'
        )}

      </p>


      <h3>
        Critères
      </h3>


      <p>
        ${esc(
          criteria
        )}
      </p>


      <hr>


      <h2>
        Classification
      </h2>


      <p>

        <b>Descripteurs :</b>
        ${esc(
          cpv
        )}

        <br>

        <b>Codes :</b>
        ${esc(
          codes
        )}

      </p>


      ${htmlSection}


      <hr>


      <button
        onclick="toggleSave('${esc(
          opportunity.id
        )}')"
      >

        ${
          saved.includes(
            opportunity.id
          )

            ? '★ Retirer des sauvegardées'

            : '☆ Sauvegarder'
        }

      </button>


      <p class="muted">

        Les informations sont récupérées
        depuis les données publiques du BOAMP.

      </p>

    </div>

  `;
}


/* =========================================================
   SAUVEGARDE
   ========================================================= */

function toggleSave(id) {

  saved =
    saved.includes(id)

      ? saved.filter(
          x => x !== id
        )

      : [
          ...saved,
          id
        ];


  localStorage.setItem(
    'or-saved',
    JSON.stringify(saved)
  );


  updateMetrics();


  render(
    'savedList',

    all.filter(
      opportunity =>
        saved.includes(
          opportunity.id
        )
    )
  );
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function go(page) {

  document
    .querySelectorAll('.page')
    .forEach(
      section =>
        section.classList.add(
          'hidden'
        )
    );


  const target =
    document.getElementById(
      page
    );


  if (target) {

    target.classList.remove(
      'hidden'
    );
  }


  document
    .querySelectorAll(
      'nav button'
    )
    .forEach(
      button =>
        button.classList.toggle(
          'active',
          button.dataset.page ===
            page
        )
    );


  if (
    page === 'saved'
  ) {

    render(
      'savedList',

      all.filter(
        opportunity =>
          saved.includes(
            opportunity.id
          )
      )
    );
  }
}


/* =========================================================
   ÉVÉNEMENTS NAVIGATION
   ========================================================= */

document
  .querySelectorAll(
    'nav button'
  )
  .forEach(
    button => {

      button.onclick =
        () =>
          go(
            button.dataset.page
          );
    }
  );


/* =========================================================
   RECHERCHE
   ========================================================= */

const search =
  document.getElementById(
    'search'
  );


if (search) {

  search.oninput =
    filter;
}


/* =========================================================
   SCORE MINIMUM
   ========================================================= */

const minScore =
  document.getElementById(
    'minScore'
  );


if (minScore) {

  minScore.onchange =
    filter;
}


/* =========================================================
   RÉGION
   ========================================================= */

const region =
  document.getElementById(
    'region'
  );


if (region) {

  region.onchange =
    filter;
}


/* =========================================================
   RECHERCHE DASHBOARD
   ========================================================= */

const dashSearch =
  document.getElementById(
    'dashSearch'
  );


if (dashSearch) {

  dashSearch.oninput =
    event => {

      const query =
        event.target.value
          .toLowerCase();


      render(
        'dashList',

        all
          .filter(
            opportunity =>
              (
                opportunity.title +
                ' ' +
                opportunity.buyer +
                ' ' +
                opportunity.tags
              )
                .toLowerCase()
                .includes(
                  query
                )
          )
          .slice(
            0,
            8
          )
      );
    };
}


/* =========================================================
   BOUTON ACTUALISER
   ========================================================= */

const refreshButton =
  document.getElementById(
    'refresh'
  );


if (refreshButton) {

  refreshButton.onclick =
    refresh;
}


/* =========================================================
   RETOUR
   ========================================================= */

const back =
  document.getElementById(
    'back'
  );


if (back) {

  back.onclick =
    () =>
      go(
        'opportunities'
      );
}


/* =========================================================
   ENREGISTREMENT DU PROFIL
   ========================================================= */

const saveProfile =
  document.getElementById(
    'saveProfile'
  );


if (saveProfile) {

  saveProfile.onclick =
    () => {

      const activity =
        document.getElementById(
          'activity'
        );


      const keywords =
        document.getElementById(
          'keywords'
        );


      const profileRegion =
        document.getElementById(
          'profileRegion'
        );


      const minAmount =
        document.getElementById(
          'minAmount'
        );


      const maxAmount =
        document.getElementById(
          'maxAmount'
        );


      profile = {

        activity:
          activity?.value ||
          '',

        keywords:
          keywords?.value ||
          '',

        region:
          profileRegion?.value ||
          '',

        minAmount:
          minAmount?.value ||
          0,

        maxAmount:
          maxAmount?.value ||
          0
      };


      localStorage.setItem(
        'or-profile',
        JSON.stringify(
          profile
        )
      );


      const savedMsg =
        document.getElementById(
          'savedMsg'
        );


      if (savedMsg) {

        savedMsg.textContent =
          'Radar enregistré. Les scores ont été recalculés.';
      }


      refresh();
    };
}


/* =========================================================
   DÉMARRAGE
   ========================================================= */

refresh();


/* =========================================================
   FONCTIONS ACCESSIBLES DEPUIS LE HTML
   ========================================================= */

window.detail =
  detail;


window.toggleSave =
  toggleSave;
