const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(_dirname + '/dist/login-angular'));

app.get('/*', (req, res) => {
  res.sendFile(_dirname + '/dist/login-angular/index.html');
});

app.listen(PORT, () => {
  console.log('Servidor iniciado na porta ' + PORT);
})