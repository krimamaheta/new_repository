"use client"

import React, { useEffect, useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import style from "./../admin/style.module.css"
import style1 from "@/app/admin/style.module.css"

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useSelector } from "react-redux";


interface BookingModel {
  Id:"",
  bookingId: "",
  userId: "",
  eventId: "",
  payment: "",
  eventLocation: "",
  eventDate: "",
  eventName:"",
}
const Booking = () => {
  const [bookings, setBookings] = useState<BookingModel[]>([]);
  
  const [openEditDialog, setOpenEditDialog] = React.useState(false);
  const [eventDate, setEventDate] = useState<Date | null>(null);
  const[bookingId,setBookingId]=useState("");
 

  const handleOpenEditDialog = async(bookingId:string) => {
    setOpenEditDialog(true);
    alert(bookingId);
    const booking=bookings.find(x=>x.bookingId==bookingId);
    if(booking){
      const{eventId,eventLocation,payment,eventDate}=booking
      alert(`payment:${payment},eventDate:${eventDate},eventLocation:${eventLocation},eventid:${eventId}`);
      setSelectedEventId(eventId);
      setPayment(payment);
      setBookingId(bookingId);
      //setEventDate(eventDate === "" ? null : new Date(eventDate));
      setEventLocation(eventLocation);
      
    }
  };

  const updatebookings=async()=>{
   try{
    debugger
     const userId = User.user.userID;
     console.log(userId);
     console.log("userid",userId);
     const formattedEventDate = eventDate?.toISOString(); 
     const updatebooking=await axios.put(`https://localhost:44340/api/Booking/update/${bookingId}`,{
       bookingId,
       userId,
       eventId:selectedEventId,
       eventLocation:eventLocation,
       payment:payment,
       eventDate:formattedEventDate,
       isBooked:true
     });
     console.log('Updated booking:', updatebooking);
     if(updatebooking.status==200){
       alert("update success.")
       await fetchBooking();
     }
     else{
      //400
       alert('update fail');
     }

   }catch(error){
    alert("fail to update");
    throw error;
   }

  }

  const handleCloseEditDialog = () => {
   
    setOpenEditDialog(false);
  };
  const [payment, setPayment] = useState("");
  
  const [eventLocation, setEventLocation] = useState("");
  const [selectedEventId, setSelectedEventId] = useState('');
  const [eventId, setEventId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);
  const[isBooked,setIsBooked]=useState<boolean>(false);

  const[page,setPage]=useState(1);
  const[pageSize,setPageSize]=useState(5);

  const fetchBooking = async () => {
    //e.preventDefaut();
    setLoading(true);
    try {
      
      //const res="https://localhost:44340/api/Booking/AllBooking"
      const response = await axios.get(`https://localhost:44340/api/Booking/AllBooking?page=${page}&pageSize=${pageSize}`);
      setBookings(response.data);


    } catch (error) {
      console.error('Error fetching bookings:', error);
      alert('Failed to fetch bookings. Please try again later.');
      //setError('Failed to fetch bookings. Please try again later.');
      setLoading(true);
    }
    finally {
      setLoading(false);
    }
  }

  const handleNextPage = () => {
    setPage(page + 1); 
    fetchBooking ();
    // Increment page number
  }
   
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
      fetchBooking (); // Decrement page number if greater than 1
    }
  }


  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    
  }
  
  const handleClose = () => {
    setOpen(false)
  }


  //event all
  const fetchEvent = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://localhost:44340/Api/Event/AllEvent");
      setEvents(response.data);
      setSelectedEventId(response.data.eventId);
      console.log("eve",eventId);
      console.log("response", response);
      console.log("responseprice", response.data.price);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [])


  const selectChange = (e) => {
    const { value } = e.target;
    setSelectedEventId(value);
  };

  const handleDateChange = (newValue: Date | null) => {
    setEventDate(newValue);
  };

