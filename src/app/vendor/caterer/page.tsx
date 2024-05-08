"use client"
import React, { cache, useEffect } from "react";
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
import { useSelector } from "react-redux";
import { headers } from "next/headers";

// interface Event {
//     eventId: string,
//     eventName: string,
// }
// interface FormValue {
//     eventId: string,
//     vendorId: string,
//     price: string,
//     images: string[],
//     DishName: string,
// }
// const Caterer = () => {

//     const [events, setEvents] = useState<Event[]>([]);
//     const [Loading, setloading] = useState<boolean>(false);
//     const [selectedEvent, setSelectedEvent] = useState<string>("");

//     useEffect(() => {
//         FetchEvent();
//     }, []);

//     const FetchEvent = async () => {
//         try {
//             setloading(true);
//             var res = await axios.get("https://localhost:44340/Api/Event/AllEvent");
//             setEvents(res.data);
//             setloading(false);

//         } catch (error) {
//             console.log("error", error)
//         }
//     }




//     const [open, setOpen] = React.useState(false);

//     const handleClickOpen = () => {
//         setOpen(true);
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };


//add process

// const [value, setValue] = useState<FormValue>({
//     eventId: "",
//     vendorId: "",
//     price: "",
//     DishName: "",
//     images: []

// })
// //fetch vendor by userId
// const User = useSelector((state) => state.auth.user)
// const FetchVendor = async (userId: any) => {
//     try {
//         const res = await axios.get(`https://localhost:44340/Api/Vendor/getByUserId/${userId}`);
//         return res.data.vendorId;
//     } catch (error) {
//         console.log("Error fetching vendor details:", error);
//         alert("Failed to fetch vendor details. Please try again later.");
//     }
// };

// // const selectChange = (e: { target: { value: any; } }) => {
// //     const { value } = e.target;
// //     setValue((pre) => ({ ...pre, eventId: value }))
// // }

// const selectChange = (e: React.ChangeEvent<{ value: unknown }>) => {
//     setSelectedEvent(e.target.value as string);
//   };

//   const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (files) {
//         const fileArray = Array.from(files);
//         setValue((prevValue) => ({ ...prevValue, images: fileArray }));
//     }
// };
// const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (files) {
//         const fileArray = Array.from(files);
//         const fileURLs = fileArray.map(file => URL.createObjectURL(file)); // Convert each File object to a URL
//         setValue((prevValue) => ({ ...prevValue, images: fileURLs }));
//     }
// };

//   const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (files) {
//         const fileArray = Array.from(files);
//         const fileURLs = fileArray.map(file => URL.createObjectURL(file)); // Convert each File object to a URL
//         setValue((prevValue) => ({ ...prevValue, images: fileURLs }));
//     }
// };
// const selectFile = (e: { target: { files: any; } }) => {
//     const files = e.target.files
//     if (files) {
//         setValue((prevalue) => ({ ...prevalue, images: Array.from(files) }))
//     }
// }


//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (files) {
//       setValue((prevState) => ({ ...prevState, images: Array.from(files) }));
//     }
//   };

//    const AddCatering=async()=> {
//         try {
//             debugger
//             var vendorId = await FetchVendor(User.user.userID);
//             console.log("vendor ID:", vendorId);
//             const formdata = new FormData();
//             formdata.append("eventId", value.eventId);
//             formdata.append("vendorId", vendorId);
//             formdata.append("DishName", value.DishName);
//             formdata.append("price", value.price);

//             const cloudinaryUploadPromises = value.images.map(async (image) => {
//                 const formdata = new FormData();
//                 formdata.append("file", image);
//                 //formData.append("Images",image)
//                 formdata.append("upload_preset", "unsign_upload1");
//                 formdata.append("cloud_name", "dqtsmfpvb");

//                 const response = await fetch(
//                     "https://api.cloudinary.com/v1_1/dqtsmfpvb/image/upload",
//                     {
//                         method: "POST",
//                         body: formdata,
//                     }
//                 );
//                 const data = await response.json();
//                 console.log("data", data);
//                 return data.secure_url;
//             });

//             // Wait for all the Cloudinary upload promises to resolve
//             const uploadedImageUrls = await Promise.all(cloudinaryUploadPromises);
//             console.log("-------------", uploadedImageUrls);

