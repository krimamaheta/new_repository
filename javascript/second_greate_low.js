// Have the function secondGreatLow(arr) take the array of numbers stored in arr
// * and return the second lowest and second greatest numbers, respectively,
// * separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the
// * output should be 12 98. The array will not be empty and will contain at least
// * 2 numbers. It can get tricky if there's just two numbers!


function gretestvalue(num)
{
    //remove duplicate and sort asc order
    let sortarray=[...new Set(num)].sort((a,b)=>a-b);
    console.log(sortarray);

    let second_low=sortarray[1];
    let second_great=sortarray[sortarray.length-2];

    return `${second_low} ${second_great}`;
}
console.log(gretestvalue([7, 7, 12, 98, 106]));