/**
 * Have the function numberAddition(str) take the str parameter, search for all
 * the numbers in the string, add them together, then return that final number.
 * For example: if str is "88Hello 3World!" the output should be 91. You will
 * have to differentiate between single digit numbers and multiple digit numbers
 * like in the example above. So "55Hello" and "5Hello 5" should return two
 * different answers. Each string will contain at least one letter or symbol.*/

//number addition
function number_add(str)
{
//     let num='0123456789';
//     let word=[];
//     let n_count=0;
//     for(let i=0; i<str.length; i++)
//     {
//         if(num.includes(str[i]))
//         {
//             n_count+=str[i];
//         }
//         else{
//             word.push(str[i]);

//             if(i===str.length-1) word.push(str[i]);
//         }
//     }
// let sum=0;
//     for(let i=0; i<word.length; i++)
//     {
//         sum+=word[i];
//     }
//     return sum;

const number=str.match(/\d+/g);

const sum=number ?number.reduce((acc,num)=>acc+parseInt(num,10),0):0;

return sum;
}
console.log(number_add("88Hello 3World!"));