function checkWords(arr) {
    // Split the words in arr[0] and arr[1] into arrays
    const wordsArr0 = arr[0].split(", ");
    const wordsArr1 = arr[1].split(",");

    // Convert the words in arr[0] to a single string for easy comparison
    const joinedWordsArr0 = arr[0].replace(/, /g, "");

    // Initialize an array to store unmatched words
    const unmatchedWords = [];

    // Iterate through words in arr[1] and check if they are in arr[0]
    wordsArr1.forEach(word => {
        if (word.length > 0) {
            // Check if each character in the word is present in arr[0]
            const isMatch = word.split('').every(char => joinedWordsArr0.includes(char));
            if (!isMatch) {
                unmatchedWords.push(word);
            }
        }
    });

    // If there are unmatched words, return them; otherwise, return true
    return unmatchedWords.length > 0 ? unmatchedWords : true;
}

// Test the function with the given input
const arr = ["aaey, rrum, tgmn, ball", "all,ball,mur,raeymnl,tall,true,trum,yes"];
const result = checkWords(arr);
console.log(result);