const compression = require('compression');
const express = require('express');

const app = express();
app.use(compression());
app.use(express.static('dist'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', { root: './dist' }), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  }
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));


