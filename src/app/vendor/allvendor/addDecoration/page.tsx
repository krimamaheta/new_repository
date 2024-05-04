"use client"
import React, { useEffect } from "react";
import styles from "./../../../changepassword/style.module.css"
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { debug } from "console";
import { useSelector } from "react-redux";
import { user } from "@/Redux/authslice/authslice";


// interface ImageData{
//   imageUrl: string; // Declare imageUrl property as a string
//   vendorEventId: string;
// }



// interface FormValue {

//   eventId: string,
//   vendorId: string,
//   Price: string,
//   images: File[],
// }
// const DecorationForm= () => {
//   const [value, setValue] = useState<FormValue>({
//     eventId:"",
//     vendorId:"",
//     Price:"",
//     images:[],
//   });

//   const User = useSelector((state) =>state.auth.user);

//   console.log(User);

//   //fetch vendor byuserid
//   const FetchVendor = async (userId: string) => {
//     try {
//       //userId='0b496f13-1006-4071-8d0f-a26da907296f';
//       debugger
//       const userId = User.user.userID;
//       console.log(userId);

//       const res = await axios.get(`https://localhost:44340/Api/Vendor/getByUserId/${userId}`);
//       console.log("----fetch vendor", res);
//       console.log("response...", res.data);
//       console.log("response...", res.data.vendorId);
//       //alert(res);
//       setValue({...value,vendorId:res.data.vendorId});
//       console.log({ setValue });
//       return res.data; 
//     }

//     catch (error) {
//       console.log("error");
//       alert("Failed to fetch vendor details. Please try again later.");
//       console.log("11111", error)
//     }
//   }

//   const [events, setEvents] = useState([])
//   const [loading, setLoading] = useState(false)
// const[selectedEvent,setSelectedEvent]=useState(null);

//   const selectchange = (e: { target: { name: any; value: any; }; }) => {
//     const { name, value } = e.target;
//     console.log({ name, value });

//     // setValue(prestate => ({
//     //   ...prestate,
//     //   [name]: value
//     // }));
//     setValue({
//       ...value,
//       [name]: e.target.value,
//     });
//     setSelectedEvent(events.find(event=>event.eventId===e.target.value));
//   }


//   const onChangeFile = (e) => {
//     // const file=e.target.files[0];
//     setValue((prestate) => ({
//       ...prestate,
//       images:e.target.files[0] // Store the first selected file
//     }))

//   }
//   useEffect(() => {
//     fetchEvent();
//   }, [])


//   const fetchEvent = async () => {
//     try {
//       const response = await axios.get("https://localhost:44340/Api/Event/AllEvent");
//       setEvents(response.data)
//       setLoading(false)
//     } catch (error) {
//       console.error("Error fetching events:", error);
//       setLoading(false);
//     }
//   }


//   const onClick = async () => {
//     try {
//       debugger
//       console.log(User);
//       await FetchVendor(value.vendorId);
//       console.log(".....vendorId",value.vendorId);


//       const eventId=selectedEvent?selectedEvent.eventId:"";
//       setValue((pre)=>({
//         ...pre,
//         eventId:eventId,
//         vendorId:value.vendorId
//       }))
//       const formdata = new FormData();
//       formdata.append("eventId",value.eventId)
//       formdata.append("vendorId",value.vendorId)
//       formdata.append("price",value.Price)

//       console.log("=====123", formdata);
//       console.log("EventId", value.eventId);
//       console.log("vendorId", value.vendorId);

//       if (value.images && value.images.length > 0) {
//         for (let i = 0; i < value.images.length; i++) {
//           formdata.append("Images", value.images[i]);
//         }
//       }

//       const response = await axios.post("https://localhost:44340/Api/VendorEvent/AddVendorEvent.", formdata, {
//         headers: {
//           "Content-Type": "multipart/form-data"
//         }
//       })
//       console.log("Decoration Added Successfully...............", response.data);
//       alert("Decoration Added Successfully...............");
//       // setValue({
//       //   eventId: "",
//       //   vendorId:"",
//       //   price: "",
//       //   images: []

//       // })
//     }
//     catch (error) {
//       console.error("Error while adding event:", error);
//       alert("Add fail: ");
//     }
//   };

//   console.log(events, value);

//   return (
//     <div>
//       <div className={styles["change-password-container"]}>
//         <div className={styles["card-container"]}>
//           <div className={styles["input-container"]}>
//             <h2 className={styles.head}>Add Decoration</h2>
//             <label htmlFor="EventName">Event:</label>
//             <select name="EventName" id="EventName" onChange={(e) => {
//               // Update the state with the selected eventId
//               setValue({
//                 ...value,
//                 eventId: e.target.value
//               });
//             }}>
//               <option value="">Select Event</option>
//               {loading ? (<option disabled>Loading...</option>) : (
//                 events.map((event) => (
//                   // Ensure you use event.eventId as the value for option
//                   <option key={event.eventId} value={event.eventId}>{event.eventName}</option>
//                 ))
//               )}
//             </select>
//           </div>
//           {/* <div className={styles["input-container"]}>
//             <label htmlFor="Description">Description:</label>
//             <input
//               type="text"
//               name="Description"
//               value={value.description}
//               onChange={selectchange}
//               placeholder="Description"
//             />
//           </div> */}

