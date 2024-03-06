function sumArray(arr)
{
 let sum=0;
 for(let i=0;i<arr.length;i++)
 {
   if(Array.isArray(arr[i]))
   {
    
      sum+=sumArray(arr[i]);
  }
  else
  {
      sum+=arr[i];
  }
 }
 return sum
}

const data = [3,[2,5],[6],[2,[1]],6];
console.log(sumArray(data));