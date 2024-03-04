/****************************************************************
 *              CODERBYTE BITWISE ONE CHALLENGE                 *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BitwiseOne(strArr) take the array of       *
 * strings stored in strArr, which will only contain two        *
 * strings of equal length that represent binary numbers, and   *
 * return a final binary string that performed the bitwise      *
 * OR operation on both strings. A bitwise OR operation places  *
 * a 0 in the new string where there are zeroes in both binary  *
 * strings, otherwise it places a 1 in that spot.               *
 * For example: if strArr is ["1001", "0100"] then your program *
 * should return the string "1101"                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["100", "000"]                                      *
 * Output 1: 100                                                *
 *                                                              *
 * Input 2: ["00011", "01010"]                                  *
 * Output 2: 01011                                              *
 *                                                              *
 ***************************************************************/
//if one place 1 so return 1 otherwise 0 return
function bitwiseor(arr)
{
let a1=arr[0];
let a2=arr[1];
// let [a1,a2]=arr;
console.log(a1,a2);

let result='';
for(let i=0; i<a1.length; i++)
{
    result+=`${Number(a1[i]) | Number(a2[i])}`;
}
return result;

}
console.log(bitwiseor(["100","001"]));