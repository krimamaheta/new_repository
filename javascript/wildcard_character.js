/**
 * Using the JavaScript language, have the function wildcardCharacters(str) read
 * str which will contain two strings separated by a space. The first string
 * will consist of the following sets of characters: +, *, and {N} which is
 * optional. The plus (+) character represents a single alphabetic character,
 * the asterisk (*) represents a sequence of the same character of length 3
 * unless it is followed by {N} which represents how many characters should
 * appear in the sequence where N will be at least 1. Your goal is to determine
 * if the second string exactly matches the pattern of the first string in the
 * input.
 *
 * For example: if str is "++*{5} gheeeee" then the second string in this case
 * does match the pattern, so your program should return the string true. If the
 * second string does not match the pattern your program should return the
 * string false.8/
 * 
 */

function wildcardCharacters(str) {
    const [pattern, inputString] = str.split(' ');
  
    let patternIndex = 0;
    let inputIndex = 0;
  
    while (patternIndex < pattern.length) {
      const currentChar = pattern[patternIndex];
  
      if (currentChar === '+') {
        if (!isAlphabetic(inputString[inputIndex])) {
          return 'false';
        }
        patternIndex++;
        inputIndex++;
      } else if (currentChar === '*') {
        let sequenceLength = 3;
  
        if (pattern[patternIndex + 1] === '{') {
          const closingBracketIndex = pattern.indexOf('}', patternIndex + 1);
          const numberStr = pattern.slice(patternIndex + 2, closingBracketIndex);
          sequenceLength = parseInt(numberStr);
          patternIndex = closingBracketIndex + 1;
        } else {
          patternIndex++;
        }
  
        while (sequenceLength > 0) {
          if (inputString[inputIndex] !== inputString[inputIndex - 1]) {
            return 'false';
          }
          inputIndex++;
          sequenceLength--;
        }
      } else {
        return 'false';
      }
    }
  
    // Check if the input string is fully consumed
    return inputIndex === inputString.length ? 'true' : 'false';
  }
  
  function isAlphabetic(char) {
    return /[a-zA-Z]/.test(char);
  }
  
  // Example usage:
  const input = "++*{5} gheeeee";
  const output = wildcardCharacters(input);
  console.log(output);
 