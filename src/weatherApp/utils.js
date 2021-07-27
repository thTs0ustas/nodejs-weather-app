// const request = require('postman-request');
// const chalk = require('chalk');
// const forecast = require('./weather');
//
// const geocode = (
//   { address = 'paleo Faliro', country = 'Greece' },
//   callback,
// ) => {
//   const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
//     address,
//   )}.json?access_token=pk.eyJ1IjoidGh0c3N0IiwiYSI6ImNrcjloanZyZDQ5N3czMW82YnAxeWdvZGsifQ.JYu2t_sMZPC1qIBeUB4Glw`;
//
//   request({ url: URL, json: true }, (error, { body }) => {
//     if (error) throw new Error(error);
//     const isItRigth = body.features.filter(
//       ({ place_name, place_type } = {}) =>
//         place_name.includes(encodeURIComponent(country)) &&
//         place_type.includes('place'),
//     )[0];
//
//     callback({
//       lon: isItRigth?.geometry.coordinates[0],
//       lat: isItRigth?.geometry.coordinates[1],
//     });
//   });
// };
//
// const showTheMessage = ({
//   name,
//   main: { temp, feels_like },
// } = {}) => {
//   return `Temp in ${chalk.green(name)} is ${chalk.green(
//     temp,
//   )} Celsius. Feels like ${chalk.yellow(feels_like)} Celsius`;
// };
//
// module.exports = { geocode, showTheMessage };
