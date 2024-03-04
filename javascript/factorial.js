function fact(num)
{
    if(num==0||num==1)
    return 1;
    else
    return num*fact(num-1);
    // let sum=1;
    // for(let i=1; i<=num; i++)
    // {
    //     sum*=i;
    // }
    // return sum;
}
console.log(fact(4));