//           {/* <div className={styles["input-container"]}>
//         <label htmlFor="Prices">DishName:</label>
//           <input
//             type="text"
//             name="Prices"
//             value={value.Prices}
//             onChange={selectchange}
//             placeholder="DishName"
//           />
//         </div> */}
//           <div className={styles["input-container"]}>
//             <label htmlFor="Prices">DecorationPrice:</label>
//             <input
//               type="text"
//               name="Price"
//               value={value.Price}
//               onChange={selectchange}
//               placeholder="Prices"
//             />
//           </div>
//           <div className={styles["input-container"]}>
//             <label htmlFor="ImageUrl">UploadImage:</label>
//             <input
//               type="file"
//               name="images"
//               multiple
//               //value={value.images}
//               onChange={onChangeFile}
//               placeholder="ImageUpload"
//             />
//           </div>

//           <button className={styles.b1}>Edit</button>
//           <button className={styles.b1} onClick={onClick}>Add</button>
//           <Link href="/vendor/allvendor">Go to VendorPage</Link>
//         </div>

//       </div>
//     </div>

//   )
// }
// export default DecorationForm;



//2
// interface Event {
//   eventId: string;
//   eventName: string;
// }

// interface FormValue {
//   eventId: string;
//   vendorId: string;
//   Price: string;
//   images: File[];
// }
// //images:File[]
// const DecorationForm = () => {
//   const [value, setValue] = useState<FormValue>({
//     eventId:"",
//     vendorId:"",
//     Price:"",
//     images:[],
//   });

//   const [events, setEvents] = useState<Event[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);


//   const fetchEvent = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get("https://localhost:44340/Api/Event/AllEvent");
//       setEvents(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching events:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEvent();
//   }, []);

//   const User = useSelector((state) => state.auth.user);
//   console.log(User);

//   const FetchVendor = async (userId:string) => {
//     try {
//       const userId = User.user.userID; 
//       console.log("userID:",userId);
//       const res = await axios.get(`https://localhost:44340/Api/Vendor/getByUserId/${userId}`);
//       console.log("response...!",res);
//       console.log("vendorId",res.data.vendorId);

//       //setValue((prevValue) => ({...prevValue, vendorId: res.data.vendorId }));
//       return res.data.vendorId;
//       // const vendorId=res.data.vendorId;
//       // console.log("v id...",vendorId);
//       // setValue(prevValue => ({ ...prevValue, vendorId }));
//       //setValue({...value,vendorId:vendorId});

//     //   const vendorId = res.data.vendorId;
//     // console.log("VendorId:", vendorId); // Log the extracted vendorId
//     // setValue(prevValue => ({ ...prevValue, vendorId })); // Update state with vendorId
//     // return vendorId; 
//      // 


//      // return res.data;
//      // const vendorId=res.data.vendorId;
//      // setValue(pre=>({...pre,vendorId}))


//     } catch (error) {
//       console.log("Error fetching vendor details:", error);
//       alert("Failed to fetch vendor details. Please try again later.");
//     }
//   };

//   const selectchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const { value } = e.target;
//     const selectedEvent = events.find((event) => event.eventId === value);
//     setSelectedEvent(selectedEvent || null);
//     setValue((prevValue) => ({ ...prevValue, eventId: value }));
//   };

//   const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (files) {
//       setValue((prevValue) => ({ ...prevValue, images: Array.from(files) }));
//     }
//   };

//   // const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const files = e.target.files;
//   //   if (files) {
//   //     const urls = Array.from(files).map(file => URL.createObjectURL(file)); // Convert files to URLs
//   //     setValue((prevValue) => ({ ...prevValue, images: urls })); // Update state with URLs
//   //   }
//   // };

//   const onClick = async () => {
//     try {
//       debugger
//       const vendorId=await FetchVendor(User.user.userID);
//       const formdata = new FormData();
//       formdata.append("eventId",value.eventId);
//       formdata.append("vendorId",vendorId);
//       formdata.append("price", value.Price);

//       // if (value.images.length > 0) {
//       //   value.images.forEach((image) => {
//       //     formdata.append("Images", image);
//       //   });
//       // }
//       value.images.forEach(imageFile => formdata.append("Images", imageFile));

