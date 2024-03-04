//"cars are very cool so are arcs and my os" o/p:2
// /****************************************************************
//  *             CODERBYTE COUNTING ANAGRAMS CHALLENGE            *
//  *                                                              *
//  * Problem Statement                                            *
//  * Have the function CountingAnagrams(str) take the str         *
//  * parameter & determine how many anagrams exist in the string. *
//  * An anagram is a new word that is produced from rearranging   *
//  * the characters in a different word.                          *
//  * For example: cars and arcs are anagrams.                     *
//  *                                                              *
//  * Your program should determine how many anagrams exist in a   *
//  * given string and return the total number.                    *
//  *                                                              *
//  * For example: "cars are very cool so are arcs and my os"      *
//  * then your program should return 2 because "cars" and "arcs"  *
//  * form 1 anagram and "so" and "os" form a 2nd anagram.         *
//  *                                                              *
//  * The word "are" occurs twice in the string but it isn't an    *
//  * anagram because it is the same word just repeated.           *
//  * The string will contain only spaces and lowercase letters,   *
//  * no punctuation, numbers, or uppercase letters.               *
//  *                                                              *
//  * Examples                                                     *
//  * Input 1: "aa aa odg dog gdo"                                 *
//  * Output 1: 2                                                  *
//  *                                                              *
//  * Input 2: "a c b c run urn urn"                               *
//  * Output 2: 1                                                  *

//conting anagrams

// 

function anagram(str)
{
    const arr=str.split(' ');
    console.log(arr);

    let add=[];
    let count=0;

    for(let i=0; i<arr.length; i++)
    {
        if(add.includes[arr[i]])
        continue;

        for(let j=i+1;j<arr.length; j++)
        {
           if(arr[i]===arr[j])
           {
            add.push(arr[j]);
            continue;
           }
           if(add.includes(arr[j]))
           {
                continue;
           }
           console.log(add);
           let t1=arr[i];
           let t2=arr[j];

           t1=t1.split("").sort().join("");
           t2=t2.split("").sort().join("");

           if(t1===t2)
           {
                count++;
                add.push(arr[j]);
                
           }
         
        }
     
    }
    return count;
}
console.log(anagram("aa aa odg dog gdo" ));