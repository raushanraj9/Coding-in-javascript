function findPairsWithSum(arr, targetSum) {
    const result = [];
  
    // Iterate over each element in the array
    for (let i = 0; i < arr.length; i++) {
      // Iterate over the remaining elements to find pairs
      for (let j = i + 1; j < arr.length; j++) {
        // Check if the sum of current pair equals the target sum
        if (arr[i] + arr[j] === targetSum) {
          // If so, add the pair to the result array
          result.push([arr[i], arr[j]]);
        }
      }
    }
  
    return result;
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5, 6];
  const target = 7;
  
  const pairs = findPairsWithSum(array, target);
  console.log(pairs); // Output: [[1, 6], [2, 5], [3, 4]]
  