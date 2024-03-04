/****************************************************************
 *             CODERBYTE ARRAY ADDITION I CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArrayAdditionI(arr) take the array of      *
 * numbers stored in arr and return the string true if any      *
 * combination of numbers in the array (excluding the largest   *
 * number) can be added up to equal the largest number in the   *
 * array, otherwise return the string false.                    *
 * For example: if arr contains [4, 6, 23, 10, 1, 3] the output *
 * should return true because 4 + 6 + 10 + 3 = 23. The array    *
 * will not be empty, will not contain all the same elements,   *
 * and may contain negative numbers.                            *
 *                                                              *
 * Examples                                                     *
 * Input 1: [5,7,16,1,2]                                        *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: [3,5,-1,8,12]                                       *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/
function sumWithElement(arr, sum, maxArr) {
    if (sum === maxArr) return true;
    if (arr.length === 0) return false;
    const res1 = sumWithElement(arr.slice(1), sum + arr[0], maxArr);
    const res2 = sumWithoutElement(arr.slice(1), sum, maxArr);
    if (res1 === true || res2 === true) return true;
    return false;
}
function sumWithoutElement(arr, sum, maxArr) {
    if (sum === maxArr) return true;
    if (arr.length === 0) return false;
    const res1 = sumWithElement(arr.slice(1), sum + arr[0], maxArr);
    const res2 = sumWithoutElement(arr.slice(1), sum, maxArr);
    if (res1 === true || res2 === true) return true;
    return false;
}
function ArrayAdditionI(arr) {
    const maxArr = Math.max(...arr);
    arr.splice(arr.indexOf(Math.max(...arr)), 1);
    const res1 = sumWithElement(arr.slice(1), arr[0], maxArr);
    const res2 = sumWithoutElement(arr.slice(1), 0, maxArr);
    if (res1 === true || res2 === true) return true;
    return false;
}
console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3]));