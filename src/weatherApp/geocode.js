const request = require('postman-request');

const geocode = ({ address, country }, callback) => {
  const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address,
  )}.json?access_token=pk.eyJ1IjoidGh0c3N0IiwiYSI6ImNrcjloanZyZDQ5N3czMW82YnAxeWdvZGsifQ.JYu2t_sMZPC1qIBeUB4Glw`;

  request({ url: URL, json: true }, (error, { body }) => {
    if (error) callback('Unable to connect to location services!', undefined);

    const isItRight = body.features.filter(
      ({ place_name, place_type } = {}) =>
        place_name.includes(encodeURIComponent(country)) && place_type.includes('place'),
    )[0];
    console.log(isItRight);
    if (isItRight === undefined) return callback("Can't find location", undefined);
    callback(undefined, {
      local: isItRight.text,
      lon: isItRight?.geometry.coordinates[0],
      lat: isItRight?.geometry.coordinates[1],
    });
  });
};

module.exports = { geocode };
