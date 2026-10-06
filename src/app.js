const DEMO = [
  ['Maintenance multi-sites des bâtiments administratifs','Métropole de Lyon','Auvergne-Rhône-Alpes',187000,'2026-10-20','Maintenance, entretien'],
  ['Prestations de nettoyage de locaux','Ville de Grenoble','Auvergne-Rhône-Alpes',96000,'2026-10-15','Nettoyage, entretien'],
  ['Entretien des espaces publics','Commune de Valence','Auvergne-Rhône-Alpes',240000,'2026-10-28','Entretien, services'],
  ['Maintenance préventive des installations','Centre hospitalier','Auvergne-Rhône-Alpes',420000,'2026-10-13','Maintenance'],
  ['Nettoyage de bâtiments scolaires','Région Auvergne-Rhône-Alpes','Auvergne-Rhône-Alpes',310000,'2026-11-02','Nettoyage'],
  ['Entretien courant des locaux','Ville de Paris','Île-de-France',155000,'2026-10-18','Nettoyage'],
  ['Maintenance technique de sites publics','Département de l’Isère','Auvergne-Rhône-Alpes',275000,'2026-10-30','Maintenance'],
  ['Nettoyage et hygiène de bâtiments','CHU Toulouse','Occitanie',198000,'2026-10-22','Nettoyage, hygiène'],
  ['Petite maintenance multiservice','Ville de Nice','Provence-Alpes-Côte d’Azur',74000,'2026-10-17','Maintenance, services'],
  ['Entretien des locaux administratifs','Région PACA','Provence-Alpes-Côte d’Azur',125000,'2026-11-05','Nettoyage'],
  ['Maintenance des équipements collectifs','Agglomération Grenoble-Alpes','Auvergne-Rhône-Alpes',365000,'2026-10-25','Maintenance'],
  ['Services d’entretien et nettoyage','Commune de Chambéry','Auvergne-Rhône-Alpes',112000,'2026-10-12','Nettoyage, entretien']
].map((x,i)=>({
  id:'demo-'+i,
  title:x[0],
  buyer:x[1],
  region:x[2],
  amount:x[3],
  deadline:x[4],
  tags:x[5],
  source:'DEMO',
  url:'#',
  score:0
}));

const DEPT_REGIONS = {
  '01':'Auvergne-Rhône-Alpes',
  '03':'Auvergne-Rhône-Alpes',
  '07':'Auvergne-Rhône-Alpes',
  '15':'Auvergne-Rhône-Alpes',
  '26':'Auvergne-Rhône-Alpes',
  '38':'Auvergne-Rhône-Alpes',
  '42':'Auvergne-Rhône-Alpes',
  '43':'Auvergne-Rhône-Alpes',
  '63':'Auvergne-Rhône-Alpes',
  '69':'Auvergne-Rhône-Alpes',
  '73':'Auvergne-Rhône-Alpes',
  '74':'Auvergne-Rhône-Alpes',

  '21':'Bourgogne-Franche-Comté',
  '25':'Bourgogne-Franche-Comté',
  '39':'Bourgogne-Franche-Comté',
  '58':'Bourgogne-Franche-Comté',
  '70':'Bourgogne-Franche-Comté',
  '71':'Bourgogne-Franche-Comté',
  '89':'Bourgogne-Franche-Comté',
  '90':'Bourgogne-Franche-Comté',

  '22':'Bretagne',
  '29':'Bretagne',
  '35':'Bretagne',
  '56':'Bretagne',

  '18':'Centre-Val de Loire',
  '28':'Centre-Val de Loire',
  '36':'Centre-Val de Loire',
  '37':'Centre-Val de Loire',
  '41':'Centre-Val de Loire',
  '45':'Centre-Val de Loire',

  '2A':'Corse',
  '2B':'Corse',
  '20':'Corse',

  '08':'Grand Est',
  '10':'Grand Est',
  '51':'Grand Est',
  '52':'Grand Est',
  '54':'Grand Est',
  '55':'Grand Est',
  '57':'Grand Est',
  '67':'Grand Est',
  '68':'Grand Est',
  '88':'Grand Est',

  '02':'Hauts-de-France',
  '59':'Hauts-de-France',
  '60':'Hauts-de-France',
  '62':'Hauts-de-France',
  '80':'Hauts-de-France',

  '16':'Nouvelle-Aquitaine',
  '17':'Nouvelle-Aquitaine',
  '19':'Nouvelle-Aquitaine',
  '23':'Nouvelle-Aquitaine',
  '24':'Nouvelle-Aquitaine',
  '33':'Nouvelle-Aquitaine',
  '40':'Nouvelle-Aquitaine',
  '47':'Nouvelle-Aquitaine',
  '64':'Nouvelle-Aquitaine',
  '79':'Nouvelle-Aquitaine',
  '86':'Nouvelle-Aquitaine',
  '87':'Nouvelle-Aquitaine',

  '14':'Normandie',
  '27':'Normandie',
  '50':'Normandie',
  '61':'Normandie',
  '76':'Normandie',

  '75':'Île-de-France',
  '77':'Île-de-France',
  '78':'Île-de-France',
  '91':'Île-de-France',
  '92':'Île-de-France',
  '93':'Île-de-France',
  '94':'Île-de-France',
  '95':'Île-de-France',

  '44':'Pays de la Loire',
  '49':'Pays de la Loire',
  '53':'Pays de la Loire',
  '72':'Pays de la Loire',
  '85':'Pays de la Loire',

  '09':'Occitanie',
  '11':'Occitanie',
  '12':'Occitanie',
  '30':'Occitanie',
  '31':'Occitanie',
  '32':'Occitanie',
  '34':'Occitanie',
  '46':'Occitanie',
  '48':'Occitanie',
  '65':'Occitanie',
  '66':'Occitanie',
  '81':'Occitanie',
  '82':'Occitanie',

  '04':'Provence-Alpes-Côte d’Azur',
  '05':'Provence-Alpes-Côte d’Azur',
  '06':'Provence-Alpes-Côte d’Azur',
  '13':'Provence-Alpes-Côte d’Azur',
  '83':'Provence-Alpes-Côte d’Azur',
  '84':'Provence-Alpes-Côte d’Azur',

  '971':'Guadeloupe',
  '972':'Martinique',
  '973':'Guyane',
  '974':'La Réunion',
  '976':'Mayotte'
};

