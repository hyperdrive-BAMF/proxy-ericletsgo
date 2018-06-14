const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/splashpage/:gameId', (req, res) => {
  const gameId = req.params.gameId;

  axios.get(`http://localhost:3001/splashpage/${gameId}`)
    .then((data) => {
      res.send(data.data[0]);
    })
    .catch((err) => console.log('error 3001 proxy request', err));
});

app.get('/games', (req, res) => {
  axios.get('http://localhost:3002/games')
    .then((data) => {
      res.send(data.data);
    })
    .catch((err) => console.log('error 3002 proxy request', err))
})

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
