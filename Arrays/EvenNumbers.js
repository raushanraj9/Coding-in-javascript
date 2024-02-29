function returnEven(arr)
{
    let arr1=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===0)
        {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
let input=[2,5,4,9,10,12];
let arr=input.filter((num)=>num%2===0);
console.log(arr);
// console.log(returnEven(input));