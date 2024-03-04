//[5,3,2,1,3,51,2]

function arrayCouples(arr) {
    const unmatchedPairs = [];
    for (let i = 0; i < arr.length; i += 2) {
       //    console.log(arr[i])
        let left = arr[i];
        let right = arr[i + 1];
        console.log(arr[i+1])
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
console.log(arrayCouples([4,5,1,4,5,4,4,1]));

