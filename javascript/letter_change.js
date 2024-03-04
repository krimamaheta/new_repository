/**
 * Have the function letterChanges(str) take the str parameter being passed and
 * modify it using the following algorithm. Replace every letter in the string
 * with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 * Then capitalize every vowel in this new string (a, e, i, o, u) and finally
 * return this modified string.*/

//here if a->b , z->a and capital every vovel in string

function letter_change(str) {
    let vowel = ['a', 'i', 'o', 'u', 'e'];

    function nextword(char)
     {
        if (char === ' ') return char;
        if (char >= 'a' && char < 'z') {
            return String.fromCharCode(char.charCodeAt(0) + 1);
        }
        else if (char === 'z') {
            return 'a';
        }
        else if (char >= 'A' && char < 'Z') {
            return String.fromCharCode(char.charCodeAt(0) + 1);
        }
        else if (char = 'Z') {
            return 'A';
        }
        else {
            return char;
        }
    }


    //apply algorythm

    let modifystr = str.split('');
   // console.log(modifystr);

    modifystr = modifystr.map(char => {
        const nextletter = nextword(char);
        return vowel.includes(nextletter) ? nextletter.toUpperCase() : nextletter;
    }).join('');

    return modifystr;
}
console.log(letter_change("Hello Word"));