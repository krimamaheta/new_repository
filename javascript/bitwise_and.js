// Problem Statement                                            *
//  * Have the function BitwiseTwo(strArr) take the array of       *
//  * strings stored in strArr, which will only contain two        *
//  * strings of equal length that represent binary numbers, and   *
//  * return a final binary string that performed the              *
//  * bitwise AND operation on both strings. A bitwise AND         *
//  * operation places a 1 in the new string where there is a 1 in *
//  * both locations in the binary strings, otherwise it places    *
//  * a 0 in that spot.                                            *
//  * For example: if strArr is ["10111", "01101"] then your       *
//  * program should return the string "00101"                     *
//  *                                                              *
//  * Examples                                                     *
//  * Input 1: ["100", "000"]                                      *
//  * Output 1: 000                                                *
//  *                                                              *
//  * Input 2: ["10100", "11100"]                                  *
//  * Output 2: 10100                                              *

//here both plces have 1 return 1 otherwise 0

function bitwiseand(arr) {
    let a1 = arr[0];
    let a2 = arr[1];
    console.log(a1, a2);
    let result = '';

    for (let i = 0; i < a1.length; i++) 
    {
        result += `${Number(a1[i]) & Number(a2[i])}`;
    }
    return result;

}
console.log(bitwiseand(["10100", "11100"]));