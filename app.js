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
  
  
function showResult(result) {
  const { address, temperature, apparentTemperature } = result;
  console.log(`It is currently ${temperature}°C in ${address} and it feels like ${apparentTemperature}°C.`);
}


geocode.geocodeAddress(argv.address)
  .then(weather.getWeather)
  .then(showResult)
  .catch(error => {
    console.log(error);
  });
