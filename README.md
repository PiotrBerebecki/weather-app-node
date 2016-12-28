# Weather App - Node

A command line weather app

## Getting started

```sh
git clone https://github.com/PiotrBerebecki/weather-app-node.git
cd weather-app-node
npm install

# Fetch weather for New York
node app.js -a 'New York'

# Fetch weather for a particular address
node app.js -a '76 Buckingham Palace Road, London, SW1W 9TQ'
```

## Tech stack
* Node
* Yargs - Process command line arguments instead of the native `process.argv`
* Axios - Promise based HTTP requests
* Google Geocoding API - Convert address (like "1600 Amphitheatre Parkway, Mountain View, CA") to geographic coordinates (like latitude 37.423021 and longitude -122.083739)
* Dark Sky API (aka Forecast.io) - Get weather for specific geographic coordinates