//             // value.images.forEach((image) => {
//             //     formdata.append("Images", image);
//             // });

//             uploadedImageUrls.forEach(url => {
//                 formdata.append("Images", url);
//             });

//             console.log("image upload", uploadedImageUrls);
//             console.log(uploadedImageUrls[0]);
//             console.log("image upload", uploadedImageUrls); // Log uploadedImageUrls to verify the array of URLs
//             console.log("First image URL:", uploadedImageUrls[0]); // Log the first image URL for debugging
//             console.log("value before state update:", value);
//             console.log("value", value);



//             const res = await axios.post("https://localhost:44340/api/VendorEvent/AddVendorEvent.", formdata, {
//                 headers: {
//                     "Content-Type": "multipart/form-data"
//                 }
//             });
//             console.log("Decoration Added Successfully...............", res.data);
//             if (res.status === 200) {
//                 console.log("response", res);
//                 alert(res.data);
//                 setValue({
//                     eventId: "",
//                     vendorId: "",
//                     price: "",
//                     DishName: "",
//                     images: [],
//                 });
//             } else {
//                 //500 error
//                 alert(res.data);
//             }



//         } catch (error) {
//             console.error("Error while uploading images:", error);
//             alert("Failed to add Decoration value. Please try again later.");
//         }
//     }

// const AddCatering = async () => {
//     try {
//         debugger
//         var vendorId = await FetchVendor(User.user.userID);
//         console.log("vendor ID:", vendorId);
//         const formdata = new FormData();
//         formdata.append("eventId", value.eventId);
//         formdata.append("vendorId", vendorId);
//         formdata.append("DishName", value.DishName);
//         formdata.append("price", value.price);

//         const cloudinaryUploadPromises = value.images.map(async (image) => {
//             // const file = await fetch(imageURL).then(response => response.blob()); // Fetch file content from URL
//             // console.log({file});
//             console.log({image});


//             formdata.append("file",image);
//             formdata.append("upload_preset", "unsign_upload");
//             formdata.append("cloud_name", "dqtsmfpvb");

//             const response = await fetch(
//                 "https://api.cloudinary.com/v1_1/dqtsmfpvb/image/upload",
//                 {
//                     method: "POST",
//                     body: formdata,
//                 }
//             );
//             if (!response.ok) {
//                 throw new Error(`Failed to upload image: ${response.statusText}`);
//             }
//             const data = await response.json();
//             console.log("data", data);
//             return data.secure_url;
//         });

//         // Wait for all the Cloudinary upload promises to resolve
//         const uploadedImageUrls = await Promise.all(cloudinaryUploadPromises);
//         console.log("-------------", uploadedImageUrls);

//         uploadedImageUrls.forEach(url => {
//             formdata.append("Images", url);
//         });

//         console.log("image upload", uploadedImageUrls);
//         console.log(uploadedImageUrls[0]);
//         console.log("image upload", uploadedImageUrls);
//         console.log("First image URL:", uploadedImageUrls[0]);
//         console.log("value before state update:", value);
//         console.log("value", value);

//         console.log({formdata});


//         const res = await axios.post("https://localhost:44340/api/VendorEvent/AddVendorEvent.", formdata, {
//             headers: {
//                 "Content-Type": "multipart/form-data"
//             }
//         });
//         console.log("response",res);
//         console.log("Caterer Added value Successfully...............", res.data);
//         if (res.status === 200) {
//             console.log("response", res);
//             alert(res.data);
//             setValue({
//                 eventId:"",
//                 vendorId:"",
//                 DishName:"",
//                 images: [],
//                 price: ""
//             });
//         } else {
//             // 500 error
//             console.log("Error:", res.data);
//             alert("Failed to add Decoration value. Please try again later.");
//         }
//     } catch (error) {
//         console.error("Error while uploading images:", error);
//         alert("Failed to add Caterer value. Please try again later.");
//     }
// };
//     const AddCatering = async () => {
//         try {
//             // Fetch vendorId
//             debugger
//             const vendorId = await FetchVendor(User.user.userID);
//             console.log("vendorId",vendorId);


//             // Prepare the data for the request
//             const requestData = {
//                 VendorId: vendorId,
//                 EventId: value.eventId,
//                 Price: value.price,
//                 DishName: value.DishName,
//                 Images: value.images // Assuming value.images is an array of image URLs
//             };

