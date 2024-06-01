
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
const Profile = () => {
    
    const User = useSelector((state:any) => state.auth.user)
    const userId = User.user.userID;
    console.log(userId);
    const router = useRouter();
    const searchParams = useSearchParams();
    const [success, setSuccess] = useState<string | null>(null);
    
    const [bookings, setBookings] = useState<BookingData[]>([]);

   
    useEffect(() => {
        const successParam = searchParams.get('success');
        if (successParam) {
            setSuccess(successParam);
            const alertTimeout = setTimeout(() => {
                alert("Your event is booked successfully!");
            }, 1000);

            // Cleanup timeout if the component unmounts
            return () => clearTimeout(alertTimeout);
        }
    }, [searchParams]);

    const handleBookingAll = async () => {
        try {
            const res = await axios.get(`https://localhost:44340/api/Booking/AllUserId?userId=${userId}`);
            console.log("res", res);
            setBookings(res.data);
        } catch (error) {
            alert("fail to fetch booking event list");
        }
    }

    // const handleDeleteBook=()=>{

    // }
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
    return (
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
                                    
                                    {booking && booking.eventName && (
                                        <td className="py-2">Event Name: {booking.eventName}</td>
                                    )}
                                    {booking && booking.finalPayment && (

                                        <td className="py-2">Payment: {booking.finalPayment}</td>
                                    )}
                                    

                                    {booking && booking.bookingEventDate && (
                                        <td className="py-2">Date: {booking.bookingEventDate}</td>
                                    )}

                                    <button onClick={() => BookingCancel(booking.bookingId)}>Cancel</button>
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