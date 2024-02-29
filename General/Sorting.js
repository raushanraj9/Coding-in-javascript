// function bubbleSort(arr) {
//     const len = arr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // Swap elements if they are in the wrong order
//                 const temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// Example usage:
// const numbers = [5, 2, 9, 1, 7];
// console.log("Original numbers:", numbers);
// const sortedNumbers = bubbleSort(numbers);
// console.log("Sorted numbers:", sortedNumbers); // Output: [1, 2, 5, 7, 9]

// const fruits = ['banana', 'apple', 'orange', 'grape'];
// console.log("Original fruits:", fruits);
// const sortedFruits = bubbleSort(fruits);
// console.log("Sorted fruits:", sortedFruits); // Output: ['apple', 'banana', 'grape', 'orange']

// function bubbleSort(arr) {
//     let len = arr.length;
//     let swapped;
//     do {
//       swapped = false;
//       for (let i = 0; i < len - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//           let temp = arr[i];
//           arr[i] = arr[i + 1];
//           arr[i + 1] = temp;
//           swapped = true;
//         }
//       }
//     } while (swapped);
//     return arr;
//   }

  function bubbleSort(arr) {
    let len = arr.length;
    
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          
        }
    }
     
    return arr;
  }

  
  // Example usage:
  const arr = [-1,5, 3, 8, 4, 2];
  console.log(bubbleSort(arr)); // Output: [2, 3, 4, 5, 8]
