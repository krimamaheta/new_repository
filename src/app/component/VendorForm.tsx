"use client"
import React, { useEffect, useState } from "react";
import Style from "./../vendor/vendorStyle.module.css"
import { UseSelector, useDispatch, useSelector } from "react-redux";
import style from "./../vendor/vendorStyle.module.css"
import { useRouter } from "next/navigation";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Loader from "../Loader";
import { debug } from "console";
import { logout } from "@/Redux/authslice/authslice";
import { useDecorationPrice } from "@/context/DecorationPrice";
import { removeToken } from "@/lib/AuthToken";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import * as signalR from "@microsoft/signalr";

//user side vendor
const VendorForm: React.FC = () => {
    
    const route = useRouter();
    const [value, setValue] = useState({
        vendorId: "",
        userId: "",
        WebsiteUrl: "",
        Address: "",
        District: "",
        CityName: "",
        FirmName: "",
        TypeOfvendor: ""
    });

    const [open, setOpen] = React.useState(false);
    const [vendorId, setVendorId] = useState(null);
    const [typeOfVendor, setTypeOfVendor] = useState(null);

    const handleClickOpen1 = () => {
        setOpen(true);
    };

    const [vendorTypes, setVendorTypes] = useState<string[]>([])
    useEffect(() => {
        const fetchVendorTypes = async () => {
            try {
                const res = await axios.get("https://localhost:44340/Api/Vendor/alltype");
                setVendorTypes(res.data);
            } catch (error) {
                console.error("Error fetching vendor types:", error);
            }
        };

        fetchVendorTypes(); 

    }, []);
    const User = useSelector((state:any) => state.auth.user);
    console.log(User);

    //add vendor
   
    const [isApproved, setIsApproved] = useState(false);
    
        const approveVendor = async () => {
            try {
              
               const url=`https://localhost:44340/api/Notification`
                const response = await axios.get(url);
        
                if (response.status >= 200 && response.status < 300) {
                    const message = response.data;
                    console.log("Approval message:", message);
                    alert("approve");
                    alert(message);
                }
            } catch (error) {
                console.error("Error in approveVendor:", error);
            }
        };
        const AdminApprove= async (vendorId:string) => {
            try {
                debugger    
                const url = `https://localhost:44340/Api/Notification/ApproveVendor/${vendorId}`;
              //const url=`https://localhost:44340/api/Notification`
                const response = await axios.get(url);
        
                if (response.status >= 200 && response.status < 300) {
                    const message = response.data;
                    console.log("Approval message:", message);
                    alert("approve");
                    alert(message);
                }
            } catch (error) {
                console.error("Error in approveVendor:", error);
            }
        };

    const handleSubmit = async () => {
        try {
            debugger
            const userId = User.user.userID;
            console.log(userId);

           const url = `https://localhost:44340/Api/Vendor/AddVendor/${userId}`;
         
            setValue({ ...value, userId: userId })
            const response = await axios.post(url, value, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status >= 200 && response.status < 300) {
                const data = response.data;
                console.log("---------------", data);
                //alert(response.data.message)
                alert("Added value successfully and please check your email");

                console.log("vendor details..", data);
                console.log("vendorid.......", data.vendorId);
                setValue({ ...value, vendorId: data.vendorId });
                console.log("vendor details..123", data);

               

                //wait for approval
                setVendorId(data.vendorId);
                console.log("vendorid",data.vendorId);

                setTypeOfVendor(data.typeOfVendor);
                console.log("typeofvendor",data.typeOfVendor);

                
                

            } else {
                // Handle other HTTP errors
                console.error("Failed to add value:", response.statusText);
                alert("Failed to add value. Please try again later.");
            }
        } catch (error) {
           
            console.error("Error:", error);
            alert("An error occurred during adding value.");
        }
    }

    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setValue(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div className={Style.container}>
            <div className={Style.card}>
                <div className={Style.heading}>
                    <h2>Welcome to Our Website</h2>
                </div>

                <div className={Style.inputgroup}>
                    <label htmlFor="WebsiteUrl">Your Website URL:</label>
                    <input type="text" name="WebsiteUrl" id="WebsiteUrl" value={value.WebsiteUrl} onChange={handleChange} />
                </div>
                <div className={Style.inputgroup}>
                    <label htmlFor="Address">Address:</label>
                    <input type="text" name="Address" id="Address" value={value.Address} onChange={handleChange} />
                </div>
                <div className={Style.inputgroup}>
                    <label htmlFor="District">District</label>
                    <input type="text" name="District" id="District" value={value.District} onChange={handleChange} />
                    {/* <select name="District" id="District" value={value.District} onChange={handleChange}>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Rajsthan">Rajsthan</option>
                        <option value="Taminnadu">Taminnadu</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttrakhand">Uttrakhand</option>
                        <option value="AndhraPradesh">AndhraPradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="DadraNagarHaveli">DadraNagarHaveli</option>
                        <option value="Bihar">Bihar</option>
                        <option value="DamanandDiu">DamanandDiu</option>
                        <option value="Goa">Goa</option>
                        <option value="Hriyana">Hriyana</option>
                        <option value="JammuKashmir">JammuKashmir</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Ladakh">Ladakh</option>
                        <option value="madhyaPradesh">madhyaPradesh</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Mizoram"> Mizoram</option>
                        <option value="AndmanAndNicobarIslands">AndmanAndNicobarIslands</option>
                        <option value="Odissa">Odissa</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Telangana">Telangana</option>
                        <option value="UtterPradesh">UtterPradesh</option>
                        <option value="westBengal">westBengal</option>
                        <option value="ArunachalPradesh">ArunachalPradesh</option>
                        <option value="Chattishgarh">Chattishgarh</option>
                        <option value="Delhi">Delhi</option>
                        <option value="HimachalPradesh">HimachalPradesh</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Lakshdweep">Lakshdweep</option>
                        <option value="Maharastra">Maharastra</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Puducherry">Puducherry</option>
                        
                        
                    </select> */}
                </div>
                <div className={Style.inputgroup}>
                    <label htmlFor="CityName">City Name:</label>
                    <input type="text" name="CityName" id="CityName" value={value.CityName} onChange={handleChange} />
                </div>
                <div className={Style.inputgroup}>
                    <label htmlFor="FirmName">Firm Name:</label>
                    <input type="text" name="FirmName" id="FirmName" value={value.FirmName} onChange={handleChange} />
                </div>
                <div className={Style.inputgroup}>
                    <label htmlFor="TypeOfvendor">Type of Vendor:</label>
                    <select name="TypeOfvendor" id="TypeOfvendor" value={value.TypeOfvendor} onChange={handleChange}>
                        <option value="">Select Type</option>
                        {vendorTypes.map((vendorType, index) => (
                            <option key={index} value={vendorType}>{vendorType}</option>
                        ))}
                    </select>
                </div>
                <div className={Style.buttongroup}>
                     
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default VendorForm;

interface vendordecorationModel {
    images: any;
    id: "",
    price: "",
    imageurl: string[]
    eventName: "",
    firmName: "",
    cityName: "",
    address: "",
    websiteUrl: "",
    district: ""

}

interface vendorDecoratorModel {
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
    dishName: ""
}

interface FormValue {
    eventId: string;
    vendorId: string;
    Price: string;
    images: string[]; 
}

export const GetAllVendor: React.FC = () => {
   
    const route = useRouter();
    const [loading, setLoading] = useState(false)
    const [event, setEvent] = useState("");

    const onClick = (e:any) => {
        setEvent(e.target.event);
        route.push("allvendor/addDecoration");

    }


    const [open, setOpen] = React.useState(false);
    const [id, setId] = useState("");
    const [eventId, setEventId] = useState("");
    const [images, setImages] = useState("");
    const [vendorId, setVendorId] = useState("");



    const [vendorDecorator, setVendorDecorator] = useState<vendorDecoratorModel[]>([]);
    const handleClickOpen1 = (id: string) => {
      
        route.push(`/vendor/allvendor/${id}`);

    };

    const handleClose = () => {
        setOpen(false);
    };

    
    //get all image what ever uploaded
    const [vendorDecoration, setvendorDecoration] = useState([]);

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

    const fetchDecoration = async (vendorId: any) => {
        try {

            setLoading(true)
            const vendorId = await FetchVendorId(User.user.userID);
           
            var res = await axios.get(`https://localhost:44340/api/VendorEvent/GetAllByVendorId?vendorId=${vendorId}`)
            console.log("vendor id", vendorId);
            console.log("fetch decoration", res);
            setvendorDecoration(res.data);
            setVendorDecorator(res.data);
        } catch (error) {
            console.error("error fetching vendor decoration");
            alert("error to fetch list");
        }
        finally {
            setLoading(false);
        }
    }

    const onClick1 = async (e:any) => {
        setLoading(true)
        setEvent(e.target.event);
        setTimeout(async () => {
            await fetchDecoration(vendorId);
            setLoading(false);

        }, 1000)

       
    }


    
    const DeleteDetails:any = async (Id: string, vendorId: string) => {
        if (window.confirm("Are you sure you want to delete this Vendor Decoration?")) {
            try {

                const res = await axios.delete(`https://localhost:44340/api/VendorEvent/Delete/${Id}`);
                console.log("response",res);
                if (res.status === 200) {
                    console.log("response", res.data);
                    alert("Vendor Event deleted successfully");
                    await fetchDecoration(vendorId);
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
    const [value, setValue] = useState<FormValue>({
        eventId: "",
        vendorId: "",
        Price: "",
        images: [],
        
    });

    useEffect(() => {
        fetchEvent();
    }, []);

    const selectchange = (e: { target: { value: any; }; }) => {
        const { value } = e.target;
        setValue((prevValue) => ({ ...prevValue, eventId: value }));
    };

    const dispatch = useDispatch();


    const handlelogout =async () => {
        await removeToken();
        dispatch(logout());
        route.push("/landingpage");
    }

    const [price, setPrice] = useState("");
   

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
            await fetchDecoration(vendorId);
            
           

        } catch (error) {
            console.log("error");
          
        }
    }


    //get all list
    useEffect(() => {
        const fetchData = async () => {
            if (User) {
                const vendorId = await FetchVendorId(User.user.userID);
                if (vendorId) {
                    await fetchDecoration(vendorId);
                }
            }
        };

        fetchData();
    }, [User]);
    

    return (
        <div>


            <p className={Style.left}>
                <button className={style.b2} onClick={onClick}>AddDecoration</button>
                <button className={style.b2} onClick={handlelogout}>Logout</button>
            </p>

           

            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                {loading ? (<div><Loader /></div>) : vendorDecoration.map((event: vendordecorationModel, index: number) => (
                    <Grid item xs={2} sm={4} md={4} key={index} style={{ padding: '2rem 5rem', margin: '2rem 0' }}>
                        <Card>
                            <CardContent>

                                {event.images.map((imageUrl: string, imageIndex: number) => (
                                    <img key={imageIndex} src={imageUrl} alt="vendorDecorationImage" style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                                ))}
                               
                                <div className={style.details}>
                                    <div className={style.details1}>EventName:{event.eventName}</div>
                                    <div className={style.details1}>Rs.{event.price}/-</div>
                                </div>

                                <div className={style.buttoncontainer}>
                                    <button className={style.button} onClick={() => handleClickOpen1(event.id)}>Update</button>                                 
                                    <button onClick={() => DeleteDetails(event.id)} className={style.button}>Remove</button>

                                </div>
                            </CardContent>
                        </Card>

                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
function fetchDecoration() {
    throw new Error("Function not implemented.");
}

