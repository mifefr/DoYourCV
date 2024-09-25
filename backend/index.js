const express = require('express');
const userController = require('./src/application/controllers/UserController');

const app = express();

app.use(express.json());

app.user('/api', userController);

// Démarre le serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
