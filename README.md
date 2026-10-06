# Opportunity Radar — MVP gratuit

MVP d'un radar de marchés publics utilisant uniquement des services gratuits.

## Sources
- BOAMP Open Data API — gratuite, licence ouverte.
- TED Search API — recherche des avis publiés accessible anonymement.

## Architecture
- `src/` : interface web statique.
- `worker/boamp.js` : proxy Cloudflare Worker gratuit vers BOAMP.
- `supabase/schema.sql` : schéma optionnel pour Supabase Free.

## Test local
Le frontend attend par défaut `http://localhost:8787/api/boamp`.

1. Installer Node.js.
2. `npx wrangler dev worker/boamp.js`
3. Ouvrir `src/index.html` via un serveur local, par exemple `python3 -m http.server 8080 --directory src`.
4. Ouvrir `http://localhost:8080`.

Pour un Worker Cloudflare déployé, dans la console navigateur :
`localStorage.setItem('or-worker-url','https://TON-WORKER.workers.dev')`
Puis actualiser.

## Important
Le MVP ne nécessite aucune clé IA et n'utilise aucune API payante. Les données DEMO ne servent que de secours si le Worker BOAMP n'est pas accessible.

## Version 2 — ingestion BOAMP réelle

Le Worker demande explicitement les champs publics nécessaires au scoring et extrait les montants lorsqu'ils sont présents dans les données structurées de l'avis. Le frontend ne considère les données DEMO comme secours que si l'appel BOAMP échoue ou ne renvoie aucun résultat.

Sources officielles : BOAMP et TED. Le Search API TED pour les avis publiés est accessible sans authentification.
