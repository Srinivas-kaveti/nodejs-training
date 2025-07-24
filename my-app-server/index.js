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

let cars = [
  { id: 1, name: 'M4', purchaseDate: "03/12/2024" },
  { id: 2, name: 'Rav4', purchaseDate: "02/23/2025" },
  { id: 3, name: 'Camry', purchaseDate: "04/26/2023" },
  { id: 4, name: 'A5', purchaseDate: "07/23/2025" },
];

const purchasedRange = (purDate, days) => {
  const [mm, dd, yyyy] = purDate.split('/').map(Number);
  const purchasedDate = new Date(yyyy, mm - 1, dd);
  const today=new Date();
  
  if(((today-purchasedDate)/(1000*60*60*24))>days){
    return 1;
  }
  else{
    return 0;
  }
};


app.get('/api/items', (req, res) => {
  res.json(data);
});

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/api/cars', (req, res) => {
  const carPurchasedOn = cars.filter(car => purchasedRange(car.purchaseDate,365));
  res.json(carPurchasedOn);
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
