"use client"
import React, { useState } from "react";
import Style from "./../vendor/vendorStyle.module.css"
import { UseSelector, useSelector } from "react-redux";
import style from "./../vendor/vendorStyle.module.css"
import { useRouter } from "next/navigation";

//during first time login
//coman for decorator AND VENDOR


const VendorForm:React.FC=()=>{

    // const user = useSelector((state)=>state.auth.user)
    // const UserId=user.UserId;
    // console.log(UserId);

    const route=useRouter();
    const[value,setValue]=useState({
        userId: "",
        WebsiteUrl: "",
        Address: "",
        District:"",
        CityName: "",
        FirmName: "",
        typeOfvendor: ""
    });
    
    const User=useSelector((state)=>state.auth.user);
    console.log(User);
    const handleSubmit=async()=>{
        try{
            console.log(User.user.userID);
            const userId= User.user.userID; // User.userID
            const url=`https://localhost:44340/Api/Vendor/AddVendor/${userId}`;
                setValue({...value,userId:userId})
               // UserId
                console.log(value);
                console.log(userId);
                //userId
                const res=await fetch(url,{
                    method:"POST",
                    headers:{
                        "Content-Type":"Application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                    body:JSON.stringify(value),
                });
                debugger
                if(res.ok){
                    var data=await res.json();
                    console.log(data);
                    alert("Added value Successfully");
                    route.push("vendor/allvendor");
                }else{
                    alert("Fail to add value");
                }
        }
        catch(error){
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
    return(
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
                    <select name="District" id="District" value={value.District} onChange={handleChange}>
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
                        
                        
                    </select>
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
                    <label htmlFor="typeOfvendor">Type of Vendor:</label>
                    <select name="typeOfvendor" id="typeOfvendor" value={value.typeOfvendor} onChange={handleChange}>
                        <option value="Caterer">Caterer</option>
                        <option value="Decorator">Decorator</option>
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

 export const GetAllVendor:React.FC=()=>{
    // const imageFilenames = [{imageurl:'https://img.freepik.com/premium-photo/display-desserts-including-strawberries-strawberries-strawberries_931576-18736.jpg?w=900',location:`surat`,price:400}, 
    // {imageurl:'https://img.freepik.com/premium-photo/buffet-food-catering-food-party-restaurant-mini-canapes-snacks-appetizers_41969-28082.jpg?w=900',location:"bhavnagar",price:450},
    //  {imageurl:'https://img.freepik.com/premium-photo/display-fruit-table-with-sign-saying-fresh_931576-20184.jpg?w=900',location:"anand",price:450},
    // ];

    // const imageFilename1 = [{imageurl:'https://img.freepik.com/premium-photo/man-is-cooking-some-food-with-woman-white-shirt-woman-white-shirt_662214-523205.jpg?w=900',location:`surat`,price:500}, 
    // {imageurl:'https://img.freepik.com/premium-photo/group-bombay-chat-food-includes-golgappa-panipuri-bhel-puri-sev-poori-dahipuri-ragda-pattice-raj-kachori-etc-selective-focus_466689-34863.jpg?w=740',location:"bhavnagar",price:550},
    //  {imageurl:'https://img.freepik.com/premium-photo/healthy-meal-grilled-meat-vegetable-curry-basmati-rice-naan-bread-generated-by-ai_188544-168804.jpg?w=1060',location:"anand",price:500},
    // ];
    const route=useRouter();
    const[event,setEvent]=useState("");
    const onClick=(e):any=>{
        setEvent(e.target.event);
        route.push("allvendor/addevent");
        
    }
    const onClick1=(e):any=>{
        setEvent(e.target.event);
        route.push("/vendor/allvendor/list");
        
    }

    return(
        <div>
                
                
                 <p className={Style.left}>
                <button className={style.b2} onClick={onClick}>AddEvent</button>
                <button className={style.b2} onClick={onClick1}>EventList</button>
                 </p>
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




        </div>
    )
}
