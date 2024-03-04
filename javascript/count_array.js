//let and const example

function count(target) 
{
    let char = ['a', 'i', 'o', 'u', 'e'];
    let num = 0;
    for (let i = 0; i < target.length; i++)
     {
        if (char.includes(target[i])) {
            num++;
        }
    }
    return num;
}
console.log(count('aioue tytytyutyutyu'));

//template string example

function s() {
    const year = new Date().getFullYear();
    //return `the new year is ` + year;
    return `new year is ${year}`;
}
console.log(s());

const y=2024;
const cy=`year is good ${y}`;
console.log(cy);