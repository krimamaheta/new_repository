// Problem Statement                                            *
//  * Have the function DistinctList(arr) take the array of numbers*
//  * stored in arr and determine the total number of duplicate    *
//  * entries. For example if the input is [1, 2, 2, 2, 3] then    *
//  * your program should output 2 because there are two duplicates*
//  * of one of the elements.                                      *
//  *                                                              *
//  * Examples                                                     *
//  * Input 1: [0,-2,-2,5,5,5]                                     *
//  * Output 1: 3                                                  *
//  *                                                              *
//  * Input 2: [100,2,101,4]                                       *
//  * Output 2: 0                                           

// function dictinctlist(arr)
// {
//     let duplicate=0;

//     for(let i=0; i<arr.length; i++)
//     {
//         if(arr.slice(i+1).includes(arr[i]))
//         {
//             duplicate++;
//         }
//     }
//     return duplicate;

// }
// console.log(dictinctlist([0,-2,-2,5,5,5]));

function dictinctlist(arr)
{
    let duplicate=0;

    let newarr=[];

    for(let i of arr)
    {
        if(newarr.includes(i))
            duplicate++;
        else
            newarr.push(i);
    }
    return duplicate;

}
console.log(dictinctlist([0,-2,-2,5,5,5]));