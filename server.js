const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

app.get('/ping', (req, res) => res.send('pong'));

  res.send('APIDEGPT est vivant.');
});

app.listen(port, () => {
  console.log(`Serveur actif sur le port ${port}`);
});
