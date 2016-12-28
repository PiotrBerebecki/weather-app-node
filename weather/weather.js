const request = require('request');

const secret = require('./secret');
// secret.js file contains:
// const apiKey = 'key-taken-from-forecast.io';
// module.exports.apiKey = apiKey;


const getWeather = (locationObj) => {
  const { latitude, longitude } = locationObj;
  
  return new Promise((resolve, reject) => {
    request({
      url: `https://api.darksky.net/forecast/${secret.apiKey}/${latitude},${longitude}?units=si`,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(Object.assign({}, locationObj, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        }));
      } else {
        reject('Unable to fetch weather');
      }
    });
  });
  
};


module.exports.getWeather = getWeather;
