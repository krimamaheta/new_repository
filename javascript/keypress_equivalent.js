// ****************************************************************//
//  *           CODERBYTE EQUIVALENT KEYPRESSES CHALLENGE          *
//  *                                                              *
//  * Problem Statement                                            *
//  * Have the function EquivalentKeypresses(strArr) read the array*
//  * of strings stored in strArr which will contain 2 strings     *
//  * representing two comma separated lists of keypresses.        *
//  * Your goal is to return the string true if the keypresses     *
//  * produce the same printable string and the string false if    *
//  * they do not.                                                 *
//  *                                                              *
//  * A keypress can be either a printable character or a backspace*
//  * represented by -B.                                           *
//  *                                                              *
//  * You can produce a printable string from such a string of     *
//  * keypresses by having backspaces erase one preceding character*
//  *                                                              *
//  * For example: if strArr contains ["a,b,c,d", "a,b,c,c,-B,d"]  *
//  * the output should return true because those keypresses       *
//  * produce the same printable string.                           *
//  *                                                              *
//  * The array given will not be empty. The keypresses will only  *
//  * contain letters from the alphabet and backspaces.            *
//  *                                                              *
//  * Examples                                                     *
//  * Input 1: ["a,b,c,d", "a,b,c,d,-B,d"]	                        *
//  * Output 1: true                                               *
//  *                                                              *
//  * Input 2: ["c,a,r,d", "c,a,-B,r,d"]                           *
//  * Output 2: false                                              *
//  *                                                              *
//  ***************************************************************//

// function keypress(strArr)
// {
//     let [s1,s2]=strArr;
//     console.log(s1,s2);

//    while(s1.includes('-B'))
//    {
//         let index=s1.indexOf('-B');
//         //console.log(index,'hi');
//         if(index===0)continue;
//         s1=s1.replace(s1.slice(index-2,index+3),'');
//    }
//    while(s2.includes('-B'))
//    {
//         let index=s2.indexOf('-B');
//         //console.log(index,'hi');
//         if(index===0)continue;
//         s2=s2.replace(s2.slice(index-2,index+3),'');
//    }
//    if (s1===s2)
//    return true;
//    else
//    return false;
   
// }
// console.log(keypress([["c,a,r,d", "c,a,-B,r,d"]]));


// function EquivalentKeypresses(strArr) {
//     // Function to convert keypress string to printable string
//     function convertToPrintable(str) {
//       const stack = [];
  
//       for (let char of str) {
//         if (char === 'B') {
//           if (stack.length > 0) {
//             stack.pop();
//           }
//         } else {
//           stack.push(char);
//         }
//       }
  
//       return stack.join('');
//     }
  
//     // Convert both keypress strings to printable strings
//     const printableStr1 = convertToPrintable(strArr[0]);
//     const printableStr2 = convertToPrintable(strArr[1]);
  
//     // Compare the printable strings
//     return printableStr1 === printableStr2;
// }

// console.log(EquivalentKeypresses(["a,b,c,d", "a,b,c,d,-B,d"]));
function EquivalentKeypresses(strArr) 
{
    let [str1, str2] = strArr;
    
    while (str1.includes('-B')) 
    {
        let index = str1.indexOf('-B');
        if (index === 0) 
        continue;
        str1 = str1.replace(str1.slice(index - 1, index + 3), '');
    }
    while (str2.includes('-B')) 
    {
        let index = str2.indexOf('-B');
        if (index === 0) continue;
        str2 = str2.replace(str2.slice(index - 2, index + 3), '');
    }
    if (str1 === str2) 
    return 'true'
    else 
    return 'false'
}
console.log(EquivalentKeypresses(["a,b,c,d", "a,b,c,d,-B,d"]));