
function barcket_combinations(num)
{
    if(num===0||num===1)
    {
        return 1;
    }
    let inside=num-1;
    let outside=0;
    let ways=0;
    while(inside>=0)
    {
        ways+=barcket_combinations(inside)*barcket_combinations(outside);
        inside--;
        outside++;
    }
    return ways;
}
console.log(barcket_combinations(3));
