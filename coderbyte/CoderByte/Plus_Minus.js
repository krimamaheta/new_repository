/****************************************************************
 *                  CODERBYTE PLUS MINUS CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function PlusMinus(num) read the num parameter being*
 * passed which will be a combination of 1 or more single       *
 * digits, and determine if it's possible to separate the digits*
 * with either a plus or minus sign to get the final expression *
 * to equal zero.                                               *
 *                                                              *
 * For example: if num is 35132 then it's possible to separate  *
 * the digits the following way, 3 - 5 + 1 + 3 - 2, and this    *
 * expression equals zero.                                      *
 *                                                              *
 * Your program should return a string of the signs you used, so*
 * for this example your program should return -++-. If it's not*
 * possible to get the digit expression to equal zero, return   *
 * the string not possible.                                     *
 *                                                              *
 * If there are multiple ways to get the final expression to    *
 * equal zero, choose the one that contains more minus          *
 * characters. For example: if num is 26712 your program        *
 * should return -+-- and not +-+-.                             *
 *                                                              *
 * Examples                                                     *
 * Input 1: 199                                                 *
 * Output 1: not possible                                       *
 *                                                              *
 * Input 2: 26712                                               *
 * Output 2: -+--                                               *
 *                                                              *
 ***************************************************************/
function checkWithPlus(arr, operationArray, sum) {
    operationArray += '+';
    if (arr.length === 1) {
        sum += arr[0];
        if (sum === 0) return operationArray;
        else return operationArray + 'n';
    }
    const withPlus = checkWithPlus(arr.slice(1), operationArray, sum + arr[0]);
    const withMinus = checkWithMinus(arr.slice(1), operationArray, sum + arr[0]);
    if (withMinus[withMinus.length - 1] === 'n' && withPlus[withPlus.length - 1] === 'n') {
        return withPlus;
    }
    if (withMinus[withMinus.length - 1] != 'n') return withMinus;
    if (withPlus[withPlus.length - 1] != 'n') return withPlus;
}
function checkWithMinus(arr, operationArray, sum) {
    operationArray += '-';
    if (arr.length === 1) {
        sum -= arr[0];
        if (sum === 0) return operationArray;
        else return operationArray + 'n';
    }
    const withPlus = checkWithPlus(arr.slice(1), operationArray, sum - arr[0]);
    const withMinus = checkWithMinus(arr.slice(1), operationArray, sum - arr[0]);
    if (withMinus[withMinus.length - 1] === 'n' && withPlus[withPlus.length - 1] === 'n') {
        return withPlus;
    }
    if (withMinus[withMinus.length - 1] != 'n') return withMinus;
    if (withPlus[withPlus.length - 1] != 'n') return withPlus;
}
function PlusMinus(num) {
    let arr = String(num).split('').map(Number);
    if (arr.length < 2) return 'not possible';
    const withPlus = checkWithPlus(arr.slice(1), [], arr[0]);
    const withMinus = checkWithMinus(arr.slice(1), [], arr[0]);
    if (withMinus[withMinus.length - 1] === 'n' && withPlus[withPlus.length - 1] === 'n') {
        return 'Not Possible';
    }
    if (withMinus[withMinus.length - 1] != 'n') return withMinus;
    if (withPlus[withPlus.length - 1] != 'n') return withPlus;
}
console.log(PlusMinus(35132));