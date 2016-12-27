const request = require('request');
const yargs = require('yargs');

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

const encodedAddress = encodeURIComponent(argv.address);
console.log(encodedAddress);

request({
  url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body) => {
  // console.log(JSON.stringify(response, undefined, 2));
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);  
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);  
});
