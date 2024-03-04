/**
 * Have the function vowelCount(str) take the str string parameter being passed
 * and return the number of vowels the string contains (ie. "All cows eat grass
 * and moo" would return 8). Do not count y as a vowel for this challenge.*/

function vowel_count(str)
{
    //TO CONVERT IN LOWERCASE
    const lower=str.toLowerCase();
    let count=0;
    
    for(let i=0; i<lower.length; i++)
    {
        if(/[a,i,o,u,e]/.test(lower[i]))
        {
            count++;
        }
    }
    return count;
}
console.log(vowel_count("All cows eat grass and moo"))