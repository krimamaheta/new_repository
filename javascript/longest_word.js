/**
 * Have the function longestWord(sen) take the sen parameter being passed and
 * return the largest word in the string. If there are two or more words that
 * are the same length, return the first word from the string with that length.
 * Ignore punctuation and assume sen will not be empty.*/

//return largest word instring 

// function longword(str)
// {
//     let words=str.replace(/[^\w\s]/g,'').split(' ');
//     console.log(words);

//     let maxlength=0;
//     let longest='';
//     for(let word of words)
//     {
//         if(word.length>maxlength)
//             maxlength=word.length;
//             longest=word;

//     }
//     return longest;
// }
// console.log(longword("today is gretest day."));


function longword(str) 
{
    let validvalue = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`;
    let maxlength1 = 0;
    let longestword = [];

    let length = 0;
    let word = '';

    for (let i = 0; i < str.length; i++) {
       
        let c = str[i];
        if (validvalue.includes(c)) 
        {
            length++;
            word += c;
            console.log(length,'l');
            console.log(word, 'hi');
        }
        else 
        {
            length = 0; word = '';
        }

        if (length > maxlength1) {
            maxlength1 = length;
            longestword = word;
        }
    }
    return longestword;
}
console.log(longword("jay swaminarayan"));

