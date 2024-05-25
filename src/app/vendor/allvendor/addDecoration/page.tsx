"use client"
import React, { useEffect } from "react";
import styles from "./../../../changepassword/style.module.css"
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { debug } from "console";
import { useSelector } from "react-redux";
import { user } from "@/Redux/authslice/authslice";
import { useRouter } from "next/navigation";
import { useDecorationPrice } from "@/context/DecorationPrice";

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

  const User=useSelector((state)=>state.auth.user);
  const userId = User.user.userID;
  console.log(userId);
  const role=User.user.roles
  console.log("role",role);
  const route=useRouter();
  
 // const { setApprovalStatus } = useDecorationPrice();
  
// useEffect(()=>{
//  //console.log(isApprove)
//   if(!isApprove)
//   {
//     redirect to form
//     route.push("/vendor")
//   }
// },[])

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


 

  //fetch vendor by userId
 // const User = useSelector((state) => state.auth.user);

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
    // setValue((prevValue) => ({ ...prevValue, images: files }));
    if (files) {
      setValue((prevValue) => ({ ...prevValue, images: Array.from(files) }));
    }
  };

  const onClick = async () => {
    try {
      // debugger
      const vendorId = await FetchVendor(User.user.userID);
      const formData = new FormData();
      formData.append("eventId", value.eventId);
      formData.append("vendorId", vendorId);
      formData.append("price", value.Price);

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


        // setValue((pre:FormValue)=>({
        //   ...pre,
        //   images:data.secure_url
        // }))
        return data.secure_url;
      });

      // Wait for all the Cloudinary upload promises to resolve
      const uploadedImageUrls = await Promise.all(cloudinaryUploadPromises);
      console.log("-------------", uploadedImageUrls);

      uploadedImageUrls.forEach(url => {
        formData.append("Images", url);
      });
     

      // Update the state with the uploaded image URLs
      // setValue((prevValue: FormValue) => ({
      //   ...prevValue,
      //   images: uploadedImageUrls,
      // }));

      // formData.append("Images",value.images[0]);
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
      if (res.status === 200) {
        console.log("response", res);
        alert(res.data);
        setValue({
          eventId: "",
          vendorId: "",
          Price:"",
          images:[],
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