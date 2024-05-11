
"use client"
//import UserProfile from "@/app/component/UserProfile";
import React, { useState } from "react";
import style from "./../vendor/vendorStyle.module.css"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from "axios";
import { useSelector } from "react-redux";



// const Profile = () => {
//     const [openEditDialog, setOpenEditDialog] = React.useState(false);
//     const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);

//     const handleClickOpenEditDialog = () => {
//         setOpenEditDialog(true);
//     };

//     const handleClickOpenDeleteDialog = () => {
//         setOpenDeleteDialog(true);
//     };

//     const handleCloseEditDialog = () => {
//         setOpenEditDialog(false);
//     };

//     const handleCloseDeleteDialog = () => {
//         setOpenDeleteDialog(false);
//     };

//     return (
       
//         <div>

        
       
//         <div className={style.bguser}>
           
//             <table className={style.table1}>
//                 <thead className={style.th1} >

//                     <th>EventName</th>
//                     <th>DecorationPrice</th>
//                     <th>DishName</th>
//                     <th>DishPrice</th>
//                     <th>TotalDish</th>
//                     <th>TotalPayment</th>
//                     <th>Date</th>
//                     <th>Action</th>

//                 </thead>
//                 <tr className={style.td1}>
//                     <td>RingCeremony</td>
//                     <td>21000</td>
//                     <td>newMasalaDhosa</td>
//                     <td>500</td>
//                     <td>50</td>
//                     <td>46000</td>
//                     <th>23/may/24</th>
//                     <div className={style.buttons}>
//                         {/* <button className={style.bt1} onClick={handleClickOpenEditDialog}><EditIcon /></button> */}
//                         <Dialog
//          open={openEditDialog}
//          onClose={handleCloseEditDialog}
//         PaperProps={{
//           component: 'form',
//           onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
//             event.preventDefault();
//             const formData = new FormData(event.currentTarget);
//             const formJson = Object.fromEntries((formData as any).entries());
//             const email = formJson.email;
//             console.log(email);
//            // handleCloseEditDialog();
//           },
//         }}
//       >
//         <DialogTitle>Update</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//            Are you Want to update EventDate ?
//           </DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="EventDate"
//             name="text"
//             label="EventDate"
//             type="text"
//             fullWidth
//             variant="standard"
//           />
//           {/* <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="DecorationPrice"
//             name="DecorationPrice"
//             label="DecorationPrice"
//             type="text"
//             fullWidth
//             variant="standard"
//           />
//          <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="DecorationPrice"
//             name="DecorationPrice"
//             label="DecorationPrice"
//             type="text"
//             fullWidth
//             variant="standard"
//           />
//            <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="DishName"
//             name="DecorationPrice"
//             label="DecorationPrice"
//             type="text"
//             fullWidth
//             variant="standard"
//           /> */}



//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseEditDialog}>Cancel</Button>
//           <Button type="submit">Edit</Button>
//         </DialogActions>
//       </Dialog>


//                         <button className={style.bt1} onClick={handleClickOpenDeleteDialog}><DeleteIcon /></button>

//                         <Dialog
//                             open={openDeleteDialog}
//                             onClose={handleCloseDeleteDialog}
//                             aria-labelledby="alert-dialog-title"
//                             aria-describedby="alert-dialog-description"
//                         >
//                             <DialogTitle id="alert-dialog-title">
//                                 {"Are you Want to Cancel EventBooking?"}
//                             </DialogTitle>
//                             <DialogContent>
//                                 <DialogContentText id="alert-dialog-description">
//                                     Can you Cancel Selected Booking Event?
//                                 </DialogContentText>
//                             </DialogContent>
//                             <DialogActions>
//                                 <Button onClick={handleCloseDeleteDialog}>Disagree</Button>
//                                 <Button onClick={handleCloseDeleteDialog} autoFocus>
//                                     Agree
//                                 </Button>
//                             </DialogActions>
//                         </Dialog>
//                     </div>

//                 </tr>
//                 <tbody>

//                 </tbody>
//             </table>
//             {/* <UserProfile/> */}

//         </div>
//         </div>
//     )
// }

// export default Profile;


interface BookingData{
    id:"",
    payment:"",
    eventName:"",
    dishName:"",
    bookingEventDate:"",
    finalPayment:""


}
const Profile=()=>{

    const User = useSelector((state) => state.auth.user)
    const userId = User.user.userID;
    console.log(userId);
    const[bookings,setBookings]=useState<BookingData[]>([]);
   
    const handleBookingAll=async()=>{
        try{
            const res=await axios.get(`https://localhost:44340/api/Booking/AllUserId?userId=${userId}`);
            console.log("res",res);
            setBookings(res.data); 
          
        
        }catch(error){
            alert("fail to fetch booking event list");
        }
    }

    // const handleDeleteBook=()=>{
        
    // }
    return(
        <div className={style.bg3}>
            <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-2xl mb-4 text-center">Welcome to Profile Page</h2>
                <button onClick={handleBookingAll} className="block w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full mb-4">Booked Event</button>
                <div>
                    <h3 className="text-lg mb-2">Bookings:</h3>
                    <table className="w-full">
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                   
                                    <td className="py-2">Event Name: {booking.eventName}</td>
                                    {/* <td className="py-2">Dish Name: {booking.dishName}</td> */}
                                   
                                    <td className="py-2">Payment: {booking.finalPayment}</td>
                                    <td className="py-2">Date: {booking.bookingEventDate}</td>
                                    <button>Cancel</button>

                                
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Profile;