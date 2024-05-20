"use client"

import React, { useEffect, useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RateReviewIcon from '@mui/icons-material/RateReview';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
const Booking = () => {
  const[bookings,setBookings]=useState([]);
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [openEditDialog, setOpenEditDialog] = React.useState(false);
  
    const handleOpenDeleteDialog = () => {
      setOpenDeleteDialog(true);
    };
  
    const handleCloseDeleteDialog = () => {
      setOpenDeleteDialog(false);
    };
  
    const handleOpenEditDialog = () => {
      setOpenEditDialog(true);
    };
  
    const handleCloseEditDialog = () => {
      setOpenEditDialog(false);
    };

    useEffect(()=>{
      const fetchBooking=async()=>{
        try {
          const response = await axios.get('your_api_endpoint_here');
          setBookings(response.data);
      } catch (error) {
          console.error('Error fetching bookings:', error);
          alert('Failed to fetch bookings. Please try again later.');
      }
      }
      fetchBooking();
    },[])
   
    return (
        <div className="flex justify-center items-center h-full">

<h2>Booking List</h2>
            <table>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Event ID</th>
                        <th>Payment</th>
                        <th>Event Location</th>
                        <th>Event Date</th>
                        <th>Is Booked</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) => (
                        <tr key={index}>
                            <td>{booking.userId}</td>
                            <td>{booking.eventId}</td>
                            <td>{booking.payment}</td>
                            <td>{booking.eventLocation}</td>
                            <td>{booking.eventDate}</td>
                            <td>{booking.isBooked.toString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <h2 className="text-lg font-semibold mb-4">Booking</h2> */}
            {/* <table className="table-auto">
                <thead>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">EventName</th>
                    <th className="px-4 py-2">Payment</th>
                    <th className="px-4 py-2">BookingStatus</th>
                    <th className="px-4 py-2">Action</th>
                </thead>

                <tbody>
                    <tr>
                        <td className="border px-4 py-2">laxman@1gmail.com</td>
                        <td className="border px-4 py-2">RingCeremony</td>
                        <td className="border px-4 py-2">46000</td>
                        <td className="border px-4 py-2">Confirm!</td>
                        <td>
                            
                                <button className="border px-4 py-2" onClick={handleOpenEditDialog}><LibraryAddIcon /></button>
                                <button className="border px-4 py-2" onClick={handleOpenEditDialog}><EditIcon /></button>
                                <button className="border px-4 py-2" onClick={handleOpenEditDialog}><RateReviewIcon /></button>
                                <button className="border px-4 py-2" onClick={handleOpenDeleteDialog}><DeleteIcon /></button>
                            
                        </td>
                    </tr>


                    <tr>
                        <td className="border px-4 py-2">sita@1gmail.com</td>
                        <td className="border px-4 py-2">AwardCeremony</td>
                        <td className="border px-4 py-2">36000</td>
                        <td className="border px-4 py-2">Confirm!</td>
                        <td>
                        <button className="border px-4 py-2"><LibraryAddIcon /></button>
                                <button className="border px-4 py-2"><EditIcon /></button>
                                <button className="border px-4 py-2"><RateReviewIcon /></button>
                                <button className="border px-4 py-2"><DeleteIcon /></button>
                        </td>
                           
                    </tr>


                    <tr>
                        <td className="border px-4 py-2">gita@1gmail.com</td>
                        <td className="border px-4 py-2">RingCeremony</td>
                        <td className="border px-4 py-2">40,000</td>
                        <td className="border px-4 py-2">Confirm!</td>
                        <td>
                        <button className="border px-4 py-2"><LibraryAddIcon /></button>
                                <button className="border px-4 py-2"><EditIcon /></button>
                                <button className="border px-4 py-2"><RateReviewIcon /></button>
                                <button className="border px-4 py-2"><DeleteIcon /></button>
                        </td>
                         
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">krishna@1gmail.com</td>
                        <td className="border px-4 py-2">AnnyversaryCelebration</td>
                        <td className="border px-4 py-2">30,000</td>
                        <td className="border px-4 py-2">Confirm!</td>
                        <td>
                        <button className="border px-4 py-2"><LibraryAddIcon /></button>
                                <button className="border px-4 py-2"><EditIcon /></button>
                                <button className="border px-4 py-2"><RateReviewIcon /></button>
                                <button className="border px-4 py-2"><DeleteIcon /></button>
                        </td>
                           
                       
                    </tr>

                    <tr>
                        <td className="border px-4 py-2">kishan@1gmail.com</td>
                        <td className="border px-4 py-2">Haldi</td>
                        <td className="border px-4 py-2">35,000</td>
                        <td className="border px-4 py-2">Confirm!</td>
                        <tr>
                        <button className="border px-4 py-2"><LibraryAddIcon /></button>
                                <button className="border px-4 py-2"><EditIcon /></button>
                                <button className="border px-4 py-2"><RateReviewIcon /></button>
                                <button className="border px-4 py-2"><DeleteIcon /></button>
                        </tr>
                           
                       
                    </tr>



                </tbody>
            </table> */}
            {/* <Dialog
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleCloseEditDialog();
          },
        }}
      >
        <DialogTitle>ViewBookingDetails</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Email:laxman@1gmail.com"
            type="text"
            fullWidth
            variant="standard"
            disabled
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="EventName:RingCeremony"
            type="email"
            fullWidth
            variant="standard"
            disabled
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Payment:46000"
            type="text"
            fullWidth
            variant="standard"
            disabled
          />
            <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Booking Status:Confirm!"
            type="text"
            fullWidth
            variant="standard"
            disabled
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button type="submit">View</Button>
        </DialogActions>
      </Dialog>


      


      <Dialog
        open={openDeleteDialog}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this Booking?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button onClick={handleCloseDeleteDialog} autoFocus>
            Delete
          </Button>
          
        </DialogActions>
      </Dialog> */}


      {/* <Dialog
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleCloseEditDialog();
          },
        }}
      >


        <DialogTitle>EditUser</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="UserName"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button type="submit">Edit</Button>
        </DialogActions>
      </Dialog> */}




      {/* <Dialog
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleCloseEditDialog();
          },
        }}
      >

      <DialogTitle>ViewUser</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="UserName:Hanuman"
            type="text"
            fullWidth
            variant="standard"
            disabled
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="EmailAddress:Hanuman@gmail.com"
            type="email"
            fullWidth
            variant="standard"
            disabled
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="hanuman@123"
            type="password"
            fullWidth
            variant="standard"
            disabled
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button type="submit">View</Button>
        </DialogActions>
      </Dialog> */}

        </div>
    )
}

export default Booking;