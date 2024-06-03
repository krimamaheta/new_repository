
"use client"
//import UserProfile from "@/app/component/UserProfile";
import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface BookingData {
    bookingId: "";
    id: "",
    payment: "",
    eventName: "",
    dishName: "",
    bookingEventDate: "",
    finalPayment: ""
}
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
const Profile = () => {
    
    const User = useSelector((state:any) => state.auth.user)
    const userId = User?.user?.userID;
    console.log(userId);
    const router = useRouter();
    const searchParams = useSearchParams();
    const [success, setSuccess] = useState<string | null>(null);
    const [bookings, setBookings] = useState<BookingData[]>([]);

   
    const successParam = searchParams.get('success');
    console.log("search",successParam);
    
    // useEffect(() => {
    //     if (successParam) {
    //         setSuccess(successParam);
    //         alert("Your event is booked successfully!");
    //         const newSearchParams = new URLSearchParams(searchParams.toString());
    //         newSearchParams.delete('success');
    //         const currentPath = window.location.pathname;
    //         router.replace(`${currentPath}?${newSearchParams.toString()}`);
    //     }
    // }, [successParam, searchParams, router]);
    
    // useEffect(() => {
    //     if (successParam) {
    //         setSuccess(successParam);
    //         const alertTimeout = setTimeout(() => {
    //             alert("Your event is booked successfully!");
    //         }, 1000);

    //         // Cleanup timeout if the component unmounts
    //         return () => clearTimeout(alertTimeout);
    //     }
    // }, [searchParams]);

    const handleBookingAll = async () => {
        try {
            const res = await axios.get(`https://localhost:44340/api/Booking/AllUserId?userId=${userId}`);
            console.log("res", res);
            setBookings(res.data);
        } catch (error) {
            alert("fail to fetch booking event list");
        }
    }

   
    const BookingCancel = async (bookingId: string) => {
        if ((window.confirm("Are you sure to cancel Booking ?")))
            try {
              
                const res = await axios.delete(`https://localhost:44340/api/Booking/Delete?Id=${bookingId}`)
                if (res.status == 200) {
                   // alert(res.data.message)
                    alert("Booking Cancel Sucessfully...!")
                    await handleBookingAll();
                }
                else {
                    alert("Fail to cancel booking pls try again letter.")
                }
            }
            catch (error) {
              
                alert("An Error occure fail to Cancel Booking");
            }
    }
    
  useEffect(() => {
    handleBookingAll();
  }, []);

    return (
        // <div>
        //     <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        //         <h2 className="text-2xl mb-4 text-center">Welcome to Profile Page</h2>
        //         <button onClick={handleBookingAll} className="block w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-full mb-4">Booked Event</button>
        //         <div>
        //             <h3 className="text-lg mb-2">Bookings:</h3>
        //             <table className="w-full">
        //                 <tbody>
        //                     {bookings.map((booking, index) => (
        //                         <tr key={index} className="border-b border-gray-200">
                                    
        //                             {booking && booking.eventName && (
        //                                 <td className="py-2">Event Name: {booking.eventName}</td>
        //                             )}
        //                             {booking && booking.finalPayment && (

        //                                 <td className="py-2">Payment: {booking.finalPayment}</td>
        //                             )}
                                    

        //                             {booking && booking.bookingEventDate && (
        //                                 <td className="py-2">Date: {booking.bookingEventDate}</td>
        //                             )}

        //                             <button onClick={() => BookingCancel(booking.bookingId)}>Cancel</button>
        //                         </tr>
        //                     ))}

        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>
        // </div>
        <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px',marginTop:'1rem',fontSize:'24px',marginLeft:'6rem'}}>Booking Events</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Event Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Final Payment</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{index + 1}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.eventName}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.finalPayment}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{formatDate(booking.bookingEventDate)}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                <button
                  onClick={() => BookingCancel(booking.bookingId)}
                  style={{
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '14px',
                    margin: '4px 2px',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default Profile;

function async() {
    throw new Error("Function not implemented.");
}
