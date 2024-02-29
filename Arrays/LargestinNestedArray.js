function findLargestElement(arr) {
    const flattenedArray = arr.flat(Infinity);
    return Math.max(...flattenedArray);
}

// Example usage:
let input=[1,2,3,5,3,8]
console.log(Math.max(...input));
const nestedArray = [1, [2, 3], [4, 5, [6, 7]], 8, [9]];

// console.log("Largest element:", findLargestElement(nestedArray)); // Output: Largest element: 9
