function checkSumOfThree(arr) {
    const targetSum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === targetSum) {
                    return true;
                }
            }
        }
    }
    return false;
}

const inputArr = [10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2];
const output = checkSumOfThree(inputArr);
console.log(output); // Output: true