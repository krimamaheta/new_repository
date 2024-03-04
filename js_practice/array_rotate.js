
function rotate(arr)
{
   const r_in=arr[0];

   const r_ar=[...arr.slice(r_in),...arr.slice(0,r_in)];

   return r_ar;
}
console.log(rotate([2,3,4,1,6,10]))