//init date was not coming
  const handleUpdateDateChange = (newValue: Date | null, initialValue: Date | null) => {
    // Check if the new value is null or empty string
    if (newValue === null) {
      // If newValue is null, set eventDate to null
      setEventDate(null);
    } else if (initialValue === null) {
      // If the initialValue is null, set eventDate to the new value
      setEventDate(newValue);
    } else {
      // Otherwise, keep the initial value
      setEventDate(initialValue);
    }
  };


  const User = useSelector((state) => state.auth.user);
  console.log(User);
  const AddBooking=async(userId:string)=>{
    try{
     
      const userId = User.user.userID;
      console.log(userId);
      console.log("userid",userId);
      
      const res=await axios.post(`https://localhost:44340/api/Booking/AddBookingAdmin?UserId=${userId}`,{
        userId,
        eventId:selectedEventId,
        payment,
        eventDate,
        eventLocation,
        isBooked:true
      })
      console.log("response",res);
      console.log("res data",res.data);
      if(res.status==200){
        alert(res.data)
       
        setSelectedEventId('');
        setPayment('');
        setEventDate(null); // Assuming this is a date object
        setEventLocation('');
        setIsBooked(true); 
        //alert("Booking Add Successfully...1")
      }
      else{
        alert("fail to add Booking value pls try again letter.")
      }
    }catch(error){
      alert("fail to add value");
    } 
  }


  //delete booking
  // const DeleteDetails=async(id:string)=>{
  //   if(window.confirm("Are you sure to Delete booking ?"))
  //   try{
  // alert(id)
  //     var res=await axios.delete(`https://localhost:44340/api/Booking/Delete?Id=${id}`);
  //     console.log("res",res);
  //     if(res.status==200){
  //       alert("Delete Suceess...!")
  //       await fetchBooking();
  //       return res.data;
  //     }
  //     else{
  //       alert("fail to delete try again letter")
  //     }
      
  //   }catch(error){
  //     console.log("error",error);
  //     alert("fail to delete try again letter.......");
  //     throw error;
  // }
  const DeleteDetails=async(bookingId:string)=>{
    if(window.confirm("Are you sure to delete booking ?"))
    try{
      alert(bookingId)
      var res=await axios.delete(`https://localhost:44340/api/Booking/Delete?Id=${bookingId}`)
      if(res.status==200){
        alert(res.data)
        await fetchBooking();
        return res.data;
      }
      else{
        alert("fail to delete try again letter");
        alert(res.data);
      }
    }catch(error){
      alert("fail to delete get error");
      throw error;
    }
  }


  return (
    <div>
      <div>
        <div className={style.button1}><button onClick={handleClickOpen}>+AddBooking</button>

          <Dialog
            open={open}
            onClose={handleClose}
          >
            <DialogTitle>VendorDetails</DialogTitle>
            <DialogContent>
              <DialogContentText>

              </DialogContentText>
              {/* <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="eventId"
            label="SelectEvent"
            type="text"
            fullWidth
            variant="standard"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
        /> */}
              <label htmlFor="events">Select Event:</label>
              <select
                className={style1.s1}
                name="events"
                id="events"
                value={selectedEventId}
                onChange={selectChange}
              >
                {loading ? (
                  <option value="">Loading.....</option>
                ) : error ? (
                  <option value="">{error}</option>
                ) : (
                  events.map((event) => (
                    <option key={event.eventId} value={event.eventId}>
                      {event.eventName}
                    </option>
                  ))
                )}
              </select>
              <TextField
                autoFocus
                required
                margin="dense"
                id="payment"
                name="payment"
                label="Payment"
                type="text"
                fullWidth
                variant="standard"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              />
              {/* <TextField
            autoFocus
            required
            margin="dense"
            id="eventDate"
            name="eventDate"
            label="EventDate"
            type="text"
            fullWidth
            variant="standard"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
        /> */}
              <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
                <DatePicker
                  value={eventDate}
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <TextField
                      {...params.inputProps}
                      autoFocus
                      required
                      margin="dense"
                      id="EventDate"
                      name="EventDate"
                      label="EventDate"
                      fullWidth
                      variant="standard"
                    />
                  )}
                />

              </LocalizationProvider>
              <TextField
                autoFocus
                required
                margin="dense"
                id="eventLocation"
                name="eventLocationt"
                label="EventLocation"
                type="text"
                fullWidth
                variant="standard"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
              />


            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" onClick={() => AddBooking(User.userId)}>Add</Button>
            </DialogActions>
          </Dialog>
        </div>

        <div className={style.button1} onClick={fetchBooking}><button>BookingList</button></div>
        <div className={style1.eventList}>
       
          {loading ? (
            <p>Loading....!</p>
          ) : error ? (
            <p>Error... {error}</p>
          ) : bookings.length > 0 ? (
            <>
           
              <div className={style1.head}>Booking List</div>
             
            
              <table className={style1.eventTable}>
                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>Payment</th>
                    <th>Event Location</th>
                    <th>Event Date</th>
                    <th>Is Booked</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking, index) => (
                    <tr key={index}>
                     
                      <td>{booking.bookingId}</td>
                      <td>{booking.payment}</td>
                      <td>{booking.eventLocation}</td>
                      <td>{booking.eventDate}</td>
                      <td>{booking.isBooked.toString()}</td>
                      <td>
                        <button onClick={()=>handleOpenEditDialog(booking.bookingId)}><EditIcon /></button>
                      </td>
                      <td>
                        <button onClick={()=>DeleteDetails(booking.bookingId)}><DeleteIcon/></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                
               
              </table>
              <div className={style.main1}>
                <div className={style.font1}>{page}</div>
                <button className={style.button2} onClick={handlePreviousPage} disabled={page === 1}>Previous Page</button>
                <div className={style.font1}>{pageSize}</div>
                <button className={style.button2} onClick={handleNextPage}>Next Page</button>
              </div>
            </>
          ) : (
            <p>No bookings available</p>
          )}
        </div>



            <Dialog
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


        <DialogTitle>EditBooking</DialogTitle>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <label htmlFor="events">Select Event:</label>
              <select
                className={style1.s1}
                name="events"
                id="events"
                value={selectedEventId}
                onChange={selectChange}
              >
                {loading ? (
                  <option value="">Loading.....</option>
                ) : error ? (
                  <option value="">{error}</option>
                ) : (
                  events.map((event) => (
                    <option key={event.eventId} value={event.eventId}>
                      {event.eventName}
                    </option>
                  ))
                )}
              </select>
              <TextField
                autoFocus
                required
                margin="dense"
                id="payment"
                name="payment"
                label="Payment"
                type="text"
                fullWidth
                variant="standard"
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
              />

         <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
                <DatePicker
                  value={eventDate}
                  onChange={handleDateChange}
                  renderInput={(params) => (
                    <TextField
                      {...params.inputProps}
                      autoFocus
                      required
                      margin="dense"
                      id="EventDate"
                      name="EventDate"
                      label="EventDate"
                      fullWidth
                      variant="standard"
                    />
                  )}
                />

              </LocalizationProvider>
              <TextField
                autoFocus
                required
                margin="dense"
                id="eventLocation"
                name="eventLocationt"
                label="EventLocation"
                type="text"
                fullWidth
                variant="standard"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
              />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button type="submit" onClick={updatebookings}>Edit</Button>
        </DialogActions>
      </Dialog>

      </div>
    </div>

  )
}


export default Booking;