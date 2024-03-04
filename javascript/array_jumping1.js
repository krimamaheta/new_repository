// Using the JavaScript language, have the function arrayJumping(arr) take the
// * array of numbers stored in arr and first determine the largest element in the
// * array, and then determine whether or not you can reach that same element
// * within the array by moving left or right continuously according to whatever
// * integer is in the current spot. If you can reach the same spot within the
// * array, then your program should output the least amount of jumps it took. 
//For
// * example: if the input is [2, 3, 5, 6, 1] you'll start at the spot where 6 is
// * and if you jump 6 spaces to the right while looping around the array you end
// * up at the last element where the 1 is. Then from here you jump 1 space to the
// * left and you're back where you started, so your program should output 2. If
// * it's impossible to end up back at the largest element in the array your
// * program should output -1. The largest element in the array will never equal
// * the number of elements in the array. The largest element will be unique.


function array_jump(arr)
{
    let step=0;
    const maxindex=arr.indexOf(Math.max(...arr));
    console.log(maxindex);//3

    const maxvalue=arr[maxindex];
    console.log(maxvalue);

//here start value from max index and go till reach start point
    for(let i=maxindex;; i = (i + arr.length + arr[i]) % arr.length)
    {
        step++;
       if(i===maxindex)
       {
        return step;
       }
       if(step>arr.length)
        {
        return -1;
        }
       
    }
}
console.log(array_jump([2, 3, 5, 6, 1]));   