const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Railway utilisera automatiquement son port fourni !

// Servir public/ si un jour tu ajoutes un index.html
app.use(express.static(path.join(__dirname, 'public')));

// Route principale
app.get('/', (req, res) => {
  res.send('APIDEGPT est vivant.');
});

// Route heartbeat obligatoire
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Démarrer serveur
app.listen(port, () => {
  console.log(`🚀 Serveur APIDEGPT actif sur le port ${port}`);
});
