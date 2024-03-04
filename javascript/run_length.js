//wwwggh
//op is 3w2g1h

function runlength(str)
{
    let count=1;
    let result='';
    for(let i=0; i<str.length; i++)
    {
        if(str[i]===str[i+1])
        {
            count++;
        }
        else
        {
        //if the value is not same
        result+=count+str[i];
        count=1;
        }
        
    }
    return result;
}
console.log(runlength("wwwggh"));