/**
 * Using the JavaScript language, have the function arrayCouples(arr) take the
 * arr parameter being passed which will be an array of an even number of
 * positive integers, and determine if each pair of integers, [k, k+1], [k+2,
 * k+3], etc. in the array has a corresponding reversed pair somewhere else in
 * the array. For example: if arr is [4, 5, 1, 4, 5, 4, 4, 1] then your program
 * should output the string yes because the first pair 4, 5 has the reversed
 * pair 5, 4 in the array, and the next pair, 1, 4 has the reversed pair 4, 1 in
 * the array as well. But if the array doesn't contain all pairs with their
 * reversed pairs, then your program should output a string of the integer pairs
 * that are incorrect, in the order that they appear in the array.
 *
 * For example: if arr is [6, 2, 2, 6, 5, 14, 14, 1] then your program should
 * output the string 5,14,14,1 with only a comma separating the integers.
 * 
 * 
 */

function arrayCouples(arr) 
{
    let unmatchedPair = [];
    for (let i = 0; i < arr.length; i += 2)

        if (!checkPair(arr, [arr[i], arr[i + 1]], i))
            unmatchedPair.push([arr[i], arr[i + 1]]);

    return unmatchedPair.length === 0 ? 'yes' : unmatchedPair.join(',');
}
function checkPair(arr, pair, index)
 {
    for (let i = 0; i < arr.length; i += 2)

        if (i !== index && arr[i] === pair[1] && arr[i + 1] === pair[0]) return true;
        return false;
}

console.log(arrayCouples([4, 5, 1, 4, 5, 4, 4, 1]));