//sort and unsorted array

function insertionsort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j=i-1;
        while ( j >= 0 && current < arr[j]) 
        {
            arr[j + 1] = arr[j]
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
console.log(insertionsort([8, 7, 2, 3, 1]));