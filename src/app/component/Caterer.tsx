"use client"

import React, { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/navigation';
import axios from "axios";
import style from "./../vendor/vendorStyle.module.css"
import { Grid, Card, CardContent, Typography, MenuItem } from '@mui/material';
import { useDecorationPrice } from "@/context/DecorationPrice";

import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';

// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector } from "react-redux";
import { DateTimePicker } from "@mui/lab";


//user side caterer page
interface Caterer {
    images: string[];
    dishName: string;
    price: string;
    eventId: string;
}


interface EventData {
    EventDate: Date
}
const Caterer = () => {
    const { decorationPrice } = useDecorationPrice();
    // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
    const [Loading, setLoading] = useState(false);
    const [caterers, setCaterer] = useState<Caterer[]>([]);
    const [dishName, setDishName] = useState("");
    const [price, setPrice] = useState(0);
    const [noofDish, setNoOfDish] = useState(0);
    const [totalprice, setTotalprice] = useState(0);
    const [finalPayment, setFinalPayment] = useState(0);
    const [EventLocation, setEventLocation] = useState("");
    const [eventsId, setEventsId] = useState("");

    const [openAlert, setOpenAlert] = useState(false);

    //const[decorationPrice,setDecorationPrice]=useState(0);

    const handleEventChange = (event: any) => {
        setEventLocation(event.target.value);
    };

    const [EventDate, setSelectedDate] = useState<Date | null>(null);


    const handleDateChange = (newValue: Date | null) => {
        setSelectedDate(newValue);
    };

    const handleChangePrice = (e) => {
        const noOfDishvalue = parseInt(e.target.value);
        setNoOfDish(noOfDishvalue);
        setTotalprice(price * noOfDishvalue);
        setFinalPayment(price * noOfDishvalue + Number(decorationPrice))

    }


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (id: String) => {
        //alert(id);
        //console.log("id", id);
        const caterer = caterers.find(caterer => caterer.id == id);
        if (caterer) {
            const { dishName, price, eventId } = caterer;
            const DishName = dishName
            const Price = price
            setDishName(DishName);
            setPrice(Price);
            const event = eventId
            setEventsId(eventId)
            // alert(`dishname:${DishName} price:${Price} eventId :${event}`)
        }
        setOpen(true);
    };



    const handleClose = () => {
        setOpen(false);
    };



    const AllCaterer = async () => {
        try {
            setLoading(true);
            const res = await axios.get("https://localhost:44340/api/VendorEvent/AllCaterer");
            console.log("response all caterer", res);
            setCaterer(res.data);
            console.log("response", res);
            console.log("response id", res.data.id);


            console.log("response id", res.data[0].id);
            var res1 = res.data[0].id;
            console.log(res1);

            setLoading(false)

        } catch (error) {
            console.log("fail to fetch caterer");
            alert("fail to fetch caterer");
            setLoading(false)
        }
    }
    useEffect(() => {
        AllCaterer();
    }, [])

    // const handleOrderSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     // Calculate final total payment
    //     const finalTotalPayment = totalprice + Number(decorationPrice);
    //     setFinalPayment(finalTotalPayment);
    //     handleCloseOrderDialog();
    // };

    // const makepayment = async () => {
    //     try {
    //         var res = await axios.post("https://localhost:44340/api/Stripe/session");
    //         console.log("response", res);
    //         console.log("res", res.data.checkoutUrl);
    //         const session = res.data.checkoutUrl;
    //         window.location.href = session;

    //     } catch (error) {
    //         alert("fail to reach error")
    //     }
    // }
    // const User = useSelector((state) => state.auth.user);
    // console.log(User);

    const User = useSelector((state) => state.auth.user);
    console.log("User", User);

    const userId = User.user.userID;
    console.log("user iD", userId);

    // const { eventID } = useDecorationPrice();
    console.log("eventid", useDecorationPrice());
    const handlebooking = async () => {
        try {
            const userId = User.user.userID;
            console.log("user iD", userId);

            const eventid = eventsId
            console.log("eeeeee", eventid);

            //const EventID=
            const payment = finalPayment
            console.log("payment", payment);
            const location = EventLocation
            console.log("location", location);

            //const DateTime=Eventdate
            //console.log("date time",DateTime);
            var res = await axios.post("https://localhost:44340/api/Booking/AddBook", {
                eventID: eventid,
                payment,
                location,
                userId,
                EventDate,
                EventLocation,
            });
            console.log("response", res);
            console.log("res", res.data);
            if (res.status === 200) {
                alert(res.data);
                setOpenAlert(true);
            }
            else {
                alert(res.data);
            }



        } catch (error) {
            alert("fail to book pls try again letter");
            console.log("fail to booking");

        }
    }

    const handleCloseAlert = () => {
        setOpenAlert(false);
    };


    // const handlePayNow = async () => {
    //     try {
    //         const userId = User.user.userID;
    //         const eventid = eventsId;
    //         console.log("iddddd", userId, eventid);

    //         const eventdate=EventDate?.toISOString();

    //         if (!eventdate) {
    //             console.error("Selected date is null or undefined");
    //             return;
    //         }

    //         // var res = await axios.post("https://localhost:44340/api/Stripe/session",{
    //         //     userId: userId,
    //         //     eventId: eventid
    //         // });
    //         const res = await axios.post(`https://localhost:44340/api/Stripe/session?UserId=${userId}&eventId=${eventid}&eventDate=${eventdate}`, {
    //             UnitAmount: finalPayment
    //         });
    //         // const res = await axios.get(url);
    //         console.log("response", res);


    //         console.log("res", res.data.checkoutUrl);
    //         const session = res.data.checkoutUrl;
    //         window.location.href = session;

    //     } catch (error) {
    //         alert("fail to reach stripe payment page")
    //     }
    // }
    const handlePayNow = async () => {
        try {
            const userId = User.user.userID;
            console.log("user iD", userId);

            const eventid = eventsId
            console.log("eeeeee", eventid);

            //const EventID=
            const payment = finalPayment
            console.log("payment", payment);
            const location = EventLocation
            console.log("location", location);
            const res = await axios.post(`https://localhost:44340/api/Stripe/session`, {
                eventID: eventid,
                payment,
                location,
                userId,
                EventDate,
                EventLocation,
            });
            console.log("res", res.data.checkoutUrl);
            const session = res.data.checkoutUrl;
            window.location.href = session;


        } catch (error) {
            alert("fail to reach the stripe page");
        }
    }

    return (
        <div>
           
            <div className={style.head}>Welcome to Food Area</div>
            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                {caterers && (
                    caterers.map((caterer, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index} style={{ padding: '2rem 5rem', margin: '2rem 0' }}>
                            <Card>
                                <CardContent>
                                    {/* Render images if available */}

                                    <div style={{ width: '400px', height: '300px', overflow: 'hidden' }}>
                                        {caterer.images && caterer.images.map((imageUrl: string | undefined, imgIndex: React.Key | null | undefined) => (

                                            <img key={imgIndex} src={imageUrl} alt="Caterer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ))}
                                    </div>

                                    <h3>Dish Name: {caterer.dishName}</h3>
                                    <p>Price: {caterer.price}</p>
                                    <button className={style.button} onClick={() => handleClickOpen(caterer.id)}>Order</button>


                                    <Dialog className={style.bg2}
                                        open={open}
                                        onClose={handleClose}
                                        PaperProps={{
                                            component: 'form',
                                            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                                                event.preventDefault();
                                                const formData = new FormData(event.currentTarget);
                                                const formJson = Object.fromEntries((formData as any).entries());
                                                const email = formJson.email;
                                                console.log(email);
                                                handleClose();
                                            },
                                        }}
                                    >

                                        <DialogTitle>Order Now</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                {/* To subscribe to this website, please enter your email address here. We
                              will send updates occasionally. */}
                                            </DialogContentText>
                                            <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="name"
                                                name="DishName"
                                                label="DishName"
                                                value={dishName}
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
                                                name="Price"
                                                label="Price"
                                                type="text"
                                                value={price}
                                                fullWidth
                                                variant="standard"
                                                disabled
                                            />

                                            <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="No_Of_Dish"
                                                name="No_Of_Dish"
                                                label="No of Dish"
                                                type="number"
                                                onChange={handleChangePrice}
                                                value={noofDish}
                                                fullWidth
                                                variant="standard"
                                            />
                                            <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="TotalPrice"
                                                name="TotalPrice"
                                                label="TotalPriceOfDish"
                                                type="text"
                                                value={totalprice}
                                                fullWidth
                                                variant="standard"
                                                disabled
                                            />
                                            <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="TotalPrice"
                                                name="TotalPrice"
                                                label="DecorationPrice"
                                                type="number"
                                                fullWidth
                                                value={decorationPrice}
                                                variant="standard"
                                                disabled
                                            />

                                            <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
                                                <DatePicker
                                                    value={EventDate}
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
                                            {/* <InputLabel id="demo-simple-select-label">EventLocation</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={eventLocation}
                                                label="EventLocation"
                                                onChange={handleEventChange}
                                                className="w-30"
                                            >
                                                <MenuItem value="surat">surat</MenuItem>
                                                <MenuItem value="bhavnagar">bhavnagar</MenuItem>
                                                <MenuItem value="vapi">vapi</MenuItem>

                                            </Select> */}
                                            <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="TotalPrice"
                                                name="EventLocation"
                                                label="EventLocation"
                                                type="text"
                                                fullWidth
                                                value={EventLocation}
                                                onChange={handleEventChange}
                                                variant="standard"

                                            />

                                            <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="TotalPrice"
                                                name="TotalPrice"
                                                label="TotalPayment"
                                                type="text"
                                                fullWidth
                                                value={finalPayment}
                                                variant="standard"
                                                disabled
                                            />

                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                            <Button type="submit" onClick={handlePayNow}>Book Now</Button>
                                            {/* <Button type="submit" onClick={handlebooking}>Book Now</Button> */}
                                        </DialogActions>

                                    </Dialog>


                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>



            <Dialog open={openAlert} onClose={handleCloseAlert}>
                <DialogTitle>Final Payment</DialogTitle>
                <DialogContent>
                    <p>Final payment amount: {finalPayment}</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAlert} color="primary">
                        Close
                    </Button>
                    <Button onClick={handlePayNow} color="primary">
                        Pay Now
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default Caterer;