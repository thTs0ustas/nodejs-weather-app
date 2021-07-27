const options = require('./apiOptions');
const request = require('postman-request');

const forecast = ({ lon, lat }, callback) => {
  request(options(lon, lat), (error, { body: { main } }) => {
    if (error) return callback('Something is wrong', undefined);
    if (!main) return callback('Something is wrong', undefined);

    callback(undefined, main);
  });
};

module.exports = forecast;
