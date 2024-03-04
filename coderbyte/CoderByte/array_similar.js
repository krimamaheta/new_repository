/****************************************************************
 *              CODERBYTE ARRAY SIMILAR CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Two arrays are called similar if one can be obtained from    *
 * another by swapping at most one pair of elements in one of   *
 * the arrays. Given two arrays a and b, check whether they are *
 * similar.                                                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: a = [1, 2, 3] and b = [1, 2, 3]                     *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: [1, 2, 3] and b = [2, 1, 3]                         *
 * Output 2: true                                               *
 * Explanation: We can obtain b from a by swapping 2 and 1 in b.*
 *                                                              *
 * Input 3: [1, 2, 2] and b = [2, 1, 1]                         *
 * Output 3: false                                              *
 * Explanation: Any swap of any two elements either in a or b   *
 * won't make a and b equal                                     *
 *                                                              *
 ***************************************************************/
function ArraySimilar(arr) {
    let [arr1, arr2] = arr;
    arr1.sort();
    arr2.sort();
    if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true;
    return false;
}
console.log(ArraySimilar([[1, 2, 3], [2, 1, 3]]));