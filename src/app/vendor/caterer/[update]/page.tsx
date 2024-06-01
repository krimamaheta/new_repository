"use client"

import { useParams } from "next/navigation"
import React, { ChangeEvent, cache, useCallback, useEffect } from "react";
import style from "./../../vendorStyle.module.css"
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";


const UpdateBox = () => {
    const params = useParams()
    const id = params.update;
    console.log(id);
    const [open, setOpen] = React.useState(false);
    const [dishName, setDishName] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState<File[]>([]);
    const [vendorId, setVendorId] = useState("");
    const [eventId, setEventId] = useState("");
    const [loading, setLoading] = useState(false);
    const [ids, setIds] = useState("");
    const route=useRouter();



    interface vendorCatererModel {
        eventId: "";
        vendorId: "";
        images: any;
        id: "",
        price: "",
        imageurl: string[]
        eventName: "",
        firmName: "",
        cityName: "",
        address: "",
        websiteUrl: "",
        district: "",
        dishPrice: "",
        dishName: "",
          
    }
    interface Caterer {
        images: any;
        dishName: string;
        price: string;
        eventId: string;
        vendorId: string;
    
    }
    interface VendorEvent {
        id: string
        eventId: string;
        vendorId: string;
        dishName: string;
        price: string;
        images: File[];
    }
    const [value, setValue] = useState<VendorEvent>({
        eventId: "",
        vendorId: "",
        price: "",
        dishName: "", 
        images: [] as string[],
    });
    const handleFileChange = (e: { target: { files: any; }; }) => {
        const files = e.target.files;
    
    if (files) {
      setValue((prevValue) => ({ ...prevValue, images: Array.from(files) }));
    }
       
    };

    const User = useSelector((state: any) => state.auth.user);
    const FetchVendorId = async (userId: any) => {

        try {
            var res = await axios.get(`https://localhost:44340/Api/Vendor/getByUserId/${userId}`)
            console.log("res..", res);
            console.log("vendorid", res.data.vendorId);


            console.log("vendoreventid", res.data.id);

            return res.data.vendorId;

        } catch (error) {
            console.log("error.....", error);
            alert(error);

        }
    }

    
    const fetchCaterer = async () => {
        try {
            setLoading(true);
            const vendorId = await FetchVendorId(User.user.userID);
            const res = await axios.get(`https://localhost:44340/api/VendorEvent/GetAllByVendorId?vendorId=${vendorId}`);
            console.log("vendor id", vendorId);
            console.log("response", res);
            setVendorCaterer(res.data);
        } catch (error) {
            console.error("Error fetching vendor Catering:", error);
            alert("Failed to fetch catering list. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    const [vendorCaterer, setVendorCaterer] = useState<vendorCatererModel[]>([]);

    useEffect(() => {
        if (User) {
            FetchVendorId(User.user.userID).then(vendorId => {
                fetchCaterer(vendorId);
            });
        }
    }, [User]);

    useEffect(() => {
        if (id && vendorCaterer.length > 0) {
            const caterer = vendorCaterer.find(e => e.id === id);
            if (caterer) {
                const { dishName, price, images, eventId, vendorId } = caterer;
                setDishName(dishName || '');
                setPrice(price || '');
                setImages(images || []);
                setEventId(eventId);
                setVendorId(vendorId);
                setUpdateOpen(true);
            }
        }
    }, [id, vendorCaterer]);


    //update details
    const handleUpdateClick = async (Id: String) => {
        try {
        
            const cloudinaryUploadPromises = value.images.map(async (image) => {
                const formData = new FormData();
                formData.append("file", image);
                formData.append("upload_preset", "unsign_upload");
                formData.append("cloud_name", "dqtsmfpvb");

                const response = await fetch(
                    "https://api.cloudinary.com/v1_1/dqtsmfpvb/image/upload",
                    {
                        method: "POST",
                        body: formData,
                    }
                );
                const data = await response.json();
                return data.secure_url;
            });

            const uploadedImageUrls = await Promise.all(cloudinaryUploadPromises);
            console.log("Updated images:", uploadedImageUrls);

            // Prepare updated data
            const updatedValue = {
                ...value,
                images: uploadedImageUrls
            };
          

            const url = `https://localhost:44340/api/VendorEvent/${id}`;
            const response = await axios.put(url, {
                Id: id,
                VendorId: vendorId,
                EventId: eventId,
                Price: price,
                DishName: dishName,
                images: uploadedImageUrls,
               
            });
            console.log("response", response);
            // Handle success response
            console.log('Update successful:', response.data);
            alert("update Value successfully...!");
            route.push("/vendor/caterer");
            await fetchCaterer();

           

            

        } catch (error) {
            console.log("error");
            //alert("error coming");

        }
    }

   
 

    const handleUpdateClose = async() => {
        setUpdateOpen(false);
        route.push("/vendor/caterer");
         await fetchCaterer();
    };
    const [updateOpen, setUpdateOpen] = useState(false);


    return <>
        <div className={style.buttoncontainer}>
            <Dialog
                className={style.bg2}
                open={updateOpen}
                onClose={handleUpdateClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        console.log(formJson);
                        // handleUpdateSubmit(); // Add your update submit logic here
                    },
                }}
            >
                <DialogTitle className={style.heading}>Update Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Update the details of the caterer.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="dishName"
                        name="dishName"
                        label="Dish Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={dishName}
                        onChange={(e) => setDishName(e.target.value)}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="dishPrice"
                        name="dishPrice"
                        label="Dish Price"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <div>
                        <input
                            type="file"
                            name="images"
                            multiple
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                        {images && images.map((imageUrl, index) => (
                            <img key={index} src={imageUrl} alt={`Image ${index}`} />
                        ))}
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUpdateClose}>Cancel</Button>
                     <Button type="submit" onClick={() => handleUpdateClick(id)}>Update</Button>
                </DialogActions>
            </Dialog>
        </div>
    </>
}

export default UpdateBox;