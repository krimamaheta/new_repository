import React from "react";
import style from "./../admin/style.module.css"
const Decorator=()=>{
    return(
//         <div>
           
//             <div>
//                 <div >
//                 <h2>welcome Caterer page</h2>
//                 <button className={style.b1}>+Add Caterer</button>
//                 <button className={style.b1}>CatererList</button>
//                 <div className={style.m2}>
//   <table>
//     <thead>
//       <tr>
//         <th className={style.th1}>Name</th>
//         <th className={style.th1}>Email</th>
//         <th className={style.th1}>SelectedEvent</th>
        
//         <th className={style.th1}>Actions</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>Hanuman</td>
//         <td>Hanuman@gmail.com</td>
//         <td>WeddingCeremony</td>
//         <td>
//           <button className={style.b3}>Edit</button>
//           <button className={style.b3}>View</button>
//           <button className={style.b3}>Delete</button>
//         </td>
//       </tr>
//       <tr>
//         <td>Bhim</td>
//         <td>Bhim@gmail.com</td>
//         <td>BirthdayCelebration</td>
//         <td>
//           <button className={style.b3}>Edit</button>
//           <button className={style.b3}>View</button>
//           <button className={style.b3}>Delete</button>
//         </td>
//       </tr>
//       <tr>
//         <td>Arjun</td>
//         <td>Arjun@gmail.com</td>
//         <td>BirthdayCelebration</td>
//         <td>
//           <button className={style.b3}>Edit</button>
//           <button className={style.b3}>View</button>
//           <button className={style.b3}>Delete</button>
//         </td>
//       </tr>
     
//       <tr>
//         <td>gita</td>
//         <td>gita@gmail.com</td>
//         <td>RingCeremony</td>
//         <td>
//           <button className={style.b3}>Edit</button>
//           <button className={style.b3}>View</button>
//           <button className={style.b3}>Delete</button>
//         </td>
//       </tr>
//       <tr>
//         <td>Laxmi</td>
//         <td>Laxmi@gmail.com</td>
//         <td>MarrigeAnnyversary</td>
//         <td>
//           <button className={style.b3}>Edit</button>
//           <button className={style.b3}>View</button>
//           <button className={style.b3}>Delete</button>
//         </td>
//       </tr>
//     </tbody>
//   </table>

//                 </div>
//                 </div>
           
              
//         </div>

//         </div>

<div>
<div >
<h2>UserBookingList</h2>
<button className={style.b1}>+Add Booking</button>
<button className={style.b1}>UserBookingList</button>
<div className={style.m2}>
<table>
<thead>
<tr>
<th className={style.th1}>Name</th>
<th className={style.th1}>Email</th>
<th className={style.th1}>SelectedEvent</th>
<th className={style.th1}>PaymentStatus</th>
<th className={style.th1}>Payment</th>
<th className={style.th1}>Location</th>
<th className={style.th1}>Actions</th>
</tr>
</thead>
<tbody>
<tr>
<td>krishna</td>
<td>krishna@gmail.com</td>
<td>WeddingCeremony</td>
<td>Success!</td>
<td>15000</td>
<td>Surat</td>
<td>
<button className={style.b3}>Edit</button>

<button className={style.b3}>Delete</button>
</td>
</tr>
<tr>
<td>Radhika</td>
<td>Radhika@gmail.com</td>
<td>BirthdayCelebration</td>
<td>Success!</td>
<td>15000</td>
<td>Ahmedabad</td>
<td>
<button className={style.b3}>Edit</button>

<button className={style.b3}>Delete</button>
</td>
</tr>
<tr>
<td>Anjani</td>
<td>Anjani@gmail.com</td>
<td>BirthdayCelebration</td>
<td>Success!</td>
<td>20000</td>
<td>Baroda</td>
<td>
<button className={style.b3}>Edit</button>

<button className={style.b3}>Delete</button>
</td>
</tr>
<tr>
<td>Govinad</td>
<td>Govinad@gmail.com</td>
<td>MarrigeAnnyversary</td>
<td>Fail!</td>
<td>15000</td>
<td>Anand</td>
<td>
<button className={style.b3}>Edit</button>

<button className={style.b3}>Delete</button>
</td>
</tr>
</tbody>
</table>

</div>
</div>


</div>
              
     


    )
}

export default Decorator;