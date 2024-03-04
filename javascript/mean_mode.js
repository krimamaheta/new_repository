/**
 * Have the function meanMode(arr) take the array of numbers stored in arr and
 * return 1 if the mode equals the mean, 0 if they don't equal each other (ie.
 * [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).
 * The array will not be empty, will only contain positive integers, and will
 * not contain more than one mode.
 */

//here mean :calculate sum all number and divide each number(avg)
//mode :occurance value and track highest value in array
//if mean ===mode return 1 otherwise return 0;

function meanmode(arr)
{
   //find mean
   const mean=arr.reduce(function(sum,num){return sum+num},0)/arr.length;
   console.log(mean,'mean');
//let mean=0;
// for(let i=0; i<arr.length; i++)
// {
//     mean+=arr[i];
// }
// mean=Math.round(mean/arr.length);    
//    console.log(mean);

//find mode
let maxoccurance=0;
let mode=0;
 let count=0;
for(let i=0; i<arr.length; i++)
{
    let marco=arr[i];
    for(let j=i+1; j<arr.length; j++)
    {

        if(marco===arr[j])
        {
            count++;
            if(count>maxoccurance)
            {
                maxoccurance=count;
                mode=arr[j];
            }
        }

    }
}




return mean===mode?1:0;

}
console.log(meanmode([5,3,3,3,1]));