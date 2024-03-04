/****************************************************************
 *                CODERBYTE H DISTANCE CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function HDistance(strArr) take the array of strings*
 * stored in strArr, which will only contain two strings of     *
 * equal length and return the number of characters at each     *
 * position that are different between them.                    *
 *                                                              *
 * For example: if strArr is ["house", "hours"] then your       *
 * program should return 2. The string will always be of equal  *
 * length and will only contain lowercase characters from the   *
 * alphabet and numbers.                                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["10011", "10100"]                                  *
 * Output 1: 3                                                  *
 *                                                              *
 * Input 2: ["abcdef", "defabc"]                                *
 * Output 2: 6                                                  *
 *                                                              *
 ***************************************************************/

function HDistance(strArr) 
{
    let [str1, str2] = strArr;

    if (str1 === str2) 
    return 0;

    let change = 0;
    for (i in str1) 
    {
        if (str1[i] === str2[i]) 
        continue;
        change++;
    }
    return change;
}
console.log(HDistance(["house", "hours"]));