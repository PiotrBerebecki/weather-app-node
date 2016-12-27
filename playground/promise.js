var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved');
    // reject('Rejected');
  }, 1000); 
});

somePromise.then((message) => {
  console.log('Success:', message);
}, (error) => {
  console.log('Failure:', error);
});
