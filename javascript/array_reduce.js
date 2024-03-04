//exp of reduce

let a = [10, 20, 30];

let sum = 0;
for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
console.log(sum);

'-------'
// init value of sum

let a1 = a.reduce(function (sum, number) {
    return sum + number;
}, 0);
console.log(a1);

//exp of reduce 


//array of object

let colors = [{ color: 'pink' },
{ color: 'blue' },
{ color: 'red' },
];

let c=colors.reduce(function (previous, next) {
    previous.push(next.color);
    return previous;
}, []);

console.log(c);

//2 nd exp of reduce 

function countbracket(str)
{
    return str.split("").reduce(function(previous1,char){
        //  if(previous1<0){return previous1;}
        previous1<0?0:1;
        if(char==='('){return ++previous1;}
        if(char===')'){return --previous1;}
        return previous1;
    },0);
    
}

console.log(countbracket("((()))"));

//it it is balance so that !str true otherwise false return

//const and let examples

const name='ram';
console.log(name);


//here let can be replace but cont can not be replace

let title="software";
title="software engineer";
console.log(title);


let also=80;
also=90;
console.log(also);

