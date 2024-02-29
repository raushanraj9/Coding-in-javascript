function palindrome(str)
{
    for(let i=0;i<str.length/2;i++)
    {
        if(str[i]!==str[str.length-1-i])
        {
            return false;
        }
    }
    return true;
}

let str="abbac"
console.log(str.split("").reverse().join(""));
// console.log(palindrome(str));