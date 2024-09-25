const express = require('express');
const app = express();

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Démarre le serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
