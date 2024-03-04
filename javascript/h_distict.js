// Problem Statement                                            *
//  * Have the function HDistance(strArr) take the array of strings*
//  * stored in strArr, which will only contain two strings of     *
//  * equal length and return the number of characters at each     *
//  * position that are different between them.                    *
//  *                                                              *
//  * For example: if strArr is ["house", "hours"] then your       *
//  * program should return 2. The string will always be of equal  *
//  * length and will only contain lowercase characters from the   *
//  * alphabet and numbers.                                        *
//  *                                                              *
//  * Examples                                                     *
//  * Input 1: ["10011", "10100"]                                  *
//  * Output 1: 3                                                  *
//  *                                                              *
//  * Input 2: ["abcdef", "defabc"]                                *
//  * Output 2: 6                                                  *


//find the same length having diff value count
function h_distict(str)
{

    // let s1=str[0];
    // let s2=str[1];  //here both method is same 

    let [s1,s2]=str;
    console.log(s1,s2);

    //ensure that string have equal length

    if(s1.length!==s2.length)
    {
        return  -1;
    }
    let distance=0;

    for(let i=0; i<s1.length; i++)
    {
        if(s1[i]!==s2[i])
            distance++;
    }
    return distance;

}
console.log(h_distict(["abcdef", "defabc"]))