const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir un dossier public si tu ajoutes des fichiers HTML plus tard
app.use(express.static(path.join(__dirname, 'public')));

// Route principale
app.get('/', (req, res) => {
  res.send('APIDEGPT est vivant.');
});

// Route ping pour heartbeat
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`🚀 Serveur APIDEGPT actif sur le port ${port}`);
});
