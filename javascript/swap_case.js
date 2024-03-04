/**
 * Have the function swapCase(str) take the str parameter and swap the case of
 * each character. For example: if str is "Hello World" the output should be
 * hELLO wORLD. Let numbers and symbols stay the way they are.
 */

function string_swap(str)
{
    //convert  string into array

    const arr=str.split('');

    for(let i=0; i<arr.length; i++)
    {
        if(/[a-zA-Z]/.test(arr[i]))
        {
            arr[i]=arr[i]===arr[i].toLowerCase()?arr[i].toUpperCase():arr[i].toLowerCase();
           // arr[i]=arr[i]===arr[i].toLowerCase()?arr[i].toUpperCase():arr[i].toLowerCase();
        }
    }

    const res=arr.join('');
    return res;

}
console.log(string_swap("Hello World"));