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



import { Grid, Card, CardContent, Typography } from '@mui/material';
//user side caterer page
interface Caterer {
    images: string[];
    dishName: string;
    price: string;
}
const Caterer = () => {
   // const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
    const [Loading, setLoading] = useState(false);
    const [caterers, setCaterer] = useState<Caterer[]>([]);


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
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

    const fetchcaterer = async () => {
        try {
            var res = await axios.get(``)

        } catch (error) {
            alert("fail to fetch vendor by id");
            console.log("fail to fetch vendor by Id");

        }
    }
    //   const handleContinue = () => {
    //     setShowCaterers(true);
    //     // You can add additional logic here if needed
    //   };
    return (
        <div>
            <h2>welcome to caterer page</h2>
            <h2>Welcome to Food Area</h2>
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
                                    <button className={style.button} onClick={handleClickOpen}>Order</button>


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
                                                label="DishName:NewMasalaDhosa"
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
                                                label="Price:500"
                                                type="text"
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
                                                type="text"
                                                fullWidth
                                                variant="standard"
                                            />
                                            <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="TotalPrice"
                                                name="TotalPrice"
                                                label="TotalPriceOfDish:25000"
                                                type="text"
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
                                                label="DecorationPrice:21000"
                                                type="text"
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
                                                label="EventDate:23/05/24"
                                                type="text"
                                                fullWidth
                                                variant="standard"
                                               
                                            />
                                            
                                            

                                            <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="TotalPrice"
                                                name="TotalPrice"
                                                label="TotalPayment:46000"
                                                type="text"
                                                fullWidth
                                                variant="standard"
                                                disabled
                                            />

                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                            <Button type="submit"  >pay Now</Button>
                                        </DialogActions>
                                    </Dialog>


                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>

        </div>
    )
}

export default Caterer;