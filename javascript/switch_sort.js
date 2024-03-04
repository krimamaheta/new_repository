//here 1 3 4 2
//then 1 4 3 2
//1 2 3 4

//to count the value 

// function sortArr(arr) {
//     let temp = 0;
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < i; j++) {
//             console.log(j);
//             if (arr[i] > arr[j])
//              {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//                 count++;

//             }

//         }

//     }
//     // let a=arr.sort(arr);
//     return { sortedarr: arr, swapcount: count };
// }
// console.log(sortArr([1, 3, 4, 2]));

//switch sort

// function switchsort(num)
// {
//     let count=1;

// for(let i=0; i<num.length; i++)
// {
//     for(let j=num.length-1; j>=0; j--)
//     {
//         // console.log(num[i]);
//         // console.log('j',num[j]);

//         if(num[i]>num[j])
//         {
//             //swapimg done 
//             [num[i],num[j]]=[num[j],num[i]];
//             count++;
//             console.log(count);
//         }
//     }
   
// }
// return count;
// }
// console.log(switchsort([1,3,4,2]));
// function print(arr)
// {
//     for(let i=0; i<arr.length; i++)
//     {
//         console.log(arr[i]+",");
//     }
// }

function bubbles(arr)
{
    let temp;

    for(let i=0; i<arr.length-1; i++)
    {
        for(let j=0; j<arr.length-i-1; j++)
        {
            if(arr[j]>arr[j+1])
            {
             temp=arr[j];
             arr[j]=arr[j+1];
             arr[j+1]=temp;   
             console.log(temp);
            }
        }
    }
  return arr;
    // print(arr);
}
console.log(bubbles([7,8,3,1,2]));


