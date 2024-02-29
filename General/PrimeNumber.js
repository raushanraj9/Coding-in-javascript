function prime(num)
{
    if(num<2)
    {
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++)
    {
        if(num%i===0)
        {
            return false;
        }
    }
    return true;
}

function printPrimeNumber(start,end)
{
   for(let i=start;i<=end;i++)
   {
    if(prime(i))
    {
        console.log(i);
    }
   }
}
// console.log(prime(24));
printPrimeNumber(23,100);