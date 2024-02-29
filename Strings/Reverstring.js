function ReverseString(str)
{
    let str1="";
    for(let i=str.length-1;i>=0;i--)
    {
        str1+=str[i];
    }
    return str1;
}
// console.log(ReverseString("hello"));

let str="raushan";
console.log(str.split("").reverse().join(""));