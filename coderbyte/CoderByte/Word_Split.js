/************************************************************************
 *                 CODERBYTE WORD SPLIT CHALLENGE                       *
 *                                                                      *
 * Problem Statement                                                    *
 * Have the function WordSplit(strArr) read the array of strings stored *
 * strArr, which will contain 2 elements: the first element will be a   *
 * sequence of characters, and the second element will be a long string *
 * of comma-separated words, in alphabetical order, that represents a   *
 * dictionary of some arbitrary length. For example: strArr can be:     *
 * ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"].              *
 *                                                                      *
 * Your goal is to determine if the first element in the input can be   *
 * split into two words, where both words exist in the dictionary that  *
 * is provided in the second input. In this example, the first element  *
 * can be split into two words: hello and cat because both of those     *
 * words are in the dictionary. Your program should return the two words*
 * that exist in the dictionary separated by a comma. So for the example*
 * above,your program should return hello,cat. There will only be one   *
 * correct way to split the first element of characters into two words. *
 * If there is no way to split string into two words that exist in the  *
 * dictionary, return the string not possible. The first element itself *
 * will never exist in the dictionary as a real word.                   *
 *                                                                      *
 * Examples                                                             *
 * Input 1: ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]   *
 * Output 1: base,ball                                                  *
 *                                                                      *
 * Input 2: ["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]             *
 * Output 2: abcg,efd                                                   *
 *                                                                      *
 ***********************************************************************/
function checkCombination(str1, str2, firstWord) {
    const result = `${firstWord}${str2[0]}`;
    if (result === str1) return `${firstWord},${str2[0]}`;
    if (str2.length === 1) return 'not possible';
    return checkCombination(str1, str2.slice(1), firstWord);

}
function WordSplit(strArr) {
    const str1 = strArr[0];
    const str2 = strArr[1].split(',');
    // console.log(str2);
    let words = [];
    for (let i = 0; i < str2.length - 1; i++) {
        const result = checkCombination(str1, str2, str2[i]);
        if (result === false) continue;
        if (result === 'not possible') continue;
        return result;

    }
    return 'not possible';
}
console.log(WordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]));
