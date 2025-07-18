const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
];

let movies = [
  { id: 1, name: 'Movie 1' },
  { id: 2, name: 'Movie 2' },
];

app.get('/api/items', (req, res) => {
  res.json(data);
});

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.post('/api/items', (req, res) => {
  const newItem = {
    id: data.length + 1,
    name: req.body.name,
  };
  data.push(newItem);
  res.json(newItem);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
