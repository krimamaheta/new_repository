/**
 * Have the function letterCapitalize(str) take the str parameter being passed
 * and capitalize the first letter of each word. Words will be separated by only
 * one space.*/

//to capital letter of each word

function capital(str)
{
    //split into array
    let words=str.split(' ');
    //console.log(words);
    let capitalwords=words.map(word=>word.charAt(0).toUpperCase()+word.slice(1));

    //join the string

    let res=capitalwords.join(' ');

    return res;
}
console.log(capital("the first letter of the word is capital"));