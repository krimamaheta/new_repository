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



//user side vendor
const VendorForm: React.FC = () => {

    // const user = useSelector((state)=>state.auth.user)
    // const UserId=user.UserId;
    // console.log(UserId);
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

        fetchVendorTypes(); // Call the fetchVendorTypes function here

    }, []);
    const User = useSelector((state) => state.auth.user);
    console.log(User);

    //add vendor
   // const { isApproved } = useDecorationPrice();
    const [isApproved, setIsApproved] = useState(false);
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

                //await FinalApprove(data.vendorId);

                //wait for approval
                if(data.typeOfVendor=="Caterer" && isApproved){
                    //route.push("vendor/caterer");
                    startPolling(data.vendorId,data.typeOfVendor);
                }else if (data.typeOfVendor=="Decorator" && isApproved){
                    route.push("vendor/allvendor");
                }
                // else{
                //     route.push("/landingpage");
                // }
            } else {
                // Handle other HTTP errors
                console.error("Failed to add value:", response.statusText);
                alert("Failed to add value. Please try again later.");
            }
        } catch (error) {
            // Handle error
            console.error("Error:", error);
            alert("An error occurred during adding value.");
        }
        // try{
        //     debugger
        //     console.log(User.user.userID);
        //     const userId= User.user.userID; // User.userID
        //     const url=`https://localhost:44340/Api/Vendor/AddVendor/${userId}`;
        //         setValue({...value,userId:userId})
        //        // UserId
        //         console.log(value);
        //         console.log(userId);
        //         //userId
        //         const res=await fetch(url,{
        //             method:"POST",
        //             headers:{
        //                 "Content-Type":"Application/json",
        //                 // "Access-Control-Allow-Origin": "*",
        //             },
        //             body:JSON.stringify(value),
        //         });

        //         if(res.ok){
        //             var data=await res.json();
        //             console.log(data);
        //             alert("Added value Successfully");
        //             route.push("vendor/allvendor");
        //         }else{
        //             alert("Fail to add value");
        //         }
        // }
        // catch(error){
        //     console.error("Error:", error);
        //     alert("An error occurred during adding value.");
        // }
    }

    const fetchApprovalStatus = async (vendorId:string) => {
        try {
          const response = await axios.get(`https://localhost:44340/api/Vendor/status/${vendorId}`);
          setIsApproved(prevIsApproved => response.data.isApproved);
        } catch (error) {
          console.error("Failed to fetch approval status:", error);
        }
      };
    
      const startPolling = (vendorId:string, typeOfVendor:string) => {
        const interval = setInterval(async () => {
          await fetchApprovalStatus(vendorId);
          if (isApproved) {
            clearInterval(interval);
            if (typeOfVendor === "Caterer") {
              route.push("vendor/caterer");
            } else if (typeOfVendor === "Decorator") {
              route.push("vendor/allvendor");
            }
          }
        }, 5000); // Poll every 5 seconds
      };

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

interface FormValue {
    eventId: string;
    vendorId: string;
    Price: string;
    images: string[]; // Assuming images will be stored as URLs
  }

