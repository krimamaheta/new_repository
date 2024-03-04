/****************************************************************
 *             CODERBYTE OFF LINE MINIMUM CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function OffLineMinimum(strArr) take the strArr     *
 * parameter being passed which will be an array of integers    *
 * ranging from 1...n and the letter "E" and return the correct *
 * subset based on the following rules. The input will be in    *
 * the following format: ["I","I","E","I",...,"E",...,"I"] where*
 * the I's stand for integers and the E means take out the      *
 * smallest integer currently in the whole set. When finished,  *
 * your program should return that new set with integers        *
 * separated by commas. For example: if strArr is               *
 * ["5","4","6","E","1","7","E","E","3","2"] then your program  *
 * should return 4,1,5.                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["1","2","E","E","3"]                               *
 * Output 1: 1,2                                                *
 *                                                              *
 * Input 2: ["4","E","1","E","2","E","3","E"]                   *
 * Output 2: 4,1,2,3                                            *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 34.8% of users who solved this   *
 * challenge.                                                   *
 ***************************************************************/

function OffLineMinimum(arr) {
    let newStr = '';
    let operationArray = [];
    for (let i = 0; i < arr.length; i++) {
        console.log(i, arr[i]);
        if (arr[i] === 'E') {
            const minimum = Math.min.apply(Math, operationArray);
            const minIndex = operationArray.indexOf(minimum);
            newStr += `, ${minimum}`;
            arr.splice(minIndex, 1);
            i--;
            for (j in operationArray) {
                if (operationArray[j] === minimum) {
                    operationArray.splice(j, 1);
                }
            }
        } else operationArray.push(Number(arr[i]));
    }
    return newStr.slice(2);
}
console.log(OffLineMinimum(["5", "4", "6", "E", "1", "7", "E", "E", "3", "2"]));