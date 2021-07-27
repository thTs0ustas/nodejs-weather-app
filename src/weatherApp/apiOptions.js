const options = (lon, lat) => ({
  json: true,
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  qs: {
    lon,
    lat,
    id: '2172797',
    lang: 'null',
    units: 'metric',
    mode: 'xml, html',
  },
  headers: {
    'x-rapidapi-key':
      '18b1966606msh4fc4d5f45807027p1f507ejsnda12d3023895',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    useQueryString: true,
  },
});

module.exports = options;
