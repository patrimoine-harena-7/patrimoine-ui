const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Middleware pour la gestion des en-têtes CORS
server.use(middlewares);
server.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Middleware pour la gestion des erreurs lors des requêtes POST
server.use(jsonServer.bodyParser);

// Ajouter un point de terminaison personnalisé pour POST et vérifier les données
server.post('/data', (req, res, next) => {
  // Exemple de validation simple
  if (!req.body.nom || !req.body.valeur_comptable) {
    return res.status(400).json({ error: "Les champs 'nom' et 'valeur_comptable' sont requis" });
  }
  // Si tout est en ordre, continuer avec la requête
  next();
});

// Utiliser le routeur pour les autres requêtes
server.use(router);

// Gestion des erreurs internes du serveur
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Une erreur interne est survenue" });
});

server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});

server.post('/data', (req, res, next) => {
  if (!req.body.nom || !req.body.valeur_comptable) {
      return res.status(400).json({ error: "Les champs 'nom' et 'valeur_comptable' sont requis" });
  }
  next();
}
)