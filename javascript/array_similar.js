// ****************************************************************
//  *              CODERBYTE ARRAY SIMILAR CHALLENGE               *
//  *                                                              *
//  * Problem Statement                                            *
//  * Two arrays are called similar if one can be obtained from    *
//  * another by swapping at most one pair of elements in one of   *
//  * the arrays. Given two arrays a and b, check whether they are *
//  * similar.                                                     *
//  *                                                              *
//  * Examples                                                     *
//  * Input 1: a = [1, 2, 3] and b = [1, 2, 3]                     *
//  * Output 1: true                                               *
//  *                                                              *
//  * Input 2: [1, 2, 3] and b = [2, 1, 3]                         *
//  * Output 2: true                                               *
//  * Explanation: We can obtain b from a by swapping 2 and 1 in b.*
//  *                                                              *
//  * Input 3: [1, 2, 2] and b = [2, 1, 1]                         *
//  * Output 3: false                                              *
//  * Explanation: Any swap of any two elements either in a or b   *
//  * won't make a and b equal                                     *
//  *                                                              *
//  ***************************************************************/


// function ArraySimilar(arr) {
//     let [arr1, arr2] = arr;
//     arr1.sort();
//     arr2.sort();
//     console.log(arr1, arr2);
//     if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true;
//     return false;
// }
// console.log(ArraySimilar([[1, 2, 3], [2, 1, 3]]));


function arraysimilar(arr)
{
    let [arr1,arr2]=arr;
    arr1.sort();
    arr2.sort();
    
    console.log(arr1,arr2);
    if(JSON.stringify(arr1)===JSON.stringify(arr2))
    return true;
    else
    return false;
}
console.log(arraysimilar([[1,3,2],[3,1,2]]))


// //merge and sort array 1>

// let a=[1,4,6];
// let b=[3,7,9];
// const merge=a.concat(b)

// merge.sort(function(a,b){
//     return a-b;
// });
// //return ascending 
// console.log(merge);



//single variable sort exp  2>
// const array=[1,7,2,5];

// array.sort(function(a,b){return a-b;});
// console.log(array);
