
const express = require('express');
const app = express();
const appName = 'trabalho-angular';

const port = process.env.PORT || 4200;


app.get('/*', (req, res) => {
  res.sendFile(`${outputPath}/index.html`);
});

app.listen(port, () => {
  console.info("Aplicacao rodando em http://localhost4200");


});
