// function arraycouple(arr) {

//     let add = [];
//     for (let i = 0; i < arr.length-1; i += 2) {
//         let current = [arr[i], arr[i + 1]];
//         let reverse = [arr[i + 1], arr[i]];
//         console.log(reverse);
        
//         if (!arr.includes(arr[0], arr[i + 2]) || !arr.includes(arr[1], arr[i + 3]))
//          {
//             add.push(current.join(','));
//         }
        
//     }
//     return  add.length===0?'yes':add;
// }

// console.log(arraycouple([4, 5, 1, 4, 5, 4, 4, 1]));

function arrayCouples(arr) {
    const unmatchedPairs = [];
    for (let i = 0; i < arr.length; i += 2) {
        let left = arr[i];
        let right = arr[i + 1];
        if (!pairInArray(arr, [right, left], i)) {
            unmatchedPairs.push([left, right]);
        }
    }
    return unmatchedPairs.length === 0 ? 'yes' : unmatchedPairs.join(',');
}

function pairInArray(arr, pair, excludeIndex) {
    let [left, right] = pair;
    for (let i = 0; i < arr.length; i += 2) {
        if (excludeIndex !== i && arr[i] === left && arr[i + 1] === right) {
            return true;
        }
    }
    return false;
}
console.log(arrayCouples([4, 5, 1, 4, 5, 4, 4, 1]));
