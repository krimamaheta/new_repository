function selectonsort(arr)
{
    let count=0;
    for(let i=0; i<arr.length-1; i++)
    {
        let small=i;
        for(let j=i+1; j<arr.length; j++)
        {
            if(arr[small]>arr[j])
            {
                small=j;
            }
        }
        // if(!small===i)
        // {
            let temp=arr[small];
            arr[small]=arr[i];
            arr[i]=temp;
            count++;
            console.log(count);
        //}    
    }
   
    return {arr,count};
}
console.log(selectonsort([8,7,3,2,1]));