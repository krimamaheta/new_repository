/*

Bracket Matcher
Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.


"(coder)(byte))"


Input: "(coder)(byte))"
Output: 0

Input: "(c(oder)) b(yte)"
Output: 1
*/


// function BracketMatcher(str) {
//     let count = 0;
//     let bracketsArr = [];
//     let s = str.filter(i => { i === '(' || i === ')' });
//     console.log(s);
// }
// BracketMatcher("(coder)(byte))");





function BracketMatcher(str) {


    let open = 0;
    let bracketArr = [];
    let res = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            open++;
            console.log(str[i], open);
            bracketArr.push('(');
            console.log(bracketArr);

        }
        if (str[i] === ')') {
            bracketArr.push(')');
            open--;
            console.log(str[i], open);
            console.log(bracketArr);
        }
        // if(open<0)
        // return 0;
        res = open < 0 ? 0 : 1

        /* if(open<0)
        return 0;
        else
        return 1;*/

        //else{
        //return 1;
        // }
    }

    // code goes here
    return res;
    // console.log(open);
}
console.log(BracketMatcher("(coder)(byte))"));

//console.log(BracketMatcher("(((hello)"));