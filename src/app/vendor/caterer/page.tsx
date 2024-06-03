"use client"
import React, { ChangeEvent, cache, useCallback, useEffect } from "react";
import style from "./../vendorStyle.module.css"
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { headers } from "next/headers";
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Loader from "../../Loader"
import { error } from "console";
import { useRouter } from "next/navigation";
import { logout } from "@/Redux/authslice/authslice";
import { removeToken } from "@/lib/AuthToken";
import { CatererHome } from "@/app/component/dashboard/CatererHome";
import Footer from "@/app/component/footer";

interface Caterer {
    images: any;
    dishName: string;
    price: string;
    eventId: string;
    vendorId: string;

}

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
const Caterer = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<any>(null);
    const [caterers, setCaterer] = useState<Caterer[]>([]);
    const [updateopen, setUpdateOpen] = useState(false);
    const [value, setValue] = useState<VendorEvent>({
        eventId: "",
        vendorId: "",
        price: "",
        dishName: "",
        images: [] as string[],
    });



    const [open, setOpen] = React.useState(false);




    const handleupdateClose = () => {
        setUpdateOpen(false);
    }

    const handleUpdateSubmit = async (event: React.FormEvent<HTMLFormElement>, id: string) => {
        event.preventDefault();

        try {
            const res = await axios.put(`https://localhost:44340/api/VendorEvent/${id}`, value, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (res.status === 200) {
                alert("Update successful!");
            } else {
                alert("Failed to update value");
            }
        } catch (error) {
            console.error("Error updating value:", error);
            alert("Failed to update value");
        }

        console.log(value);
        //handleUpdateClose();
        handleupdateClose();
    };




    //fetch vendor by userId
    const User = useSelector((state: any) => state.auth.user)
    const FetchVendor = async (userId: any) => {
        try {
            const res = await axios.get(`https://localhost:44340/Api/Vendor/getByUserId/${userId}`);
            console.log("resfetchvendor", res);
            console.log("ve id", res.data.vendorId);

            return res.data.vendorId;

        } catch (error) {
            console.log("Error fetching vendor details:", error);
            alert("Failed to fetch vendor details. Please try again later.");
        }
    };

    useEffect(() => {
        fetchEvent();
    }, []);

    const fetchEvent = async () => {
        try {
            setLoading(true);
            //const res1="https://localhost:44340/Api/Event/AllEvent"
            const res = await axios.get("https://localhost:44340/api/Event/AllEvents");
            setEvents(res.data);
            setLoading(false);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };



    const selectchange = (e: any) => {
        setValue({ ...value, eventId: e.target.value });
    };

    const selectFile = (e: { target: { files: any; }; }) => {
        const files = e.target.files;
        // setValue((prevValue) => ({ ...prevValue, images: files }));
        if (files) {
            setValue((prevValue) => ({ ...prevValue, images: Array.from(files) }));
        }
    };


    const addCatering = async () => {
        try {

            const vendorId = await FetchVendor(User.user.userID);
            const formData = new FormData();
            formData.append("eventId", value.eventId);
            formData.append("vendorId", vendorId);
            formData.append("price", value.price);
            formData.append("DishName", value.dishName);

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
                console.log("data", data);
                return data.secure_url;
            });


            const uploadedImageUrls = await Promise.all(cloudinaryUploadPromises);
            console.log("-------------", uploadedImageUrls);

            uploadedImageUrls.forEach(url => {
                formData.append("Images", url);
            });


            console.log("image upload", uploadedImageUrls);
            console.log(uploadedImageUrls[0]);
            console.log("image upload", uploadedImageUrls);
            console.log("First image URL:", uploadedImageUrls[0]);
            console.log("value before state update:", value);
            console.log("value", value);



            const res = await axios.post("https://localhost:44340/api/VendorEvent/AddVendorEvent.", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log("Decoration Added Successfully...............", res.data);
            console.log("response", res);

            if (res.status === 200) {
                console.log("response", res);
                alert(res.data);

                handleClose();
                await fetchCaterer();

            } else {
                //500 error
                alert(res.data);
            }

        } catch (error) {
            console.error("Error while uploading images:", error);
            alert("Failed to add Decoration value. Please try again later.");
        }
    };

    //caterer list
    //fetch vendorId
    const [vendorCaterer, setVendorCaterer] = useState<vendorCatererModel[]>([]);
    const [dishName, setDishName] = useState("");
    const [price, setPrice] = useState("");
    const [images, setImages] = useState<File[]>([]);
    const [vendorId, setVendorId] = useState("");
    const [eventId, setEventId] = useState("");
    const [id, setId] = useState("");

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

    
    const onClick1 = async (e: any) => {
        setLoading(true)
        setEvents(e.target.event);
        setTimeout(async () => {
            try {
                await fetchCaterer();
            } catch (error) {
                console.log("Error fetching vendor Catering:", error);
                alert("fail to fetch")

            } finally {
                setLoading(false)
            }

        }, 1000)


    }

    const userId=User?.user?.userID;
    useEffect(() => {
        if (User&& User.user && User.user.userID) {
            FetchVendorId(User.user.userID).then(vendorId => {
                if (vendorId) {
                    fetchCaterer(vendorId);
                }
            });
        }
    }, [User]);

    //delete  details api
    const DeleteDetails = async (Id: string) => {
        if (window.confirm("Are you sure you want to delete this Vendor Decoration?")) {
            try {
                const res = await axios.delete(`https://localhost:44340/api/VendorEvent/Delete/${Id}`);
                console.log("response", res);
                if (res.status === 200) {
                    console.log("response", res.data);
                    alert("Vendor Event deleted successfully");

                    await fetchCaterer();
                    return res.data;
                } else {

                    console.error("Unexpected status code:", res.status);
                    alert("Failed to delete Vendor Event: Unexpected status code");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Failed to delete Vendor Event");
                throw error;
            }
        }
    };

   

    const handleUpdateOpen = (id: String) => {
       
        route.push(`/vendor/caterer/${id}`)


    }

    const selectFile2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files: FileList | null = event.target.files;

        if (files) {
            const selectedFiles: File[] = Array.from(files);
            const imageUrls: string[] = selectedFiles.map(file => URL.createObjectURL(file));
            setImages(imageUrls);
        }
    };



    
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
            //alert("image upload sucessfully...!");

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
            handleupdateClose();
            // setValue({
            //     eventId:"",
            //     vendorId:"",
            //     dishName:"",
            //     price: "",
            //     images: []
            // });
            await fetchCaterer();

          

        } catch (error) {
            console.log("error");
            //alert("error coming");

        }
    }
    interface VendorEvent {
        id: string
        eventId: string;
        vendorId: string;
        dishName: string;
        price: string;
        images: File[];
    }


    const handleFileChange = (e: { target: { files: any; }; }) => {
        const files = e.target.files;

        if (files) {
            setValue((prevValue) => ({ ...prevValue, images: Array.from(files) }));
        }

    };


    const dispatch = useDispatch();
    const route = useRouter();

    const handlelogout = async () => {
        await removeToken();
        dispatch(logout());
        route.push("/landingpage");
    }

    return (
        
        <div>
            <div><CatererHome/></div>
            <div className={style.left}>
                <button className={style.b2} onClick={() => setOpen(true)}>
                    Add Catering
                </button>
                <Dialog open={open} onClose={handleClose} className={style.bg}>
                    <DialogTitle className={style.heading}>Add Catering</DialogTitle>
                    <DialogContent className={style.bg1}>
                        <DialogContentText>

                        </DialogContentText>
                        <label>Select Event</label>
                        <select
                            autoFocus
                            required
                            id="name"
                            name="event"
                            onChange={selectchange}
                            style={{ width: "40%" }}
                        >
                            <option value="">Select Event:</option>
                            {loading ? (
                                <option disabled>Loading...</option>
                            ) : (
                                events?.map((event: any) => (
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
                            id="DishName"
                            name="DishName"
                            label="DishName"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={value.dishName}
                            onChange={(e) =>
                                setValue((prevValue) => ({
                                    ...prevValue,
                                    dishName: e.target.value,
                                }))
                            }
                        />

                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="DishPrice"
                            name="DishPrice"
                            label="DishPrice"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={value.price}
                            onChange={(e) =>
                                setValue((prevValue) => ({
                                    ...prevValue,
                                    price: e.target.value,
                                }))
                            }
                        />
                        <input
                            type="file"
                            name="images"
                            multiple
                            onChange={selectFile}
                            accept="image/*"
                        />
                    </DialogContent>
                    <DialogActions className={style.bg1}>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={addCatering}>Add</Button>
                    </DialogActions>
                </Dialog>
               
                <button className={style.logoutbtn} onClick={handlelogout}>Logout</button>

            </div>


            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                {loading ? (<div><Loader /></div>) : vendorCaterer.map((event: vendorCatererModel, index: number) => (
                    <Grid item xs={2} sm={4} md={4} key={index} style={{ padding: '2rem 5rem', margin: '2rem 0' }}>
                        <Card>
                            <CardContent>

                                {event.images.map((imageUrl: string, imageIndex: number) => (
                                    <img key={imageIndex} src={imageUrl} alt="vendorDecorationImage" style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                                ))}

                                <div className={style.details}>

                                    {/* <div className={style.details1}>Id:{event.id}</div>
                                <div className={style.details1}>EventId:{event.eventId}</div> */}
                                    {/* <div className={style.details1}>FirmName:{event.firmName}</div>
                                <div className={style.details1}>CityName:{event.cityName}</div>
                                <div className={style.details1}>FirmAddress:{event.address}</div>
                                <div className={style.details1}>District:{event.district}</div>
                                <div className={style.details1}>Websiteurl:{event.websiteUrl}</div>
                                <div className={style.details1}>EventName:{event.eventName}</div> */}
                                    <div className={style.details1}>DishName:{event.dishName}</div>
                                    <div className={style.details1}>DishPrice:{event.price}</div>
                                </div>

                                <div className={style.buttoncontainer}>
                                    <button className={style.button} onClick={() => handleUpdateOpen(event.id)}>Update</button>
                                    {["hello"].map((e, i) => {
                                        // console.log("renderedd.....")
                                        return null;
                                    })}
                                
                                    <button onClick={() => DeleteDetails(event.id)} className={style.button}>Remove</button>

                                </div>
                            </CardContent>
                        </Card>

                    </Grid>
                ))}
            </Grid>
            <Footer/>
        </div>
    );
};

export default Caterer;