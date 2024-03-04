// Find Intersection
// Have the function FindIntersection(strArr) read the array of 
//strings stored in strArr which will contain 2 elements: 
//the first element will represent a list of comma-separated numbers sorted in ascending order, 
//the second element will represent a second list of comma-separated numbers (also sorted). 
//Your goal is to return a comma-separated string containing the numbers that occur
// in elements of strArr in sorted order. If there is no intersection, return the string false.
// Examples
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10

//let [a1,a2]=str;
//let [a1,a2]=JSON.stringify(str);
// let a1=str[0][0].split(",");
// let a2=str[1][0].split(",");

function intersaction(str)
{
let a1=str[0][0].split(",");
let a2=str[1][0].split(",");
console.log(a1,a2);

console.log('a1',a1,'a2',a2);
let intercept = [];

for(let i=0; i<a1.length; i++)
{
console.log(a2);
if(a2.includes(a1[i]) && !intercept.includes(a1[i]))
{
intercept.push(a1[i]);

}
else{
// console.log('not done');
}

}
return intercept;
}

console.log('program output',intersaction([["1,3,4,7"],["1,2,3,4"]]));

// function intersact(str)
// {
//     let a1=str[0][0].split(",");
//     let a2=str[1][0].split(",");
//     console.log('a1' ,a1,'a2',a2);

//     let inter=[];
//     for(let i=0; i<a1.length; i++)
//     {
//         if(a2.includes(a1[i]) && !inter.includes(a1[i]))
//         {
//             inter.push(a[i]);
//         }
//         else{
//             console.log('not done');
//         }
//         return inter;
//     }
// }
// console.log('output will be:',intersact(["1,2,3"],["1,3,4"]));

//op will be 1,3
