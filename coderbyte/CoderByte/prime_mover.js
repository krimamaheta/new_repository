//find the solution in javscript  6*(4/2)+3*1 output :15

//set index and return that value
//ex:9 return 23  and 100 ->541

function prime_number(num)
{
    let prime_number=[];
    let isprime=new Array(10005);
    for(let i=1; i<=10000; i++)
    {
        //init isprime 0
        isprime[i]=0;
    }
    for(let i=2; i<=10000; i++)
    {
        if(isprime[i]===0)prime_number.push(i);
        //to remove multiple
        for(let j=i; j<=10000; j+=i)
        {
           isprime[j]=1;
        }
    }
   

    return prime_number[num-1];
}
console.log(prime_number(9));