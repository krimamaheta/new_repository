/****************************************************************
 *                CODERBYTE LARGEST FOUR CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LargestFour(arr) take the array of integers*
 * stored in arr, and find the four largest elements and return *
 * their sum.                                                   *
 *                                                              *
 * For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the    *
 * four largest elements in this array are 6, 6, 4, and 5 and   *
 * the total sum of these numbers is 21, so your program should *
 * return 21.                                                   *
 *                                                              *
 * If there are less than four numbers in the array your program*
 * should return the sum of all the numbers in the array.       *
 *                                                              *
 * Examples                                                     *
 * Input 1: [1, 1, 1, -5]                                       *
 * Output 1: -2                                                 *
 *                                                              *
 * Input 2: [0, 0, 2, 3, 7, 1]                                  *
 * Output 2: 13                                                 *
 *                                                              *
 ***************************************************************/

// function four_largest(arr)
// {
//     arr=arr.sort();
//     console.log(arr);

//     for(let i=0; i<arr.length; i++)
//     {

//         if(arr.length>=4)
//         {
//             arr[i]=Math.abs(arr[i]+arr[i+1]);
//         }
//         else
//         {

//         }
//     }
// }
// console.log(four_largest([1,1,1,-5]));


function four_largest(arr)
{
    //arr.sort((a, b) => b - a);
//6,6,5,4
//in desc order 
    arr.sort((a,b)=>b-a);
   console.log(arr);

//to add 4 so that take slice method

   const sum=arr.slice(0,4).reduce((acc,num)=> acc+=num,0);
   
   return sum;
}
console.log(four_largest([4, 5, -2, 3, 1, 2, 6, 6]));


// const sum=arr.slice(0,4).reduce(function(acc,num){ return acc+num},0);
//function sholud return something value write return keyword

//https://github.com/krimamaheta/localrepo1.git
