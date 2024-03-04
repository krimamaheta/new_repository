/**
 * Have the function palindrome(str) take the str parameter being passed and
 * return the string true if the parameter is a palindrome, (the string is the
 * same forward as it is backward) otherwise return the string false. For
 * example: "racecar" is also "racecar" backwards. Punctuation and numbers will
 * not be part of the string.*/

function palindrome_n(str)
{
    //remove non alpha charcter from string

    let clearstring=str.replace(/[^a-zA-Z0-9]/g,' ').toLowerCase();

    let reverse=clearstring.split('').reverse().join('');

    return  clearstring===reverse;
}
console.log(palindrome_n("racecar"));