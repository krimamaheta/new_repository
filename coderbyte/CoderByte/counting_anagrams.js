/****************************************************************
 *             CODERBYTE COUNTING ANAGRAMS CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CountingAnagrams(str) take the str         *
 * parameter & determine how many anagrams exist in the string. *
 * An anagram is a new word that is produced from rearranging   *
 * the characters in a different word.                          *
 * For example: cars and arcs are anagrams.                     *
 *                                                              *
 * Your program should determine how many anagrams exist in a   *
 * given string and return the total number.                    *
 *                                                              *
 * For example: "cars are very cool so are arcs and my os"      *
 * then your program should return 2 because "cars" and "arcs"  *
 * form 1 anagram and "so" and "os" form a 2nd anagram.         *
 *                                                              *
 * The word "are" occurs twice in the string but it isn't an    *
 * anagram because it is the same word just repeated.           *
 * The string will contain only spaces and lowercase letters,   *
 * no punctuation, numbers, or uppercase letters.               *
 *                                                              *
 * Examples                                                     *
 * Input 1: "aa aa odg dog gdo"                                 *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: "a c b c run urn urn"                               *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/

function CountingAnagrams(str) 
{
    let strArr = str.split(' ');

    let anagramCount = 0;

    let copiedElement = [];

    for (let i = 0; i < strArr.length; i++) 
    {
        if (copiedElement.includes(strArr[i])) 
        continue;
        for (let j = i + 1; j < strArr.length; j++) 
        {
            if (strArr[i] === strArr[j]) { copiedElement.push(strArr[j]); continue; }
            if (copiedElement.includes(strArr[j])) continue;
            let temp1 = strArr[i];
            let temp2 = strArr[j];
            temp1 = temp1.split("").sort().join("");
            temp2 = temp2.split("").sort().join("");
            if (temp1 === temp2) 
            { anagramCount++; 
                copiedElement.push(strArr[j]); }
        }
    }
    return anagramCount;
}

console.log(CountingAnagrams("a c b c run urn urn"));