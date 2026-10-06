const BASE='https://boamp-datadila.opendatasoft.com/api/explore/v2.0/catalog/datasets/boamp/records';
const ALLOWED_ORIGIN='*';
export default {async fetch(request){
  const u=new URL(request.url);
  if(request.method==='OPTIONS') return new Response(null,{headers:{'access-control-allow-origin':ALLOWED_ORIGIN,'access-control-allow-methods':'GET,OPTIONS','access-control-allow-headers':'*'}});
  if(u.pathname!=='/api/boamp') return new Response('Opportunity Radar API',{status:200,headers:{'content-type':'text/plain'}});
  const q=u.searchParams.get('q')||''; const limit=Math.min(Math.max(Number(u.searchParams.get('limit')||50),1),100);
  const api=new URL(BASE); api.searchParams.set('limit',String(limit)); api.searchParams.set('order_by','dateparution DESC');
  api.searchParams.set('select','idweb,id,objet,nomacheteur,code_departement,code_departement_prestation,datelimitereponse,dateparution,descripteur_code,descripteur_libelle,type_marche,type_marche_facette,type_avis,url_avis,DONNEES');
  if(q) api.searchParams.set('where',`search(*, '${q.replaceAll("'","''")}')`);
  const r=await fetch(api,{headers:{accept:'application/json'}}); const body=await r.text();
  return new Response(body,{status:r.status,headers:{'content-type':'application/json; charset=utf-8','access-control-allow-origin':ALLOWED_ORIGIN,'cache-control':'public,max-age=300'}});
}};
