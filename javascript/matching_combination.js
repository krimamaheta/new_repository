/**
 * Using the JavaScript language, have the function matchingCouples(arr) take
 * the arr parameter being passed which will be an array of integers in the
 * following format: [B, G, N] where B represents the number of boys, G
 * represents the number of girls, and N represents how many people you want to
 * pair together. Your program should return the number of different ways you
 * can match boys with girls given the different arguments. For example: if arr
 * is [5, 3, 2], N=2 here so you want to pair together 2 people, so you'll need
 * 1 boy and 1 girl. You have 5 ways to choose a boy and 3 ways to choose a
 * girl, so your program should return 15. Another example: if arr is [10, 5,
 * 4], here N=4 so you need 2 boys and 2 girls. We can choose 2 boys from a
 * possible 10, and we can choose 2 girls from a possible 5. Then we have 2
 * different ways to pair the chosen boys and girls. Our program should
 * therefore return 900
 *
 * N will always be an even number and it will never be greater than the maximum
 * of (B, G). B and G will always be greater than zero.*/

function factorial(n)
{
    let sum=1;
    for(let i=1; i<=n; i++)
    {
        sum*=i;
    }
    return sum;
}

function combination(n,k)
{
    return factorial(n)/(factorial(k)*factorial(n-k));
}
function matchingCouples(arr1)
{
    let  [boys,girls,numpair]=arr1;
    let each_pair=numpair/2; //always even 
    console.log(boys,girls,numpair);
    console.log(each_pair);
    
    const waychooseboy=combination(boys,each_pair);

    const waychoosegirl=combination(girls,each_pair);
    const total=waychooseboy*waychoosegirl*factorial(each_pair);
 

//     let  totalcom=(waychooseboy*waycoosegirl);

   return total;
}
console.log(matchingCouples([5,3,2]));    