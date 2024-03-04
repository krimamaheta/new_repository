/****************************************************************
 *             CODERBYTE SCALE BALANCING CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ScaleBalancing(strArr) read strArr which   *
 * will contain two elements, the first being the two positive  *
 * integer weights on a balance scale (left and right sides)    *
 * and the second element being a list of available weights as  *
 * positive integers. Your goal is to determine if you can      *
 * balance the scale by using the least amount of weights from  *
 * the list, but using at most only 2 weights.                  *
 *                                                              *
 * For example: if strArr is ["[5, 9]", "[1, 2, 6, 7]"] then    *
 * this means there is a balance scale with a weight of 5 on    *
 * the left side and 9 on the right side. It is in fact         *
 * possible to balance this scale by adding a 6 to the left     *
 * side from the list of weights and adding a 2 to the right    *
 * side. Both scales will now equal 11 and they are perfectly   *
 * balanced.                                                    *
 *                                                              *
 * Your program should return a comma separated string of the   *
 * weights that were used from the list in ascending order,     *
 * so for this example your code should return the string 2,6   *
 *                                                              *
 * There will only ever be one unique solution and the list of  *
 * available weights will not be empty. It is also possible to  *
 * add two weights to only one side of the scale to balance it. *
 * If it is not possible to balance the scale then your program *
 * should return the string not possible.                       *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["[3, 4]", "[1, 2, 7, 7]"]                          *
 * Output 1: 1                                                  *
 *                                                              *
 * Input 2: ["[13, 4]", "[1, 2, 3, 6, 14]"]                     *
 * Output 2: 3,6                                                *
 *                                                              *
 ***************************************************************/
function bothOnSameSide(num1, num2, arr2, result) {
    if (result.length === 2) return 'not possible';
    for (let i = 0; i < arr2.length; i++) {
        if (num1 + arr2[i] === num2) return result.push(arr2[i]);
        let tempRes = result;
        tempRes.push(arr2[i]);
        let temparr2 = arr2;
        temparr2.splice(i, 1);
        let res = bothOnSameSide(num1 + arr2[i], num2, temparr2, tempRes);
        if (res !== 'not possible') return tempRes.push(res);
    }
    return 'not possible';
    // return bothOnSameSide(num1,num2,arr2,result);
}
function bothOnDifferentSide(num1, num2, arr2, result) {
    for (let i = 0; i < arr2.length; i++) {
        if (num1 + arr2[i] === num2) return result.push(arr2[i]);
        let temparr2 = arr2;
        temparr2.splice(i, 1);
        let res = bothOnSameSide(num2, num1 + arr2[i], temparr2, [arr2[i]]);
        if (res !== 'not possible') return [arr2[i], res];
    }
    return 'not possible';
}
function ScaleBalancing(strArr) {
    let arr1 = strArr[0].slice(1, strArr[0].length - 1).split(', ').map(e => Number(e));
    let arr2 = strArr[1].slice(1, strArr[1].length - 1).split(', ').map(e => Number(e));
    if (arr1[0] === arr1[1]) return '';
    let result = '';
    let res1, res2;
    if (arr1[0] < arr1[1]) {
        res1 = bothOnSameSide(arr1[0], arr1[1], arr2, []);
        res2 = bothOnDifferentSide(arr1[0], arr1[1], arr2, []);
    } else {
        res1 = bothOnSameSide(arr1[1], arr1[0], arr2, []);
        res2 = bothOnDifferentSide(arr1[1], arr1[0], arr2, []);
    }
    if (res1 !== 'not possible' && res1.length <= res2.length) return res1.split(',');
    if (res2 !== 'not possible' && res2.length <= res1.length) return res2.split(',');
    return 'not possible';
}
console.log(ScaleBalancing(["[5, 9]", "[1, 2, 6, 7]"]));