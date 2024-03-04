//1010

function binary_d(binary) {
    let decimal = 0;
    const binaryArray = binary.split('').reverse();

    for (let i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] === '1') {
            decimal += Math.pow(2, i);
        }
    }

    return decimal;
}
// let decinmal=parseInt(num,2)
// return decinmal;

console.log(binary_d('1010'));