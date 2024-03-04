/****************************************************************
 *             CODERBYTE ARITHMETC GEOMETRIC II CHALLENGE       *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArithGeo(arr) take the array of numbers    *
 * stored in arr and return the string "Arithmetic" if the      *
 * sequence follows an arithmetic pattern or return "Geometric" *
 * if it follows a geometric pattern. If the sequence doesn't   *
 * follow either pattern return -1. An arithmetic sequence is   *
 * one where the difference between each of the numbers is      *
 * consistent, where as in a geometric sequence, each term after*
 * the first is multiplied by some constant or common ratio.    *
 * Arithmetic example: [2, 4, 6, 8] and                         *
 * Geometric example: [2, 6, 18, 54]. Negative numbers may be   *
 * entered as parameters, 0 will not be entered, and no array   *
 * will contain all the same elements.                          *
 *                                                              *
 * Examples                                                     *
 * Input 1: new int[] {5,10,15}                                 *
 * Output 1: Arithmetic                                         *
 *                                                              *
 * Input 2: new int[] {2,4,16,24}                               *
 * Output 2: -1                                                 *
 *                                                              *
 ***************************************************************/


function ArithGeo(arr) {
    if (arr.length < 2)
        return -1;
    if (arr.length === 2)
        return "Arithmetic";
    const arith = arr[1] - arr[0];
    const geo = arr[1] / arr[0];
    let isArith = true;
    for (let i = 1; i < arr.length - 2; i++) {
        if (arr[i + 1] - arr[i] === arith)
            continue;
        else {
            isArith = false;
            break;
        }
    }
    let isGeo = true;
    for (let i = 1; i < arr.length - 2; i++) {
        if (arr[i + 1] / arr[i] === geo)
            continue;
        else {
            isGeo = false;
            break;
        }
    }
    if (isArith)
        return "Arithmetic";
    if (isGeo)
        return "Geometric";
    return -1;
}

console.log(ArithGeo([5, 10, 15]));