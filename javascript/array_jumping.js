/**
 * Using the JavaScript language, have the function arrayJumping(arr) take the
 * array of numbers stored in arr and first determine the largest element in the
 * array, and then determine whether or not you can reach that same element
 * within the array by moving left or right continuously according to whatever
 * integer is in the current spot. If you can reach the same spot within the
 * array, then your program should output the least amount of jumps it took. For
 * example: if the input is [2, 3, 5, 6, 1] you'll start at the spot where 6 is
 * and if you jump 6 spaces to the right while looping around the array you end
 * up at the last element where the 1 is. Then from here you jump 1 space to the
 * left and you're back where you started, so your program should output 2. If
 * it's impossible to end up back at the largest element in the array your
 * program should output -1. The largest element in the array will never equal
 * the number of elements in the array. The largest element will be unique.*/
function arrayJumping(arr)
{
    let ht={};
    let length=arr.length;
    let maxindex=arr.indexOf(Math.max(...arr));
    console.log(maxindex);

    for(let i=0; i<length; i++)
    {
        ht[i]=[leftposition(length,i,arr[i]),rightposition(length,i,arr[i])]
    }
    console.log(ht);

    if(ht[maxindex].includes(maxindex))return 1;
    let jump=1;

    let traverse=new Set(ht[maxindex]);
    console.log(traverse);

    for(jump=2; jump<length; jump++)
    {
        for(let i of [...traverse])
        {
            traverse.add(ht[i][0]);
            traverse.add(ht[i][1]);
        }
        if(traverse.has(maxindex))return jump;
    }
    return -1;


}
console.log(arrayJumping([2, 3, 5, 6, 1]));


function leftposition(length,i,number)
{
    let val=number%length;
    for(; val>0; val--)
    {
        i--;
        if(i<0) i=length-1;
    }
    return i;
}

function rightposition(length,i,number)
{
    let val=number%length;
    for(; val>0; val--)
    {  
        i++;
        if(i>length-1)i=0;
    }
    return i;
}