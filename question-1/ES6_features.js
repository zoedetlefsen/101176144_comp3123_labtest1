function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
        reject(new Error('Input must be an array'));
        return;
      }
  
      const filteredAndLowercased = arr
        .filter(item => typeof item === 'string')
        .map(item => item.toLowerCase());
  
      if (filteredAndLowercased.length === 0) {
        reject(new Error('No strings found in the input array'));
        return;
      }
  
      resolve(filteredAndLowercased);
    });
  }
  
  // Example usage:
  const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
  lowerCaseWords(mixedArray)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });
  