export const GetAllVendor: React.FC = () => {
    // const imageFilenames = [{imageurl:'https://img.freepik.com/premium-photo/display-desserts-including-strawberries-strawberries-strawberries_931576-18736.jpg?w=900',location:`surat`,price:400}, 
    // {imageurl:'https://img.freepik.com/premium-photo/buffet-food-catering-food-party-restaurant-mini-canapes-snacks-appetizers_41969-28082.jpg?w=900',location:"bhavnagar",price:450},
    //  {imageurl:'https://img.freepik.com/premium-photo/display-fruit-table-with-sign-saying-fresh_931576-20184.jpg?w=900',location:"anand",price:450},
    // ];

    // const imageFilename1 = [{imageurl:'https://img.freepik.com/premium-photo/man-is-cooking-some-food-with-woman-white-shirt-woman-white-shirt_662214-523205.jpg?w=900',location:`surat`,price:500}, 
    // {imageurl:'https://img.freepik.com/premium-photo/group-bombay-chat-food-includes-golgappa-panipuri-bhel-puri-sev-poori-dahipuri-ragda-pattice-raj-kachori-etc-selective-focus_466689-34863.jpg?w=740',location:"bhavnagar",price:550},
    //  {imageurl:'https://img.freepik.com/premium-photo/healthy-meal-grilled-meat-vegetable-curry-basmati-rice-naan-bread-generated-by-ai_188544-168804.jpg?w=1060',location:"anand",price:500},
    // ];
    const route = useRouter();
    const [loading, setLoading] = useState(false)
    const [event, setEvent] = useState("");

    const onClick = (e): any => {
        setEvent(e.target.event);
        route.push("allvendor/addDecoration");

    }


    const [open, setOpen] = React.useState(false);

    const handleClickOpen1 = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //to display same page 
    //get all image what ever uploaded
    const [vendorDecoration, setvendorDecoration] = useState([]);

    //fetch vendorId
    const User = useSelector((state) => state.auth.user);
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

            // debugger
            setLoading(true)
            const vendorId = await FetchVendorId(User.user.userID);
            // var res = await axios.get("https://localhost:44340/api/VendorEvent/List");
            var res = await axios.get(`https://localhost:44340/api/VendorEvent/GetAllByVendorId?vendorId=${vendorId}`)
            console.log("vendor id", vendorId);
            console.log("response", res);
            setvendorDecoration(res.data);
        } catch (error) {
            console.error("error fetching vendor decoration");
            alert("error to fetch list");
        }
        finally {
            setLoading(false);
        }
    }

    const onClick1 = async (e) => {
        setLoading(true)
        setEvent(e.target.event);
        setTimeout(async () => {
            await fetchDecoration();
            setLoading(false);

        }, 1000)

        //route.push("/vendor/allvendor/list");
    }


    // const DeleteVendorEvent = async (Id: string, vendorId: string) => {
    //     if (window.confirm("Are you sure you want to delete this Vendor Decoration?")) {
    //         try {
    //             const res = await axios.delete(`https://localhost:44340/api/VendorEvent/${Id}`);
    //             console.log("response", res);
    //             if (res.status === 200) {
    //                 console.log("response", res.data);
    //                 alert("Vendor Event deleted successfully");
    //                 await fetchDecoration(vendorId);
    //                 return res.data;
    //             } else {
    //                 // Handle unexpected status codes
    //                 console.error("Unexpected status code:", res.status);
    //                 alert("Failed to delete Vendor Event: Unexpected status code");
    //             }
    //         } catch (error) {
    //             console.error("Error:", error);
    //             alert("Failed to delete Vendor Event");
    //             throw error; // Optionally rethrow the error to handle it elsewhere
    //         }
    //     }
    // };
    const DeleteDetails = async (Id: string, vendorId: string) => {
        if (window.confirm("Are you sure you want to delete this Vendor Decoration?")) {
            try {
                debugger
                const res = await axios.delete(`https://localhost:44340/api/VendorEvent/Delete/${Id}`);
                console.log("response", res);
                if (res.status === 200) {
                    console.log("response", res.data);
                    alert("Vendor Event deleted successfully");
                    await fetchDecoration(vendorId);
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


    const [events, setEvents] = useState([]);
    //const [loading, setLoading] = useState(false);
  
    const fetchEvent = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://localhost:44340/Api/Event/AllEvent");
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

      const dispatch=useDispatch();
    
  
      const handlelogout=()=>{
              dispatch(logout());
              route.push("/landingpage");  
      }

    return (
        <div>


            <p className={Style.left}>
                <button className={style.b2} onClick={onClick}>AddDecoration</button>
                <button className={style.b2} onClick={onClick1}>DecorationList</button>
                <button className={style.logoutbtn} onClick={handlelogout}>Logout</button>
            </p>

            {/* {
                vendorDecoration.map((event:vendordecorationModel)=>(
                    <div key={event.id}>
                        <h2>{event.price}</h2>
                        {event.images.map((imageurl: React.Key | null | undefined)=>(
                            <img key={imageurl} src={imageurl} alt="vendorDecorationImage" style={{width:'400px',height:'auto'}}/>
                        ))}
                    </div>
                ))
            } */}

            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                {loading ? (<div><Loader /></div>) : vendorDecoration.map((event: vendordecorationModel, index: number) => (
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
                                    <div className={style.details1}>FirmName:{event.firmName}</div>
                                    <div className={style.details1}>CityName:{event.cityName}</div>
                                    <div className={style.details1}>FirmAddress:{event.address}</div>
                                    <div className={style.details1}>District:{event.district}</div>
                                    <div className={style.details1}>Websiteurl:{event.websiteUrl}</div>
                                    <div className={style.details1}>EventName:{event.eventName}</div>

                                    <div className={style.details1}>DecorationPrice:{event.price}</div>
                                </div>

                                <div className={style.buttoncontainer}>
                                    <button className={style.button} onClick={handleClickOpen1}>Update</button>

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
                                                handleClose();
                                            },
                                        }}
                                    >
                                        <DialogTitle className={style.heading}>Update Details</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>

                                            </DialogContentText>
                                            {/* <TextField
                                                autoFocus
                                                required
                                                margin="dense"
                                                id="EventName"
                                                name="EventName"
                                                label="EventName"
                                                type="text"
                                                fullWidth
                                                variant="standard"
                                            /> */}
                                            <label htmlFor="EventName">Event:</label>

                                            <select name="EventName" id="EventName" onChange={selectchange}>
                                                <option value="">Select Event</option>
                                                {loading ? (
                                                    <option disabled>Loading...</option>
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
                                                id="DecorationPrice"
                                                name="DecorationPrice"
                                                label="DecorationPrice"
                                                type="text"
                                                fullWidth
                                                variant="standard"
                                            />
                                            <input
                                                type="file"
                                                name="images"
                                                multiple

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


            {/* <div className="flex  flex-wrap -m-4" style={{ marginTop: '20px' }}>
          {imageFilenames.map((item, index):any => (
            <div key={index} className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <div className={style.image1}>
                <img src={item.imageurl} alt={`Image ${index}`} className="object-cover w-full h-full"  />
                    </div>
             
                <p className="text-lg font-semibold text-gray-800 mt-2">Rs.{item.price}</p>
                <p className="text-lg font-semibold text-gray-800 mt-2">{item.location}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
              </div>  
            </div>
          ))}
        </div>


        
       
        <div className="flex  flex-wrap -m-4" style={{ marginTop: '20px' }}>
          {imageFilename1.map((item, index):any => (
            <div key={index} className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <div className={style.image1}>
                <img src={item.imageurl} alt={`Image ${index}`} className="object-cover w-full h-full"  />
                    </div>
             
                <p className="text-lg font-semibold text-gray-800 mt-2">Rs.{item.price}</p>
                <p className="text-lg font-semibold text-gray-800 mt-2">{item.location}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
              </div>  
            </div>
          ))}
        </div> */}


            {/* 
        update code 
        */}






        </div>
    )
}
function fetchDecoration() {
    throw new Error("Function not implemented.");
}