//             // Send the data to the backend
//             const response = await axios.post("https://localhost:44340/api/VendorEvent/AddVendorEvent.", requestData);
//             console.log("response",response);

//             // Handle the response from the backend
//             if (response.status === 200) {
//                 // Reset form values after successful submission
//                 setValue({
//                     eventId: "",
//                     vendorId: "",
//                     price: "",
//                     DishName: "",
//                     images: [],
//                 });
//                 alert("Catering added successfully!");
//             } else {
//                 alert("Failed to add catering. Please try again later.");
//             }
//         } catch (error) {
//             console.error("Error while adding catering:", error);
//             alert("Failed to add catering. Please try again later.");
//         }
//     };

//     return (
//         <div>
//             <p className={style.left}>
//                 <button className={style.b2} onClick={handleClickOpen}>AddCatering</button>
//                 <Dialog className={style.bg}
//                     open={open}
//                     onClose={handleClose}
//                     PaperProps={{
//                         component: 'form',
//                         // onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
//                         //     event.preventDefault();
//                         //     const formData = new FormData(event.currentTarget);
//                         //     const formJson = Object.fromEntries((formData as any).entries());
//                         //     const email = formJson.email;
//                         //     console.log(email);
//                         //     handleClose();
//                         // },
//                     }}
//                 >
//                     <DialogTitle className={style.heading} >AddCatering</DialogTitle>
//                     <DialogContent className={style.bg1}>
//                         <DialogContentText>
//                             {/* To subscribe to this website, please enter your email address here. We
//                             will send updates occasionally. */}
//                         </DialogContentText>
//                         <label>SelectEvent</label>
//                         <select
//                             autoFocus
//                             required
//                             id="name"
//                             name="event"

//                             onChange={selectChange}
//                             style={{ width: '40%' }}
//                         // eslint-disable-next-line react/jsx-no-duplicate-props

//                         >
//                             <option value="">Select Event:</option>
//                             {Loading ? (
//                                 <option disabled>Loading...</option>
//                             ) : (
//                                 events.map((event) => (
//                                     <option key={event.eventId} value={event.eventId}>
//                                         {event.eventName}
//                                     </option>
//                                 ))
//                             )}
//                         </select>
//                         <TextField
//                             autoFocus
//                             required
//                             margin="dense"
//                             id="DishName"
//                             name="DishName"
//                             label="DishName"
//                             type="text"
//                             fullWidth
//                             variant="standard"
//                             value={value.DishName}
//                             onChange={(e) => setValue((prevalue) => ({ ...prevalue, DishName: e.target.value }))}
//                         />
//                         <TextField
//                             autoFocus
//                             required
//                             margin="dense"
//                             id="UploadImage"
//                             name="UploadImage"
//                             label="UploadImage"
//                             type="file"
//                             fullWidth
//                             variant="standard"
//                             onChange={selectFile}
//                         />
//                         {/* <div>
//                             <label htmlFor="ImageUrl">UploadImage:</label>
//                             <input type="file" name="images" multiple onChange={selectFile} />
//                         </div> */}
//                         <TextField
//                             autoFocus
//                             required
//                             margin="dense"
//                             id="DishPrice"
//                             name="DishPrice"
//                             label="DishPrice"
//                             type="text"
//                             fullWidth
//                             variant="standard"
//                             value={value.price}
//                             onChange={(e) => setValue((prevalue) => ({ ...prevalue, price: e.target.value }))}
//                         />
//                     </DialogContent>
//                     <DialogActions className={style.bg1} >
//                         <Button onClick={handleClose}>Cancel</Button>
//                         <Button type="submit" onClick={AddCatering}>Add</Button>
//                     </DialogActions>
//                 </Dialog>
//                 <button className={style.b2} >CateringList</button>
//             </p>

//         </div>
//     )
// }

