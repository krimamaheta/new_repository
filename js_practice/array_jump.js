//[2,3,5,6,1]

function array_jumping(arr)
{
    let ht={};
    let maxindex=arr.indexOf(Math.max(...arr))
    console.log(maxindex);

    let length=arr.length;
    for(let i=0; i<length; i++)
    {
        ht[i]=[leftposition(length,i,arr[i]),rightposion(length,i,arr[i])];
    }
    console.log(ht);
    if(ht[maxindex].includes(maxindex))return 1;
    let jump=1;

    let travese=new Set(ht[maxindex]);

    for(let jump=2; jump<length; jump++)
    {
        for(let i of [...travese])
        {
            travese.add(ht[i][0]);
            travese.add(ht[i][1]);
        }
        if(travese.has(maxindex))return jump;
    }
    return -1;
}
console.log(array_jumping([2,3,5,6,1]));
function leftposition(length,i,number)
{
    let val=number%length;
    for(; val>0; val--)
    {
        
        i--;
        if(i<0)i=length-1;
    }
    return i;
}
function rightposion(length,i,number)
{
    let val=number%length;
    for(; val>0; val--)
    {
        i++;
        if(i>length-1)i=0;
    }
    return i;
}