function Union(arr1,arr2)
{
    let result=[];
    for(let val of arr1)
    {
       if(!arr2.includes(val))
       {
                result.push(val);
       }
            
        
    }
    for(let val of arr2)
    {
       if(!arr1.includes(val))
       {
                result.push(val);
       }
            
        
    }
    return result;
}

function uni(arr1,arr2)
{
    let result=[];
    result=arr1;
    for(const val of arr2)
    {
       if(!result.includes(val))
       {
        result.push(val);
       }
    }
    return result;
}

let arr1=[4,5,3,26,7];
let arr2=[5,7,8,90];

console.log(uni(arr1,arr2));