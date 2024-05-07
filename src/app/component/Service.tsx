import React, { useEffect, useState } from 'react';
import Image from "next/image"
import Profile from "./../../../public/ring1.png"
import Birthday from "./../../../public/birthday.jpeg"
import Ring from "./../../../public/ring.png"
import deco from "./../../../public/decoration.png"
import ring2 from "./../../../public/ring2.png"
import deco2 from "./../../../public/decoration1.png"
import birthday1 from "./../../../public/birthday1.png"
import Style from "./../home/card.module.css"
import w1 from "./../../../public/w1.png"
import Styles from "./../../app/landingpage/card.module.css";
import style1 from "./../../Styles/global.module.css"
import Carousel from "@itseasy21/react-elastic-carousel";
//import c1 from "./../../../public/landingpage1.png";
import chair from "./../../../public/chair.jpeg"
import axios from 'axios';


const Service=()=>{

    const imageFilenames = [{imageurl:'https://images.pexels.com/photos/14608917/pexels-photo-14608917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',price:15000}, 
    {imageurl:'https://media.istockphoto.com/id/471906412/photo/beautiful-table-setting-for-an-wedding-reception-or-an-event.jpg?s=2048x2048&w=is&k=20&c=_eAWgEvA_hOaeJ4kQLJWR7rwFcmIm6h9_Z83B59t_fk=',price:16000},
     {imageurl:'https://media.istockphoto.com/id/1171816219/photo/wedding-ceremony-at-beautiful-farm.jpg?s=2048x2048&w=is&k=20&c=ocv8S8UWAC42iXzfF729_dzhoRnJ9CkScXrHuuGvc7A=',price:17000},
    ];

    const ringImages2=[{imageurl:'https://img.freepik.com/premium-photo/wedding-background-photograph_931878-141377.jpg?w=826',price:'15000'},
      {imageurl:'https://img.freepik.com/premium-photo/wedding-reception-stage_14349-1020.jpg?w=900',price:'16000'},
      {imageurl:'https://img.freepik.com/premium-photo/christmas-delights-twinkling-lights_908673-4291.jpg?w=740',price:'21000'}
    ]

    const birthday=[
      {imageurl:'https://as2.ftcdn.net/v2/jpg/05/91/44/35/1000_F_591443520_DyVN5jAvOWRa5vyhddKQjfMGMiEQ5w92.jpg',price:'20000'},
      
      {imageurl:'https://as2.ftcdn.net/v2/jpg/06/39/96/59/1000_F_639965933_tr6vbGwAY0P8SWgInd5DyEZEZTU5bNOT.jpg',price:'25000'},
      {imageurl:'https://img.freepik.com/premium-photo/decorated-table-room-happy-birthday-party-without-people_290431-11411.jpg?w=740',price:'17000'},
    ]

    const annyversary=[
      {imageurl:'https://img.freepik.com/free-photo/cake-cake-are-table-with-cake-cake-it_1340-33032.jpg?t=st=1713357645~exp=1713361245~hmac=e978c95d54cc21cafa397ab36daf095f933a5eec72cc46facb1db5c775f0d7da&w=740',price:'10000'},
      {imageurl:'https://img.freepik.com/premium-photo/beautiful-archway-decorated-with-floral-composition-outdoors_658000-1496.jpg?w=740',price:'15000'},
      {imageurl:'https://img.freepik.com/premium-photo/background-image-with-balloons-birthday-composition_944128-10809.jpg?w=740',price:'17000'},

    ]

    const Yagnopavit=[
      {imageurl:'https://as1.ftcdn.net/v2/jpg/04/39/13/16/1000_F_439131696_cL7Been4vNQML4zJ3BnVOPPZQMWswIHP.jpg',price:'14000'},
      {imageurl:'https://as2.ftcdn.net/v2/jpg/03/35/51/19/1000_F_335511905_KcZzFxPrvAdORxnVK2MOaVfX41bjF5kP.jpg',price:'17000'},
      {imageurl:'https://as1.ftcdn.net/v2/jpg/02/46/22/48/1000_F_246224832_aSoSICzJB4G49WcNz0BdVwTxxCNK2tTS.jpg',price:'20000'}
    ]
    
    const[value,setValue]=useState({
      district:"",
      city:"",
      price:"",
      eventName:"",
    })

    const[district,setdistrict]=useState([]);
    const[values,setValues]=useState({district:''})

    useEffect(()=>{
      fetchAllDistrict();
    },[]);

    const fetchAllDistrict=async ()=>{
      try{
        const res=await axios.get("https://localhost:44340/api/VendorEvent/GetAllDistrict")
        if(res.status===200){
          setdistrict(res.data);
        }
        else{
          console.error('Failed to fetch districts');
        }
      }catch(error){
        console.log("Error fetching districts",error);
        
      }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      setValue(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

//   const handleChange = (event) => {
//     setValue({ ...value, [event.target.name]: event.target.value });
// };

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
}, [])


const selectchange = (e: { target: { value: any; }; }) => {
  const { value } = e.target;
  setValue((prevValue) => ({ ...prevValue, eventId: value }));
};

    return(
        <div>
   
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
        <div className='align:item:center'>
        <div className="image1">
        <Image src={deco2} alt="home page" layout="responsive"/>  
      </div>
        {/* <Image src={deco2} height={200} width={200}/>  */}
        </div>
        <div className={style1.heading3}>
          <h2>Features:</h2>
        </div>

        <div className={style1.carousel}>
        <Carousel  itemsToShow={2} isRTL={false}>
          <Image  src={w1} alt="decoration"/>
          <Image src={Ring} alt="decoration"/>
         
          <Image src={birthday1} alt="decoration"/>
          <Image src={deco2} alt="decoration"/>
        
          <Image src={chair} alt="decoration"/>

        </Carousel>
        </div>

        <div className={style1.heading1}>
                    <label htmlFor="city">Search:</label></div>
        <div className={style1.container}>

        <div className={style1.input1}>
                   <div className={style1.heading2}>
                    <label htmlFor="district">Select District:</label></div>
                    <select  className={style1.s1} name="typeOfvendor" id="District" value={value.district} onChange={selectchange}>
                      {district.map((district)=>(
                        <option key={district.id} value={district.id}>
                          {district.district}
                        </option>
                      ))}
                    {/* <option value="Gujarat">Gujarat</option>
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
                        <option value="Puducherry">Puducherry</option> */}
                    </select>
        </div>
        <div className={style1.input1}>
                    <div className={style1.heading2}>
                    <label htmlFor="city">Select City:</label></div>
                    <select className={style1.s1} name="city" id="city" value={value.city} onChange={handleChange}>
                        <option value="Surat">Surat</option>
                        <option value="Bhavnagar">Bhavnagar</option>
                        <option value="Baroda">Baroda</option>
                        <option value="Anand">Anand</option>
                        <option value="Vapi">Vapi</option>
                        <option value="Navsari">Navsari</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Bharuch">Bharuch</option>
                        <option value="Amreli">Amreli</option>
                        <option value="Botad">Botad</option>
                        <option value="Chhota Udaipur">Chhota Udaipur</option>
                        <option value="Dahod">Dahod</option>
                        <option value="Gandhinagar">Gandhinagar</option>

                        <option value="Devbhoomi Dwarka">Devbhoomi Dwarka</option>
                        <option value="Gir Somnath">Gir Somnath</option>
                        <option value="Jamnagar">Jamnagar</option>
                        <option value="Junagadh">Junagadh</option>

                        
                        <option value="Kheda">Kheda</option>
                        <option value="Kutch">Kutch</option>
                        <option value="Mahisagar">Mahisagar</option>
                        <option value="Mehsana">Mehsana</option>

                        <option value="Morbi">Morbi</option>
                        <option value="Panchmahal">Panchmahal</option>
                        <option value="Patan">Patan</option>
                        <option value="Mehsana">Mehsana</option>

                        <option value="Porbandar">Porbandar</option>
                        <option value="Rajkot">Rajkot</option>
                        <option value="Sabarkantha">Sabarkantha</option>
                        <option value="Surendranagar">Surendranagar</option>
                        <option value="Tapi">Tapi</option>
                        <option value="Valsad">Valsad</option>
                        <option value="Banaskantha">Banaskantha</option>

                    </select>
        </div>

        <div className={style1.input1}>
               <div className={style1.heading2}>
                    <label htmlFor="price">Select Price:</label></div>
                    <select className={style1.s1} name="price" id="price" value={value.price} onChange={handleChange}>
                        <option value="5000">5,000</option>
                        <option value="10000">10,000</option>
                        <option value="15000">15,000</option>
                        <option value="20000">20,000</option>
                        <option value="25000">25,000</option>
                        <option value="30000">30,0000</option>
                        <option value="35000">35,0000</option>
                        <option value="40000">40,0000</option>
                        <option value="45000">45,0000</option>
                        <option value="50000">50,000</option>
                        <option value="55,000">55,000</option>
                        <option value="60,000">60,000</option>
                        <option value="65,000">65,000</option>
                        <option value="70,000">70,000</option>
                        <option value="80,000">80,000</option>
                        <option value="90,000">90,000</option>
                        <option value="1,00,000">1,00,000</option>
                    </select>
        </div>

        <div className={style1.input1}>
               <div className={style1.heading2}>
                    <label htmlFor="Event">Select Event:</label></div>

                    <select className={style1.s1} name="events" id="events" value={value.eventName} onChange={selectchange}>
                      {loading?(<option value="">Loading.....</option>):(events.map((event)=>(
                        <option  key={event.eventId} value={event.eventId}>{event.eventName}</option>
                      )))

                      }
                        {/* <option value="WeddingCeremony">WeddingCeremony</option>
                        <option value="RingCeremony">RingCeremony</option>
                        <option value="BirthdayCelebration">BirthdayCelebration</option>
                        <option value="AnnyversaryParty">AnnyversaryParty</option>
                        <option value="YagnopavitCeremony">YagnopavitCeremony</option> */}

                    </select>
        </div>

        <div className={style1.input1}>
        <div className={style1.heading2}>
                    <label htmlFor="Decoration">Decoration</label></div>
        <button className={style1.s1}>Decoration</button></div>

        <div className={style1.input1}>
        <div className={style1.heading2}>
                    <label htmlFor="Catering">Catering</label></div>
        <button className={style1.s1}>Catering</button>
        </div>


        


        </div>

        <p className={Style.left}>
            Wedding Ceremony Hall
        </p>
        <div className="flex  flex-wrap -m-4" style={{ marginTop: '20px' }}>
        {imageFilenames.map((items, index) => (
        <div key={index} className="p-4 lg:w-1/3">
          <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
            {/* Generate image URL dynamically */}
            <img src={items.imageurl} alt={index} className="object-cover w-full h-full"  height="200" width="200"/>
            <p className="text-lg font-semibold text-gray-800 mt-2">Rs.{items.price}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" style={{ marginTop: '15px' }}>Book Now</button>
          </div>  
        </div>
      ))}
    </div>


    <p className={Style.left}>
          Ring Ceremony Hall
        </p>
        <div className="flex  flex-wrap -m-4" style={{ marginTop: '20px' }}>
          {ringImages2.map((item, index) => (
            <div key={index} className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <img src={item.imageurl} alt={`Image ${index}`} className="object-cover w-full h-full" height="200" width="200" />
                <p className="text-lg font-semibold text-gray-800 mt-2">Rs.{item.price}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
              </div>  
            </div>
          ))}
        </div>


        <p className={Style.left}>
          Birthday Ceremony Hall
        </p>
        <div className="flex  flex-wrap -m-4" style={{ marginTop: '20px' }}>
          {birthday.map((item, index) => (
            <div key={index} className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <img src={item.imageurl} alt={`Image ${index}`} className="object-cover w-full h-full" height="200" width="200" />
                <p className="text-lg font-semibold text-gray-800 mt-2">Rs.{item.price}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
              </div>  
            </div>
          ))}
        </div>

        <p className={Style.left}>
          Annyversary Ceremony Hall
        </p>
        <div className="flex  flex-wrap -m-4" style={{ marginTop: '20px' }}>
          {annyversary.map((item, index) => (
            <div key={index} className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <img src={item.imageurl} alt={`Image ${index}`} className="object-cover w-full h-full" height="200" width="200" />
                <p className="text-lg font-semibold text-gray-800 mt-2">Rs.{item.price}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
              </div>  
            </div>
          ))}
        </div>

        <p className={Style.left}>
          Yagnopavit Ceremony Hall
        </p>
        <div className="flex  flex-wrap -m-4" style={{ marginTop: '20px' }}>
          {Yagnopavit.map((item, index) => (
            <div key={index} className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <img src={item.imageurl} alt={`Image ${index}`} className="object-cover w-full h-full" height="200" width="200" />
                <p className="text-lg font-semibold text-gray-800 mt-2">Rs.{item.price}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
              </div>  
            </div>
          ))}
        </div>



    <div className="flex flex-wrap w-full mb-20">
    
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
     
        {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Event Maker</h1> */}
        {/* <p className={Style.p1}>Event Maker
        {/* <div className="h-1 w-20 bg-indigo-500 rounded"></div> */}
        
        {/* </p>  */}
        

      </div>
      {/* <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
          {/* <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1> */}
          {/* <Image src={w1} height={1500} width={600}/>
          <button className={Style.b1}>Book Now</button> */} 
          
          {/* <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
          {/* <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a> */}
          {/* <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div> */}
        {/* </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <a className="text-indigo-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
    </div> 
   
    {/* <p className={Style.left}>
            Our Memories
        </p> */}
        <div className={Styles.main}>
            <h2 className={Styles.heading3}>Event Memories</h2>
            <p className={Styles.phead3}>
            In our journey as event makers,
             we have curated a diverse array of unforgettable moments, 
             from fairy-tale weddings in picturesque gardens to romantic ring
              ceremonies under the starlit sky.
              Steeped in tradition and love, our yagnopavit ceremonies have 
              marked significant passages into adulthood,
               while milestone anniversaries have been celebrated with elegance
                and grace, showcasing years of cherished memories.
                Vibrant birthday celebrations have filled the air with joy and
                 laughter, each event a testament to the power of love,
                 unity, and shared moments. Across weddings, ring ceremonies,
                  yagnopavit, anniversaries, and birthdays, our commitment to crafting memorable experiences remains unwavering, 
                  ensuring that every occasion is a reflection of our dedication to excellence and the magic of life's special moments."
            </p>
        </div>








    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
            <div className="h-40 rounded w-full object-cover object-center mb-6">
            <Image src={Profile} height={600} width={250}/>
            </div>
          {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="~/public/ring1.png" alt="content"/> */}
          {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Wedding Ceremony</h2>
          <p className="leading-relaxed text-base"> Elevate your special day to extraordinary heights with our meticulously crafted Ring ceremony services. 
    </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <div className="h-40 rounded w-full object-cover object-center mb-6">
            <Image src={birthday1} height={100} width={300}/>
            </div>
          {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Birthday Celebration</h2>
          <p className="leading-relaxed text-base">Make every birthday a memorable occasion with our exceptional birthday celebration services.
       </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <div className="h-40 rounded w-full object-cover object-center mb-6">
            <Image src={deco2} height={100} width={300}/>
            </div>
          {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Decorantals</h2>
          <p className="leading-relaxed text-base">Our team specializes in crafting mesmerizing lighting and flower arrangements. 
  </p>
        </div>
      </div>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
        <div className="h-40 rounded w-full object-cover object-center mb-6">
            <Image src={ring2} height={100} width={300}/>
            </div>
          {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Ring Ceremony</h2>
          <p className="leading-relaxed text-base">Elevate your special day to extraordinary heights with our meticulously crafted Ring ceremony services.</p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}
export default Service;