const request = require('request');

const secret = require('./secret');
// secret.js file contains:
// const apiKey = 'key-taken-from-forecast.io';
// module.exports.apiKey = apiKey;

const getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${secret.apiKey}/${latitude},${longitude}?units=si`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
};

module.exports.getWeather = getWeather;
