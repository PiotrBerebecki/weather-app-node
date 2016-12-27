// Example 1
const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('Arguments must be numbers');
    }
  });
};

asyncAdd(5, '10').then((res) => {
  console.log('Result', res);
  return asyncAdd(res, 10);
}).then((res) => {
  console.log('Should be 25', res);
}).catch((error) => {
  console.log(error);
});


// Example 2
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Resolved');
//     // reject('Rejected');
//   }, 1000); 
// });

// somePromise.then((message) => {
//   console.log('Success:', message);
// }, (error) => {
//   console.log('Failure:', error);
// });
