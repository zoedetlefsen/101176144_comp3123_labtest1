const delayedSuccess = () => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success);
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success);
    }, 500)
}
 
function resolvedPromise(message) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, 500);
    });
  }
  
  function rejectedPromise(errorMessage) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(errorMessage));
      }, 500);
    });
  }
  
  // Call the resolvedPromise
  resolvedPromise('Success!')
    .then((result) => {
      console.log('Resolved:', result);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  
  // Call the rejectedPromise
  rejectedPromise('Error occurred!')
    .then((result) => {
      console.log('Resolved:', result);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  