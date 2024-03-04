/**
 * Have the function wordCount(str) take the str string parameter being passed
 * and return the number of words the string contains (e.g. "Never eat shredded
 * wheat or cake" would return 6). Words will be separated by single spaces.*/


function vowel_count(str) {
    //TO CONVERT IN LOWERCASE
    return str === '' ? 0 : str.split(' ').length;
}
console.log(vowel_count("All cows eat grass and moo"));

https://github.com/bradhanson/coderbyte/blob/master/hard/max_heap_checker.js