/**
 * Have the function firstReverse(str) take the str parameter being passed and
 * return the string in reversed order. For example: if the input string is
 * "Hello World and Coders" then your program should return the string
 * "sredoC dna dlroW olleH".*/

function reverse(str)
{
    let reversestring=str.split('').reverse().join('');
    return reversestring;
}
console.log(reverse("HELLO WORLD"))