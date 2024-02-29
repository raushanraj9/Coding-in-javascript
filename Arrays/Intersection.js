function inter(arr1,arr2)
{
    let result=[];
    for(let val of arr1)
    {
        for(let i=0;i<arr2.length;i++)
        {
            if(val===arr2[i])
            {
                result.push(val);
            }
        }
    }
    return result;
}
function intersection(arr1,arr2)
{
    return arr1.filter(val=>arr2.includes(val));
}

let arr1=[4,5,3,26,7];
let arr2=[5,7,8,90];
console.log(intersection(arr1,arr2));