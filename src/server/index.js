require('dotenv').config();

const compression = require('compression');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(compression());
app.use(express.json());
app.use(express.static('dist'));


//GET health check endpoint localhost:8080/api/health
app.get('/api/health', function(req, res) {
  res.status(200).send("API is okay")
});


app.get('/*', function(req, res) {
  res.sendFile('index.html', { root: './dist' }), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  }
});


app.listen(8080, () => process.env.MODE === "dev" ? console.log("Server listening on port 8080! \nClient running on port 8081!") : console.log("App running on port 8080"))
