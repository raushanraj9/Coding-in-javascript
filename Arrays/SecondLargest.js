function secondLargest(arr)
{
let largest=-Infinity;
let secondlargest=-Infinity;
  for(let num of arr)
  {
  if(num>largest)
  {
    secondlargest=largest;
    largest=num;
  }
  else if(num >secondlargest && num!==largest)
  {
    secondlargest=num;
  }
 
  }
  return secondlargest;
}
console.log(secondLargest(data))