let profile = JSON.parse(
  localStorage.getItem('or-profile') || 'null'
) || {
  activity:'services aux entreprises, nettoyage, maintenance',
  keywords:'nettoyage, entretien, maintenance, services',
  region:'Auvergne-Rhône-Alpes',
  minAmount:10000,
  maxAmount:500000
};

let saved = JSON.parse(
  localStorage.getItem('or-saved') || '[]'
);

let all = [];

const API_URL = '/api/boamp';

let dataStatus = 'unknown';


/* =========================
   OUTILS
========================= */

function firstNumber(value){
  if(value == null) return null;

  if(
    typeof value === 'number' &&
    Number.isFinite(value)
  ){
    return value;
  }

  const m = String(value)
    .replace(/\s/g,'')
    .replace(/,/g,'.')
    .match(/-?\d+(?:\.\d+)?/);

  return m ? Number(m[0]) : null;
}


function extractAmount(r){
  const keys = [
    'montant',
    'montant_marche',
    'montant_total',
    'montant_maximum',
    'valeur_estimee',
    'estimated_value'
  ];

  for(const key of keys){
    const n = firstNumber(r[key]);

    if(
      n != null &&
      n > 0
    ){
      return n;
    }
  }

  return null;
}


function getDepartmentCode(value){
  const values = Array.isArray(value)
    ? value
    : [value];

  for(const item of values){

    const code =
      String(item || '').trim();

    if(DEPT_REGIONS[code]){
      return code;
    }

    const match =
      code.match(
        /\b(2A|2B|\d{2,3})\b/
      );

    if(
      match &&
      DEPT_REGIONS[match[1]]
    ){
      return match[1];
    }
  }

  return '';
}


function formatDate(value){
  if(!value){
    return 'Non communiquée';
  }

  const d = new Date(value);

  if(Number.isNaN(d.getTime())){
    return 'Non communiquée';
  }

  return d.toLocaleDateString('fr-FR');
}


/* =========================
   NORMALISATION BOAMP
========================= */

