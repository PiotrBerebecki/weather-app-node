const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      describe: 'Address to fetch weather for',
      demand: true,
      alias: 'address',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
  
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {       
    weather.getWeather(results.latitude, results.longitude, (errorMessage2, results2) => {
      if (errorMessage2) {
        console.log(errorMessage2);
      } else {
        console.log(`It is currently ${results2.temperature}°C in ${results.address} and it feels like ${results2.apparentTemperature}°C.`);
      }
    });
  }
});
