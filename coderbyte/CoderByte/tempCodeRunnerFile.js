/****************************************************************
 *             CODERBYTE FIND INTERSECTION CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function FindIntersection(strArr) read the array of *
 * strings stored in strArr which will contain 2 elements: the  *
 * first element will represent a list of comma-separated       *
 * numbers sorted in ascending order, the second element will   *
 * represent a second list of comma-separated numbers           *
 * (also sorted).                                               *
 *                                                              *
 * Your goal is to return a comma-separated string containing   *
 * the numbers that occur in elements of strArr in sorted order.*
 * If there is no intersection, return the string false.        *
 *                                                              *
 * Examples                                                     *
 * Input 1: new string[] {"1, 3, 4, 7, 13", "1, 2, 4, 13, 15"}  *
 * Output 1: 1,4,13                                             *
 *                                                              *
 * Input 2: new string[] {"1, 3, 9, 10, 17, 18", "1, 4, 9, 10"} *
 * Output 2: 1,9,10                                             *
 *                                                              *
 ***************************************************************/

function FindIntersection(strArr) {
    let [arr1, arr2] = strArr;
    arr1 = arr1.split(', ').map(e => Number(e));
    arr2 = arr2.split(', ').map(e => Number(e));
    let integrate = [];
    arr1.map(i => {
        if (arr2.includes(i)) integrate.push(i);
    });
    if (integrate.length === 0) return 'false';
    return integrate;
}
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));