function normalizeRecord(input){

  /*
   * CORRECTION IMPORTANTE :
   *
   * OpenDataSoft peut renvoyer :
   *
   * {
   *   record: {
   *     fields: {
   *       objet: "...",
   *       nomacheteur: "..."
   *     }
   *   }
   * }
   *
   * ou directement les champs.
   *
   * On gère les deux formats.
   */

  const r =
    input?.record?.fields ||
    input?.fields ||
    input ||
    {};


  const codes =
    Array.isArray(r.descripteur_code)
      ? r.descripteur_code.join(', ')
      : (r.descripteur_code || '');


  const labels =
    Array.isArray(r.descripteur_libelle)
      ? r.descripteur_libelle.join(', ')
      : (r.descripteur_libelle || '');


  const departmentCode =
    getDepartmentCode(
      r.code_departement
    );


  return {

    id:
      r.idweb ||
      r.id ||
      input?.record?.id ||
      input?.recordid ||
      crypto.randomUUID(),


    title:
      r.objet ||
      'Objet non communiqué',


    buyer:
      r.nomacheteur ||
      'Acheteur non communiqué',


    region:
      DEPT_REGIONS[departmentCode] ||
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


    score:
      0,


    cpv:
      codes,


    raw:
      r
  };
}


/* =========================
   BOAMP LIVE
========================= */

async function fetchLive(){

  const url = new URL(
    API_URL,
    window.location.origin
  );


  /*
   * On récupère les annonces
   * puis on les analyse localement.
   */

  url.searchParams.set(
    'limit',
    '100'
  );


  const response =
    await fetch(
      url,
      {
        headers:{
          accept:
            'application/json'
        }
      }
    );


  if(!response.ok){

    throw new Error(
      'BOAMP ' +
      response.status
    );

  }


  const data =
    await response.json();


  if(data.error){

    throw new Error(
      data.error
    );

  }


  if(
    !Array.isArray(
      data.records
    )
  ){

    throw new Error(
      'Réponse BOAMP invalide'
    );

  }


  dataStatus =
    'live';


  /*
   * IMPORTANT :
   * aucune suppression des annonces
   * sans date limite.
   */

  return data.records
    .map(normalizeRecord);
}


/* =========================
   SCORE
========================= */

function score(o){

  let s = 40;


  const kw = (
    String(
      profile.keywords || ''
    ) +
    ' ' +
    String(
      profile.activity || ''
    )
  )
    .toLowerCase()
    .split(/[,;\s]+/)
    .filter(
      k => k.length > 2
    );


  const text = (
    o.title +
    ' ' +
    o.tags +
    ' ' +
    o.buyer
  ).toLowerCase();


  const unique =
    [...new Set(kw)];


  const hits =
    unique.filter(
      k => text.includes(k)
    );


  s += Math.min(
    35,
    hits.length * 6
  );


  const wanted =
    String(
      profile.region || ''
    ).toLowerCase();


  if(
    wanted &&
    o.region &&
    o.region.toLowerCase() === wanted
  ){

    s += 12;

  }else if(
    wanted &&
    o.region !== 'France'
  ){

    s -= 5;

  }


  const min =
    Number(
      profile.minAmount
    ) || 0;


  const max =
    Number(
      profile.maxAmount
    ) || Infinity;


  if(o.amount == null){

    s += 2;

  }else if(
    o.amount >= min &&
    o.amount <= max
  ){

    s += 8;

  }else{

    s -= 8;

  }


  if(o.deadline){

    const date =
      new Date(o.deadline);


    if(
      !Number.isNaN(
        date.getTime()
      )
    ){

      const days =
        (
          date - new Date()
        ) /
        86400000;


      if(days < 0){

        s -= 30;

      }else if(days <= 3){

        s -= 8;

      }else if(days <= 7){

        s -= 3;

      }

    }

  }


  return Math.max(
    0,
    Math.min(
      99,
      Math.round(s)
    )
  );
}


/* =========================
   AFFICHAGE
========================= */

function formatEUR(n){

  return n
    ? new Intl.NumberFormat(
        'fr-FR',
        {
          style:'currency',
          currency:'EUR',
          maximumFractionDigits:0
        }
      ).format(n)
    : 'Montant non communiqué';
}


