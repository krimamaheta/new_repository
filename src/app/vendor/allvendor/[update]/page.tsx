"use client"
import axios from "axios";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import style from "./../../vendorStyle.module.css"
import React from "react";

interface vendorCatererModel {
    eventId: "";
    vendorId: "";
    images: any;
    id: "",
    price: "",
    imageurl: string[]
    
      
}

const UpdateDecortor=()=>{
    const params = useParams()
    const id = params.update;
    console.log(id);
    
     
    //get all image what ever uploaded
    const [vendorDecoration, setvendorDecoration] =useState<vendorCatererModel[]>([]);
    const [loading, setLoading] = useState(false)
    //fetch vendorId
    const User = useSelector((state:any) => state.auth.user);
  

    const FetchVendorId = async (userId: any) => {

        try {
            
            var res = await axios.get(`https://localhost:44340/Api/Vendor/getByUserId/${userId}`)
            console.log("res..", res);
            console.log("vendorid", res.data.vendorId);
            return res.data.vendorId;

        } catch (error) {
            console.log("error.....", error);
            alert(error);

        }
    }
   const[page,setPage]=useState(1);
    const[pageSize]=useState(9);
    const fetchDecoration = async (vendorId: any,page:number,pageSize:number) => {
        try {

            setLoading(true)
            const vendorId = await FetchVendorId(User.user.userID);
           //var res = await axios.get(`https://localhost:44340/api/VendorEvent/GetAllByVendorId?vendorId=${vendorId}`)
           var res=await axios.get(`https://localhost:44340/api/VendorEvent/GetAllByVendorId?vendorId=${vendorId}&page=${page}&pageSize=${pageSize}`)
            console.log("vendor id", vendorId);
            console.log("fetch decoration", res);
            setvendorDecoration(res.data);
           
        } catch (error) {
            console.error("error fetching vendor decoration");
            //alert("error to fetch list");
        }
        finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            if (User) {
                const vendorId = await FetchVendorId(User.user.userID);
                if (vendorId) {
                    await fetchDecoration(vendorId,page,pageSize);
                }
            }
        };

        fetchData();
    }, [User,page,pageSize]);

    const [vendorId, setVendorId] = useState("");
    const [ids,setIds] = useState("");
    const [eventId, setEventId] = useState("");
    useEffect(() => {
        if (id && vendorDecoration.length > 0) {
          
            const caterer = vendorDecoration.find(e => e.id === id);
            if (caterer) {
                const { price,images,eventId, vendorId } = caterer;
                //alert(`eventid:${eventId}`);
                setIds(ids);
                setEventId(eventId);
                setPrice(price || '');
                setImages(images || []);
                setVendorId(vendorId);
                setOpen(true); 
            }
        }
    }, [id, vendorDecoration]);

    const route=useRouter();
    const [open, setOpen] = React.useState(false);
    const handleClose = async() => {
        setOpen(false);
        route.push("/vendor/allvendor");
         
    };

    const selectchange = (e: { target: { value: any; }; }) => {
        const { value } = e.target;
        setValue((prevValue) => ({ ...prevValue,eventId: value }));
    };
    
interface FormValue {
    eventId: string;
    vendorId: string;
    Price: string;
    images: string[]; 
}

const [value, setValue] = useState<FormValue>({
    eventId: "",
    vendorId: "",
    Price: "",
    images: [],
    
});


    const [events, setEvents] = useState([]);
   

    const fetchEvent = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://localhost:44340/api/Event/AllEvents");
            setEvents(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching events:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvent();
    }, []);

    const [price, setPrice] = useState("");
    const [images, setImages] = useState("");

    const handleFileChange = (e: any) => {
        if (e.target.files) {
            setValue({ ...value, images: Array.from(e.target.files) });
        }
    };
    
    const ResetValue = () => {
        setValue({
            eventId: "",
            vendorId: "",
            price: "",
            images: []
        });
    };
  
const handleNext = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrevious = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };
    //update
    const handleUpdateClick = async (Id: string) => {
        try {
          
            const cloudinaryUploadPromises = value.images.map(async (image) => {
                const formData = new FormData();
                formData.append("file",image);
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

          
            const updatedValue = {
                ...value,
                images: uploadedImageUrls
            };


            const url = `https://localhost:44340/api/VendorEvent/${id}`;
            const response = await axios.put(url, {
                Id: id,
                VendorId: vendorId,
                EventId:value.eventId,
                Price: price,
                images: uploadedImageUrls,
            });
            console.log("response", response);
            
            console.log('Update successful:', response.data);
            alert("update Value successfully...!")
            await ResetValue();
            route.push("/vendor/allvendor");
        
        } 
        catch (error) {
            console.log("error");
          
        }
    }
    
    return(
        <>
        <div className={style.buttoncontainer}>
                                  
                                    <Dialog
                                        className={style.bg3}
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
                                              
                                            },
                                        }}
                                    >
                                        <DialogTitle className={style.heading}>Update Details</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>

                                            </DialogContentText>
                                           
                                            <label htmlFor="EventName">Event:</label>

                                            <select name="EventName" id="EventName" onChange={selectchange}>
                                                <option value="">Select Event</option>
                                                {loading ? (
                                                    <option disabled>Loading...</option>
                                                ) : (
                                                    events.map((event:any) => (
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
                                                id="DecorationPrice"
                                                name="DecorationPrice"
                                                label="DecorationPrice"
                                                type="text"
                                                fullWidth
                                                variant="standard"
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)}
                                            />
                                            <input
                                                type="file"
                                                name="images"
                                                multiple
                                                onChange={handleFileChange}
                                                accept="image/*"
                                            />

                                            <div>
                                                {images.length > 0 && (
                                                    <div>
                                                        <h3>Selected Images:</h3>
                                                        <ul>
                                                            {Array.from(images).map((image, index) => (
                                                                <li key={index}>{image}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>

                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                            <Button type="submit" onClick={()=>handleUpdateClick(id)}>Update</Button>
                                            
                                        </DialogActions>
                                    </Dialog>
                                   
                                </div>
        </>
    )
}

export default UpdateDecortor;