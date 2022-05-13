const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { geocode } = require('./weatherApp/geocode');
const forecast = require( './weatherApp/forecast');

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../src/templates/views'));
app.use(express.static(path.join(__dirname, '../public')));

hbs.registerPartials(path.join(__dirname, '../src/templates/partials'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Thanos',
  });
});


app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Thanos',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Thanos',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.location || !req.query.country) {
    return res.send({
      error: 'Please provide both location and country',
    });
  }
  geocode(
    { address: req.query.location, country: req.query.country },
    (error, { lon, lat, local } = {}) => {
   
      if (error) return res.send({ error });

      forecast({ lon, lat }, (error, { temp, feels_like } = {}) => {
        if (error) return res.send({ error });
        res.send({
          local,
          temp,
          feels_like,
          location: req.query.location,
          country: req.query.country,
          lat: lon,
          lon: lat,
          message: `Temp in ${local} is ${temp} Celsius. Feels like ${feels_like} Celsius`,
        });
      });
    },
  );
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Thanos',
    errorMessage: 'Help article not found.',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Thanos',
    errorMessage: 'Page not found.',
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
