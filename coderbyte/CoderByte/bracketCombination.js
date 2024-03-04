function BracketCombinations(num) {
    if (num === 0 || num === 1)
        return 1;
    let outside = 0;
    let possible = 0;
    let inside = num - 1;
    while (inside >= 0) {
        // BracketCombinations(inside);
        possible += BracketCombinations(inside) * BracketCombinations(outside);
        inside--;
        outside++;

    }
    return possible;
}

// keep this function call here 

const readline = require('readline');
let n;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter number", function (num) {
    num = Number(num);
    console.log(BracketCombinations(num));
    // n = num;
    rl.close();
});