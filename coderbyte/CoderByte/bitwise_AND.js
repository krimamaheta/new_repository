/****************************************************************
 *             CODERBYTE BITWISE TWO CHALLENGE                  *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BitwiseTwo(strArr) take the array of       *
 * strings stored in strArr, which will only contain two        *
 * strings of equal length that represent binary numbers, and   *
 * return a final binary string that performed the              *
 * bitwise AND operation on both strings. A bitwise AND         *
 * operation places a 1 in the new string where there is a 1 in *
 * both locations in the binary strings, otherwise it places    *
 * a 0 in that spot.                                            *
 * For example: if strArr is ["10111", "01101"] then your       *
 * program should return the string "00101"                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["100", "000"]                                      *
 * Output 1: 000                                                *
 *                                                              *
 * Input 2: ["10100", "11100"]                                  *
 * Output 2: 10100                                              *
 *                                                              *
 ***************************************************************/

function BitwiseAND(strArr) {
    const num1 = strArr[0];
    const num2 = strArr[1];
    let result = '';
    for (let i = 0; i < num1.length; i++) 
    {
        result += `${Number(num1[i]) & Number(num2[i])}`;
    }
    return result;
}
console.log(BitwiseAND(["10111", "01101"]));