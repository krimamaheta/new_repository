// ****************************************************************
//  *             CODERBYTE HAMMING DISTANCE CHALLENGE             *
//  *                                                              *
//  * Problem Statement                                            *
//  * Have the function HammingDistance(strArr) take the array of  *
//  * strings stored in strArr, which will only contain two strings*
//  * of equal length and return the Hamming distance between them.*
//  * The Hamming distance is the number of positions where the    *
//  * corresponding characters are different.                      *
//  * For example: if strArr is ["coder", "codec"] then your       *
//  * program should return 1. The string will always be of equal  *
//  * length and will only contain lowercase characters from the   *
//  * alphabet and numbers.                                        *
//  *                                                              *
//  * Examples                                                     *
//  * Input 1: ["10011", "10100"]                                  *
//  * Output 1: 3                                                  *
//  *                                                              *
//  * Input 2: ["helloworld", "worldhello"]                        *
//  * Output 2: 8                                                  *
//  *                                                              *
//  ***************************************************************/


//here same length and diff value count same as the h_distict.js
function hummingstring(str) {
    // let [s1,s2]=str; both are the same

    let s1 = str[0];
    let s2 = str[1];
    console.log(s1, s2);

    let count = 0;

    if (s1.length !== s2.length)
        return -1;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i])
            count++;
    }
    return count;
}
console.log(hummingstring(["helloworld", "worldhello"]));