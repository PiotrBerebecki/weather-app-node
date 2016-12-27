// const yargs = require('yargs');

// const geocode = require('./geocode/geocode');

// const argv = yargs
//   .options({
//     a: {
//       describe: 'Address to fetch weather for',
//       demand: true,
//       alias: 'address',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
  
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

// 13ddb2c20ea5af6d2cc1474b833f430c

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

// https://api.darksky.net/forecast/13ddb2c20ea5af6d2cc1474b833f430c/51.53,-0.19?units=si


const request = require('request');

const secret = require('./secret');
// secret.js file contains:
// const apiKey = 'key-taken-from-forecast.io';
// module.exports.apiKey = apiKey;

request({
  url: `https://api.darksky.net/forecast/${secret.apiKey}/51.53,-0.19?units=si`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather');
  }
});