//       const response = await axios.post("https://localhost:44340/Api/VendorEvent/AddVendorEvent.", formdata, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("Decoration Added Successfully...............",response.data);
//       if(response.status===200){
//         console.log("response",response);
//         alert(response.data);
//       }else{
//         //500 error
//         alert(response.data);
//       }
//      // alert("Decoration Added Successfully...............");
//       setValue({
//         eventId:"",
//         vendorId:"",
//         Price:"",
//         images:[]
//       })
//     } 
//       catch(error) {
//       console.error("Error while adding event:", error);
//       alert("Failed to add decoration. Please try again later.");
//     }
//   };

//   return (
//     <div>
//       <div className={styles["change-password-container"]}>
//         <div className={styles["card-container"]}>
//           <div className={styles["input-container"]}>
//             <h2 className={styles.head}>Add Decoration</h2>
//             <label htmlFor="EventName">Event:</label>
//             <select name="EventName" id="EventName" onChange={selectchange}>
//               <option value="">Select Event</option>
//               {loading ? (
//                 <option disabled>Loading...</option>
//               ) : (
//                 events.map((event) => (
//                   <option key={event.eventId} value={event.eventId}>
//                     {event.eventName}
//                   </option>
//                 ))
//               )}
//             </select>
//           </div>
//           <div className={styles["input-container"]}>
//             <label htmlFor="Prices">DecorationPrice:</label>
//             <input
//               type="text"
//               name="Price"
//               value={value.Price}
//               onChange={(e) => setValue((prevValue) => ({ ...prevValue, Price: e.target.value }))}
//               placeholder="Prices"
//             />
//           </div>
//           <div className={styles["input-container"]}>
//             <label htmlFor="ImageUrl">UploadImage:</label>
//             <input type="file" name="images" multiple onChange={onChangeFile} />
//           </div>
//           <button className={styles.b1} onClick={onClick}>
//             Add 
//           </button>
//           <Link href="/vendor/allvendor">Go to VendorPage</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DecorationForm;


//3
interface Event {
  eventId: string;
  eventName: string;
}

interface FormValue {
  eventId: string;
  vendorId: string;
  Price: string;
  images: string[]; // Assuming images will be stored as URLs
}
const DecorationForm: React.FC = () => {
  const [value, setValue] = useState<FormValue>({
    eventId: "",
    vendorId: "",
    Price: "",
    images: [],
  });

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    fetchEvent();
  }, []);

  const User = useSelector((state) => state.auth.user);

  const FetchVendor = async (userId: any) => {
    try {
      const res = await axios.get(`https://localhost:44340/Api/Vendor/getByUserId/${userId}`);
      return res.data.vendorId;
    } catch (error) {
      console.log("Error fetching vendor details:", error);
      alert("Failed to fetch vendor details. Please try again later.");
    }
  };

  const selectchange = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    setValue((prevValue) => ({ ...prevValue, eventId: value }));
  };

  const onChangeFile = (e: { target: { files: any; }; }) => {
    const files = e.target.files;
  
    if (files) {
      setValue((prevValue) => ({ ...prevValue, images: Array.from(files) }));
    }
  };

  const onClick = async () => {
    try {
      debugger
      const vendorId = await FetchVendor(User.user.userID);
      const formData = new FormData();
      formData.append("eventId", value.eventId);
      formData.append("vendorId", vendorId);
      formData.append("price", value.Price);

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


        // setValue((pre:FormValue)=>({
        //   ...pre,
        //   images:data.secure_url
        // }))


        return data.secure_url;
      });

      // Wait for all the Cloudinary upload promises to resolve
      const uploadedImageUrls = await Promise.all(cloudinaryUploadPromises);

      // Update the state with the uploaded image URLs
      setValue((prevValue: FormValue) => ({
        ...prevValue,
        images: uploadedImageUrls,
      }));

      formData.append("Images",value.images[0]);

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
      if (res.status === 200) {
        console.log("response", res);
        alert(res.data);
        setValue({
          eventId: "",
          vendorId: "",
          Price: "",
          images: [],
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

  return (
    <div>
      <div className={styles["change-password-container"]}>
        <div className={styles["card-container"]}>
          <div className={styles["input-container"]}>
            <h2 className={styles.head}>Add Decoration</h2>
           
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
            

          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="Prices">DecorationPrice:</label>
            <input
              type="text"
              name="Price"
              value={value.Price}
              onChange={(e) => setValue((prevValue) => ({ ...prevValue, Price: e.target.value }))}
              placeholder="Prices"
            />
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="ImageUrl">UploadImage:</label>
            <input type="file" name="images" multiple onChange={onChangeFile} />
          </div>
          <button className={styles.b1} onClick={onClick}>Add</button>
          <Link href="/vendor/allvendor">Go to VendorPage</Link>
        </div>
      </div>
    </div>
  );
};

export default DecorationForm;