console.log('Starting app');

setTimeout(() => {
  console.log('setTimeout callback 1, 1000ms');
}, 1000);

setTimeout(() => {
  console.log('setTimeout callback 2, 0ms');
}, 0);

console.log('Finishing app');
