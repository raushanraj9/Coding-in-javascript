const data = [3,5,6,1,9,7,8,4];
 function secondSmallest(arr)
{
let smallest=Infinity;
let secondSmallest=Infinity;
  for(let num of arr)
  {
  if(num<smallest)
  {
    secondSmallest=smallest;
    smallest=num;
  }
  else if(num <secondSmallest && num!==smallest)
  {
    secondSmallest=num;
  }
 
  }
  return secondSmallest;
}
console.log(secondSmallest(data)) 