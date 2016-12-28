// const request = require('request');
const axios = require('axios');
const secret = require('./secret');
// secret.js file contains:
// const apiKey = 'key copied from darksky.net/dev/';
// module.exports.apiKey = apiKey;


const getWeather = (locationObj) => {
  const { latitude, longitude } = locationObj;
  
  return axios.get(`https://api.darksky.net/forecast/${secret.apiKey}/${latitude},${longitude}?units=si`)
    .then(response => {
      return Object.assign(Object.assign({}, locationObj, {
        temperature: response.data.currently.temperature,
        apparentTemperature: response.data.currently.apparentTemperature
      }));
    })
    .catch(error => {
      throw new Error('Unable to fetch weather');
    });
};


module.exports.getWeather = getWeather;
