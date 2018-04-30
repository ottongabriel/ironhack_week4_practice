const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.static('public'));


app.get('/', (req, res, next) => {
  let data = {
    name: "Ironhacker",
    lastName: "Rocking it!",
    address: {
      street: "Your heart",
      number: 87
    },
    cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"]
  };
  res.render('index', data);
});


// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});