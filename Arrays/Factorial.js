function fact(num)
{
    if(num===0 || num===1)
    {
        return 1;
    }
     
    return num*fact(num-1);
}
console.log(fact(5));

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    } else if (n === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Example usage:
const number = 5;
// console.log("Factorial of", number, "is:", factorial(number)); // Output: Factorial of 5 is: 120

let arr=[1,2,3,4,5]
function factarray(arr)
{
    let arr1=[];
    for(let i=0;i<arr.length;i++)
    {
        arr1.push(fact(arr[i]));
    }
    return arr1;
}

console.log(factarray(arr));