function card(o){

  return `
    <div class="opp">

      <div class="score">
        ${o.score}
      </div>

      <div>

        <h3>
          ${o.title}
        </h3>

        <div class="meta">

          <span>
            ${o.buyer}
          </span>

          <span>
            ${o.region}
          </span>

          <span>
            ${formatEUR(o.amount)}
          </span>

          <span>
            Limite ${formatDate(o.deadline)}
          </span>

        </div>

        <div
          class="muted"
          style="margin-top:5px"
        >
          ${o.tags} · ${o.source}
        </div>

      </div>

      <div class="actions">

        <button
          onclick="detail('${o.id}')"
        >
          Voir
        </button>

        <button
          onclick="toggleSave('${o.id}')"
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


function render(listId,data){

  const element =
    document.getElementById(
      listId
    );

  if(!element){
    return;
  }


  element.innerHTML =
    data.length
      ? data.map(card).join('')
      : `
        <div class="empty">
          Aucune opportunité ne correspond
          à vos critères.
        </div>
      `;
}


/* =========================
   ACTUALISATION
========================= */

async function refresh(){

  const btn =
    document.getElementById(
      'refresh'
    );


  if(btn){
    btn.textContent =
      'Actualisation…';
  }


  try{

    const live =
      await fetchLive();


    all =
      live
        .map(o => ({
          ...o,
          score:score(o)
        }))
        .sort(
          (a,b) =>
            b.score - a.score
        );


  }catch(e){

    dataStatus =
      'fallback';


    all =
      DEMO
        .map(o => ({
          ...o,
          score:score(o)
        }))
        .sort(
          (a,b) =>
            b.score - a.score
        );


    console.warn(
      'BOAMP indisponible:',
      e
    );

  }


  filter();


  render(
    'dashList',
    all.slice(0,6)
  );


  const status =
    document.getElementById(
      'statusPill'
    );


  const notice =
    document.getElementById(
      'dataNotice'
    );


  if(status){

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


  if(notice){

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


  const m1 =
    document.getElementById(
      'm1'
    );

  if(m1){
    m1.textContent =
      all.length;
  }


  const m2 =
    document.getElementById(
      'm2'
    );

  if(m2){

    m2.textContent =
      all.length
        ? Math.round(
            all.reduce(
              (a,b) =>
                a + b.score,
              0
            ) /
            all.length
          )
        : 0;

  }


  const m3 =
    document.getElementById(
      'm3'
    );

  if(m3){

    m3.textContent =
      all.filter(o => {

        if(!o.deadline){
          return false;
        }


        const d =
          new Date(
            o.deadline
          );


        if(
          Number.isNaN(
            d.getTime()
          )
        ){
          return false;
        }


        return (
          (d - new Date()) /
          86400000
        ) < 7;

      }).length;

  }


  const m4 =
    document.getElementById(
      'm4'
    );

  if(m4){

    m4.textContent =
      saved.length;

  }


  if(btn){

    btn.textContent =
      'Actualiser';

  }
}


/* =========================
   FILTRES
========================= */

function filter(){

  const searchElement =
    document.getElementById(
      'search'
    );


  const scoreElement =
    document.getElementById(
      'minScore'
    );


  const regionElement =
    document.getElementById(
      'region'
    );


  const q =
    (
      searchElement?.value ||
      ''
    ).toLowerCase();


  const ms =
    Number(
      scoreElement?.value || 0
    );


  const r =
    regionElement?.value ||
    '';


  render(
    'oppList',

    all.filter(o =>

      (
        !q ||

        (
          o.title +
          ' ' +
          o.buyer +
          ' ' +
          o.tags
        )
          .toLowerCase()
          .includes(q)

      ) &&

      o.score >= ms &&

      (
        !r ||
        o.region === r
      )

    )
  );
}


/* =========================
   DETAIL
========================= */

function detail(id){

  const o =
    all.find(
      x => x.id === id
    );


  if(!o){
    return;
  }


  document
    .querySelectorAll('.page')
    .forEach(
      p =>
        p.classList.add(
          'hidden'
        )
    );


  const detailPage =
    document.getElementById(
      'detail'
    );


  if(detailPage){

    detailPage.classList.remove(
      'hidden'
    );

  }


  const content =
    document.getElementById(
      'detailContent'
    );


  if(!content){
    return;
  }


  content.innerHTML = `

    <div class="card">

      <div class="muted">
        ${o.source}
      </div>

      <h1>
        ${o.title}
      </h1>

      <div class="scorebig">
        ${o.score}/100
      </div>

      <p>

        <b>Acheteur :</b>
        ${o.buyer}

        <br>

        <b>Zone :</b>
        ${o.region}

        <br>

        <b>Montant :</b>
        ${formatEUR(o.amount)}

        <br>

        <b>Date limite :</b>
        ${formatDate(o.deadline)}

      </p>

      <hr>

      <h3>
        Pourquoi ce marché correspond
      </h3>

      <p>
        Correspondance calculée à partir de
        votre activité, vos mots-clés,
        votre région, votre fourchette
        de montant et la deadline.
      </p>

      <h3>
        Checklist
      </h3>

      <ul>

        <li>
          Vérifier les pièces administratives demandées
        </li>

        <li>
          Vérifier les critères de capacité et certifications
        </li>

        <li>
          Lire le dossier de consultation complet
        </li>

        <li>
          Confirmer la date limite et les modalités de dépôt
        </li>

      </ul>

      <p class="muted">
        Cette analyse est une aide au tri
        et ne constitue pas un conseil juridique.
      </p>

      <button
        class="toolbar button"
        onclick="toggleSave('${o.id}')"
      >
        ${
          saved.includes(o.id)
            ? 'Retirer des sauvegardées'
            : 'Sauvegarder'
        }
      </button>

      ${
        o.url
          ? `
            <a
              href="${o.url}"
              target="_blank"
              rel="noopener"
            >
              Source officielle
            </a>
          `
          : ''
      }

    </div>

  `;
}


/* =========================
   SAUVEGARDES
========================= */

function toggleSave(id){

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


  refresh();


  render(
    'savedList',

    all.filter(
      o =>
        saved.includes(o.id)
    )
  );


  const detailPage =
    document.getElementById(
      'detail'
    );


  if(
    detailPage &&
    !detailPage.classList.contains(
      'hidden'
    )
  ){

    detail(id);

  }
}


/* =========================
   NAVIGATION
========================= */

function go(page){

  document
    .querySelectorAll('.page')
    .forEach(
      p =>
        p.classList.add(
          'hidden'
        )
    );


  const target =
    document.getElementById(
      page
    );


  if(target){

    target.classList.remove(
      'hidden'
    );

  }


  document
    .querySelectorAll('nav button')
    .forEach(
      b =>
        b.classList.toggle(
          'active',
          b.dataset.page === page
        )
    );


  if(page === 'saved'){

    render(
      'savedList',

      all.filter(
        o =>
          saved.includes(o.id)
      )
    );

  }
}


/* =========================
   EVENEMENTS
========================= */

document
  .querySelectorAll('nav button')
  .forEach(
    b =>
      b.onclick =
        () => go(
          b.dataset.page
        )
  );


const search =
  document.getElementById(
    'search'
  );

if(search){
  search.oninput =
    filter;
}


const minScore =
  document.getElementById(
    'minScore'
  );

if(minScore){
  minScore.onchange =
    filter;
}


const region =
  document.getElementById(
    'region'
  );

if(region){
  region.onchange =
    filter;
}


const dashSearch =
  document.getElementById(
    'dashSearch'
  );

if(dashSearch){

  dashSearch.oninput =
    e => {

      render(
        'dashList',

        all.filter(o =>

          (
            o.title +
            ' ' +
            o.buyer
          )
            .toLowerCase()
            .includes(
              e.target.value
                .toLowerCase()
            )

        ).slice(0,8)

      );

    };

}


const refreshButton =
  document.getElementById(
    'refresh'
  );

if(refreshButton){

  refreshButton.onclick =
    refresh;

}


const back =
  document.getElementById(
    'back'
  );

if(back){

  back.onclick =
    () =>
      go(
        'opportunities'
      );

}


const saveProfile =
  document.getElementById(
    'saveProfile'
  );


if(saveProfile){

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
          activity?.value || '',

        keywords:
          keywords?.value || '',

        region:
          profileRegion?.value || '',

        minAmount:
          minAmount?.value || 0,

        maxAmount:
          maxAmount?.value || 0

      };


      localStorage.setItem(
        'or-profile',
        JSON.stringify(profile)
      );


      const savedMsg =
        document.getElementById(
          'savedMsg'
        );


      if(savedMsg){

        savedMsg.textContent =
          'Radar enregistré. Les scores ont été recalculés.';

      }


      refresh();

    };

}


/* =========================
   DEMARRAGE
========================= */

refresh();


window.detail =
  detail;

window.toggleSave =
  toggleSave;
