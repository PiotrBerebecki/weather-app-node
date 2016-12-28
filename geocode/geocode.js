const axios = require('axios');


const geocodeAddress = (address) => {
  const encodedAddress = encodeURIComponent(address);

  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`)
    .then(response => {
      if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
      }
            
      return {
        address: response.data.results[0].formatted_address,
        latitude: response.data.results[0].geometry.location.lat,
        longitude: response.data.results[0].geometry.location.lng
      };
    })
    .catch(error => {
      if (error.code === 'ENOTFOUND') {
        throw new Error('Unable to connect to API servers.');
      } else {
        throw new Error(error);
      }
    });   
};


module.exports.geocodeAddress = geocodeAddress;
