//generators

const colors=['red','pink','green']

for(let color of colors)
{
    console.log(color);
}


const num=[1,2,3,4,5];
 let total=0;

 for(let numb of num)
 {
    total+=numb;
 }
 console.log(total);


 //

 function* num1()
 {
   // return 'hi';
 }
 console.log(num1());

//

 function *num2()
 {
    return 'hi';
 }
 console.log(num2());

 const g=num2();
 g.next();
 g.next();