// export default Caterer;
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Loader from "../../Loader"
import { error } from "console";
interface vendorCatererModel {

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
    dishName: ""
}
const Caterer = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState("");
    //const [open, setOpen] = useState(false);
    const [value, setValue] = useState({
        eventId: "",
        vendorId: "",
        price: "",
        dishName: "",
        images: [] as string[],
    });


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpen1 = () => {
        setOpen(true);
    };


    //fetch vendor by userId
    const User = useSelector((state) => state.auth.user)
    const FetchVendor = async (userId: any) => {
        try {
            const res = await axios.get(`https://localhost:44340/Api/Vendor/getByUserId/${userId}`);
            console.log("resfetchvendor", res);

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
            const res = await axios.get("https://localhost:44340/Api/Event/AllEvent");
            setEvents(res.data); // Update events state with fetched data
            setLoading(false);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const selectChange = (e) => {
    //   setSelectedEvent(e.target.value);
    // };


    //   const selectchange = (e: { target: { value: any; }; }) => {
    //     const { value } = e.target;
    //     setValue((prevValue) => ({ ...prevValue, eventId: value }));
    //   };

    // const selectFile = (e) => {
    //   const files = e.target.files;
    //   if (files) {
    //     setValue((prevValue) => ({
    //       ...prevValue,
    //       images: Array.from(files),
    //     }));
    //   }
    // };

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

    //   const selectFile = (e:any) => {
    //     setValue({ ...value, images: e.target.files }); // Store selected files in state
    // };
    // const selectFile = (e) => {
    //     const files = e.target.files;
    //     console.log("Selected files:", files); // Check if files are correctly captured
    //     if (files) {
    //       setValue({ ...value, images: files }); // Update state with selected files
    //     }
    //   };




    // const addCatering = async () => {
    //     try {
    //       const vendorId = await FetchVendor(User.user.userID);
    //       const formData = new FormData();
    //       formData.append('VendorId', vendorId);
    //       formData.append('EventId', value.eventId);
    //       formData.append('Price', value.price);
    //       formData.append('DishName', value.dishName);

    //       // Append selected images to FormData
    //       for (let i = 0; i < value.images.length; i++) {
    //         formData.append('Images',value.images[i]);
    //       }

    //       console.log(formData);


    //       const response = await axios.post(
    //         "https://localhost:44340/api/VendorEvent/AddVendorEvent.",
    //         formData,
    //         {
    //           headers: {
    //             "Content-Type": "multipart/form-data"
    //           }
    //         }
    //       );
    //       console.log("response",response);

    //       if (response.status === 200) {
    //         setValue({
    //           eventId: "",
    //           price: "",
    //           dishName: "",
    //           images: [],
    //         });
    //         alert("Catering added successfully!");
    //       } else {
    //         alert("Failed to add catering. Please try again later.");
    //       }
    //     } catch (error) {
    //       console.error("Error while adding catering:", error);
    //       alert("Failed to add catering. Please try again later.");
    //     }
    //   };


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
                //formData.append("Images",image)
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

            // Wait for all the Cloudinary upload promises to resolve
            const uploadedImageUrls = await Promise.all(cloudinaryUploadPromises);
            console.log("-------------", uploadedImageUrls);

            uploadedImageUrls.forEach(url => {
                formData.append("Images", url);
            });

            // formData.append("Images",value.images[0]);
            console.log("image upload", uploadedImageUrls);
            console.log(uploadedImageUrls[0]);
            console.log("image upload", uploadedImageUrls); // Log uploadedImageUrls to verify the array of URLs
            console.log("First image URL:", uploadedImageUrls[0]); // Log the first image URL for debugging
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
                setValue({
                    eventId: "",
                    price: "",
                    images: [],
                    dishName: ""
                });

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


    const fetchCaterer = async (vendorId: string) => {
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
    const onClick1 = async (e) => {

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

        //route.push("/vendor/allvendor/list");
    }

    //delete  details api
    const DeleteDetails = async (Id: string, vendorId: string) => {
        if (window.confirm("Are you sure you want to delete this Vendor Decoration?")) {
            try {
                const res = await axios.delete(`https://localhost:44340/api/VendorEvent/${Id}`);
                console.log("response", res);
                if (res.status === 200) {
                    console.log("response", res.data);
                    alert("Vendor Event deleted successfully");
                    await fetchCaterer(vendorId);
                    return res.data;
                } else {
                    // Handle unexpected status codes
                    console.error("Unexpected status code:", res.status);
                    alert("Failed to delete Vendor Event: Unexpected status code");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Failed to delete Vendor Event");
                throw error; // Optionally rethrow the error to handle it elsewhere
            }
        }
    };



    // const addCatering = async () => {
    //     try {
    //       const vendorId = await FetchVendorId(User.user.userID);
    //       const requestData = {
    //         VendorId: vendorId,
    //         EventId: value.eventId,
    //         Price: value.price,
    //         DishName: value.dishName,
    //         Images: value.images,
    //       };
    //       const response = await axios.post(
    //         "https://localhost:44340/api/VendorEvent/AddVendorEvent.",
    //         requestData,{
    //             headers:{
    //                 "Content-Type":"multipart/form-data"
    //             }
    //         }
    //       );
    //       if (response.status === 200) {
    //         setValue({
    //           eventId: "",
    //           price: "",
    //           dishName: "",
    //           images: [],
    //         });
    //         alert("Catering added successfully!");
    //       } else {
    //         alert("Failed to add catering. Please try again later.");
    //       }
    //     } catch (error) {
    //       console.error("Error while adding catering:", error);
    //       alert("Failed to add catering. Please try again later.");
    //     }
    //   };


    // const fetchCaterer = async (vendorId:any) => {
    //     try {

    //         debugger
    //         setLoading(true)
    //         const vendorId = await FetchVendorId(User.user.userID);
    //         // var res = await axios.get("https://localhost:44340/api/VendorEvent/List");
    //         var res = await axios.get(`https://localhost:44340/api/VendorEvent/GetAllByVendorId?vendorId=${vendorId}`)
    //         console.log("vendor id",vendorId);
    //         console.log("response", res);
    //         setVendorCaterer(res.data);
    //     } catch (error) {
    //         console.error("error fetching vendor Catering");
    //         alert("error to fetch list");
    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // }
    // const CatererList = async (e) => {
    //     setLoading(true)
    //     setEvents(e.target.event);
    //     setTimeout(async () => {
    //         await fetchCaterer();
    //         setLoading(false);

    //     }, 1000)

    //     //route.push("/vendor/allvendor/list");
    // }




    return (
        <div>
            <p className={style.left}>
                <button className={style.b2} onClick={() => setOpen(true)}>
                    Add Catering
                </button>
                <Dialog open={open} onClose={handleClose} className={style.bg}>
                    <DialogTitle className={style.heading}>Add Catering</DialogTitle>
                    <DialogContent className={style.bg1}>
                        <DialogContentText>
                            {/* To subscribe to this website, please enter your email address here. We
                will send updates occasionally. */}
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
                                events?.map((event) => (
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
                <button className={style.b2} onClick={onClick1}>CateringList</button>

            </p>


            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                {loading ? (<div><Loader /></div>) : vendorCaterer.map((event: vendorCatererModel, index: number) => (
                    <Grid item xs={2} sm={4} md={4} key={index} style={{ padding: '2rem 5rem', margin: '2rem 0' }}>
                        <Card>
                            <CardContent>

                                {event.images.map((imageUrl: string, imageIndex: number) => (
                                    <img key={imageIndex} src={imageUrl} alt="vendorDecorationImage" style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                                ))}
                                {/* <Typography variant="h6" gutterBottom>
                                    DecorationPrice:{event.price}
                                </Typography> */}
                                <div className={style.details}>

                                    <div className={style.details1}>Id:{event.id}</div>
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
                                    <button className={style.button} onClick={handleClickOpen1}>Update</button>

                                    <Dialog
                                        className={style.bg2}
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
                                        <DialogTitle className={style.heading}>Update Details</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                               
                                            </DialogContentText>
                                            <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="name"
                                                name="dishName"
                                                label="DishName"
                                                type="text"
                                                fullWidth
                                                variant="standard"
                                            />
                                            <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="name"
                                                name="dishPrice"
                                                label="DishPrice"
                                                type="text"
                                                fullWidth
                                                variant="standard"
                                            />
                                            <input
                                                type="file"
                                                name="images"
                                                multiple
                                                onChange={selectFile}
                                                accept="image/*"
                                            />

                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Cancel</Button>
                                            <Button type="submit">Update</Button>
                                        </DialogActions>
                                    </Dialog>
                                    <button onClick={() => DeleteDetails(event.id)} className={style.button}>Remove</button>

                                </div>
                            </CardContent>
                        </Card>

                    </Grid>
                ))}
            </Grid>








        </div>
    );
};

export default Caterer;