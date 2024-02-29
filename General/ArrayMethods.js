const users=[
    {
        id:1,
        name:"Raushan",
        age:24,
        isActive:false
    },
    {
        id:2,
        name:"Reddy",
        age:25,
        isActive:false
    },
    {
        id:3,
        name:"Deepak",
        age:13,
        isActive:true
    },
    {
        id:4,
        name:"Raj",
        age:20,
        isActive:true,
    }
]
let arr=[];
for(let i=0;i<users.length;i++)
{
    arr.push(users[i].name);
}

users.sort((a,b)=>a.age<b.age?-1:1);


console.log(users);