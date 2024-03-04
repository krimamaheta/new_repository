
// Using the JavaScript language, have the function arrayCouples(arr) take the
// * arr parameter being passed which will be an array of an even number of
// * positive integers, and determine if each pair of integers, [k, k+1], [k+2,
// * k+3], etc. in the array has a corresponding reversed pair somewhere else in
// * the array. For example: if arr is [4, 5, 1, 4, 5, 4, 4, 1] then your program
// * should output the string yes because the first pair 4, 5 has the reversed
// * pair 5, 4 in the array, and the next pair, 1, 4 has the reversed pair 4, 1 in
// * the array as well. But if the array doesn't contain all pairs with their
// * reversed pairs, then your program should output a string of the integer pairs
// * that are incorrect, in the order that they appear in the array.
// *
// * For example: if arr is [6, 2, 2, 6, 5, 14, 14, 1] then your program should
// * output the string 5,14,14,1 with only a comma separating the integers.
function array_couple(arr) {
    let pair = [];
    //even number of positive integer i+=2
    for (let i = 0; i < arr.length; i += 2) {
        console.log(arr[i]);
        console.log(i);

        let currentpair = [arr[i], arr[i + 1]];
        let reversepair = [arr[i + 1], arr[i]];
        console.log(currentpair,'hi');
       console.log(reversepair);
       // check reverse pair is exist in the array or not
        if (!arr.includes(reversepair[0], i + 2) || !arr.includes(reversepair[1],i + 3)) 
        {
            pair.push(currentpair.join(','));
        }
        // else
        //  {
        //     return 'yes';
        //  }
        
    }
    return pair.length === 0 ? 'yes' :pair.join(' ,');
}
console.log(array_couple([4, 5, 1, 4, 5, 4, 4, 1]));

//     function arraycoupes(arr) {
//         const pairs = [];

//         for (let i = 0; i < arr.length; i += 2) {
//             const currentPair = [arr[i], arr[i + 1]];
//             const reversedPair = [arr[i + 1], arr[i]];

//             // Check if the reversed pair exists in the array
//             if (!arr.includes(reversedPair[0], i + 2) || !arr.includes(reversedPair[1], i + 3)) {
//                 pairs.push(currentPair.join(','));
//             }
//         }

//         return pairs.length === 0 ? 'yes' : pairs.join(',');
//     }

// console.log(arraycouples([4, 5, 1, 4, 5, 4, 4, 1]));


