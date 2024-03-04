/**
 * Have the function simpleSymbols(str) take the str parameter being passed and
 * determine if it is an acceptable sequence by either returning the string true
 * or false. The str parameter will be composed of + and = symbols with several
 * letters between them (ie. ++d+===+c++==a) and for the string to be true each
 * letter must be surrounded by a + symbol. So the string to the left would be
 * false. The string will not be empty and will have at least one letter.
 */

function simpleSymbols(str)
{
    for(let i=0; i<str.length; i++)
    {
     //   let letter=str.match(/[a-zA-Z]+/g);

        if(/[a-zA-Z]/.test(str[i]))
        {
            if(i===0||i===str.length-1||str[i+1]!='+' ||str[i-1]!='+')
            return false;
        }
    }
    return true;
}
console.log(simpleSymbols("+a+b+c+"));
