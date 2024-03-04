
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