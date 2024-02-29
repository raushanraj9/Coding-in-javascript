function max(arr)
{
    if(arr.length===0)
    {
        return "array is empty";
    }
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;
}

let input=[53,4,3,64,24];
console.log(Math.max(...input));
// console.log(max(input));