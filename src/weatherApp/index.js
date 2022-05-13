const { geocode } = require('./utils');
const yarg = require('yargs');
const forecast = require('./weather');

yarg?.version('17.0.1');

yarg
  ?.command(
    'weather',
    'Finding Weather',
    {
      address: {
        describe: 'address',
        demandOption: true,
        type: 'string',
      },

      country: {
        describe: 'country',
        demandOption: true,
        type: 'string',
      },
    },
    function ({ address, country } = {}) {
      if (!address || !country) return console.log('Input correct location');

      geocode({ address, country }, (error, { lon, lat } = {}) => {
        if (error) throw new Error(error);
        return forecast(lon, lat);
      });
    },
  )
  .parse();