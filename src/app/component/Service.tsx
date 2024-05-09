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
import { error } from 'console';
import Loader from '../Loader';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import style from "./../vendor/vendorStyle.module.css"

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouter } from 'next/navigation';

interface Decoration {

  imageUrl: string;
  eventName: string;
  price: string;
  images: any;
  district: string;
  cityName: string;
  imageUrls: string[];

  // or number, depending on your data type
}

interface Caterer {
  images: string[];
  dishName: string;
  price: string;
}

const Service = () => {
  const route = useRouter();

  const imageFilenames = [{ imageurl: 'https://images.pexels.com/photos/14608917/pexels-photo-14608917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 15000 },
  { imageurl: 'https://media.istockphoto.com/id/471906412/photo/beautiful-table-setting-for-an-wedding-reception-or-an-event.jpg?s=2048x2048&w=is&k=20&c=_eAWgEvA_hOaeJ4kQLJWR7rwFcmIm6h9_Z83B59t_fk=', price: 16000 },
  { imageurl: 'https://media.istockphoto.com/id/1171816219/photo/wedding-ceremony-at-beautiful-farm.jpg?s=2048x2048&w=is&k=20&c=ocv8S8UWAC42iXzfF729_dzhoRnJ9CkScXrHuuGvc7A=', price: 17000 },
  ];

  const ringImages2 = [{ imageurl: 'https://img.freepik.com/premium-photo/wedding-background-photograph_931878-141377.jpg?w=826', price: '15000' },
  { imageurl: 'https://img.freepik.com/premium-photo/wedding-reception-stage_14349-1020.jpg?w=900', price: '16000' },
  { imageurl: 'https://img.freepik.com/premium-photo/christmas-delights-twinkling-lights_908673-4291.jpg?w=740', price: '21000' }
  ]

  const birthday = [
    { imageurl: 'https://as2.ftcdn.net/v2/jpg/05/91/44/35/1000_F_591443520_DyVN5jAvOWRa5vyhddKQjfMGMiEQ5w92.jpg', price: '20000' },

    { imageurl: 'https://as2.ftcdn.net/v2/jpg/06/39/96/59/1000_F_639965933_tr6vbGwAY0P8SWgInd5DyEZEZTU5bNOT.jpg', price: '25000' },
    { imageurl: 'https://img.freepik.com/premium-photo/decorated-table-room-happy-birthday-party-without-people_290431-11411.jpg?w=740', price: '17000' },
  ]

  const annyversary = [
    { imageurl: 'https://img.freepik.com/free-photo/cake-cake-are-table-with-cake-cake-it_1340-33032.jpg?t=st=1713357645~exp=1713361245~hmac=e978c95d54cc21cafa397ab36daf095f933a5eec72cc46facb1db5c775f0d7da&w=740', price: '10000' },
    { imageurl: 'https://img.freepik.com/premium-photo/beautiful-archway-decorated-with-floral-composition-outdoors_658000-1496.jpg?w=740', price: '15000' },
    { imageurl: 'https://img.freepik.com/premium-photo/background-image-with-balloons-birthday-composition_944128-10809.jpg?w=740', price: '17000' },

  ]

  const Yagnopavit = [
    { imageurl: 'https://as1.ftcdn.net/v2/jpg/04/39/13/16/1000_F_439131696_cL7Been4vNQML4zJ3BnVOPPZQMWswIHP.jpg', price: '14000' },
    { imageurl: 'https://as2.ftcdn.net/v2/jpg/03/35/51/19/1000_F_335511905_KcZzFxPrvAdORxnVK2MOaVfX41bjF5kP.jpg', price: '17000' },
    { imageurl: 'https://as1.ftcdn.net/v2/jpg/02/46/22/48/1000_F_246224832_aSoSICzJB4G49WcNz0BdVwTxxCNK2tTS.jpg', price: '20000' }
  ]

  const [value, setValue] = useState({
    district: "",
    city: "",
    price: "",
    eventName: "",
  })

  // const [district, setdistrict] = useState([]);
  // const [values, setValues] = useState({ district: '' })

  // useEffect(() => {
  //   fetchAllDistrict();
  // }, []);

  // const fetchAllDistrict = async () => {
  //   try {
  //     const res = await axios.get("https://localhost:44340/api/VendorEvent/GetAllDistrict")
  //     if (res.status === 200) {
  //       setdistrict(res.data);
  //     }
  //     else {
  //       console.error('Failed to fetch districts');
  //     }
  //   } catch (error) {
  //     console.log("Error fetching districts", error);

  //   }
  // }
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   setValue(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  //   const handleChange = (event) => {
  //     setValue({ ...value, [event.target.name]: event.target.value });
  // };

  const [events, setEvents] = useState([]);

  const [loading, setLoading] = useState(false);

  const [price, setPrice] = useState([]);
  const [city, setCity] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const [selectedEventId, setSelectedEventId] = useState("");
  const [decorations, setDecorations] = useState<Decoration[]>([]);
  const [caterers, setCaterer] = useState<Caterer[]>([]);
  const [showCaterers, setShowCaterers] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  // const [vendorDecoration, setvendorDecoration] = useState([]);

  useEffect(() => {

    //fetch district
    axios.get("https://localhost:44340/api/VendorEvent/GetAllDistrict")
      .then(response => {
        setDistrict(response.data);
        setLoading(false);
      }).catch(error => {
        console.log("fail to fetch district", error);
        alert("fail to fetch district");

      })
    //fetch price
    axios.get("https://localhost:44340/api/VendorEvent/GetAllPrice")
      .then(response => {
        setPrice(response.data)
        setLoading(false);
      }).catch(error => {
        console.log("fail to fetch", error);
        alert("error getting")
      });


    //fetch cityname
    axios.get("https://localhost:44340/api/VendorEvent/GetDetailsCity")
      .then(response => {
        setCity(response.data)
        setLoading(false);
      }).catch(error => {
        console.log("error fail to fetch cityname", error);
        alert("fail to fetch cityname");

      })



  }, [])

  const handlePriceChange = (e: any) => {
    setSelectedPrice(e.target.value);
  }

  const handleCityChange = (e: any) => {
    setSelectedCity(e.target.value);
  }
  const handleDistrictChange = (e: any) => {
    setSelectedDistrict(e.target.value); // Corrected the typo here
  }




  const fetchEvent = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://localhost:44340/Api/Event/AllEvent");
      setEvents(response.data);
      console.log("response", response);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, [])


  // const selectchange = (e: { target: { value: any; }; }) => {
  //    const { value } = e.target;
  //    setValue((prevValue) => ({ ...prevValue, eventId: value }));

  // };

  const selectchange = (e: { target: { value: any; }; }) => {
    const { value } = e.target;
    setSelectedEventId(value);
  };
  const fetchDecorations = async () => {
    try {
      setLoading(true)
      const res = await axios.post(`https://localhost:44340/api/VendorEvent/GetDecoration`, {
        district: selectedDistrict,
        cityName: selectedCity,
        price: selectedPrice,
        eventId: selectedEventId
      })
      setDecorations(res.data);
      console.log("response", res);

      setLoading(false)
    } catch (error) {
      console.error("Error fetching decorations:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (selectedCity || selectedDistrict || selectedEventId || selectedPrice) {
      fetchDecorations()
    }
  }, [selectedCity, selectedDistrict, selectedEventId, selectedPrice])


  const AllCaterer = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://localhost:44340/api/VendorEvent/AllCaterer");
      console.log("response all caterer", res);
      setCaterer(res.data);
      setLoading(false)

    } catch (error) {
      console.log("fail to fetch caterer");
      alert("fail to fetch caterer");
      setLoading(false)
    }
  }
  useEffect(() => {
    AllCaterer();
  }, [])
  const handleContinue = () => {
    setShowCaterers(true);
    // You can add additional logic here if needed
  };


  const CtaringPage = (e) => {
    e.preventDefault();
    route.push("services/catering")
  }



  return (
    <div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className='align:item:center'>
            <div className="image1">
              <Image src={deco2} alt="homepage" layout="responsive" />
            </div>
            {/* <Image src={deco2} height={200} width={200}/>  */}
          </div>
          <div className={style1.heading3}>
            <h2>Events:</h2>
          </div>

          <div className={style1.carousel}>
            <Carousel itemsToShow={2} isRTL={false}>
              <Image src={w1} alt="decoration" />
              <Image src={Ring} alt="decoration" />

              <Image src={birthday1} alt="decoration" />
              <Image src={deco2} alt="decoration" />

              <Image src={chair} alt="decoration" />

            </Carousel>
          </div>

          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Features</h1>
              {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
              <div className="flex mt-6 justify-center">

                <div className="w-16 h-1 rounded-full bg-yellow-700 inline-flex"></div>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="flex-grow border border-black rounded-lg p-4 bg-brown-300 mb-10">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-yellow-700 mb-5 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">EventPlanner</h2>
                  <p className="leading-relaxed text-base">Event planning, design  within time limits. Working with clients to identify their needs
                    and ensure customer satisfaction,Organizing facilities and details such as decorations, catering,
                    location,  special guests etc.</p>
                </div>

              </div>

              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="flex-grow border border-black rounded-lg p-4 bg-brown-100 mb-10">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-yellow-700 mb-5 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>


                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Decoration</h2>
                  <p className="leading-relaxed text-base">
                    Our team specializes in crafting mesmerizing lighting and flower arrangements that illuminate your venue with warmth and sophistication
                    our skilled decorators also excel in creating breathtaking floral arrangements.</p>
                </div>


              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="flex-grow border border-black rounded-lg p-4 bg-brown-100 mb-10">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-amber-100 text-yellow-700 mb-5 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>

                  <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Catering</h2>
                  <p className="leading-relaxed text-base"> Our catering team offers professional service and seamless coordination to ensure that every aspect of your dining experience is flawless,
                    From menu planning , allowing you to relax and enjoy your event while we take care of the rest.</p>
                </div>

              </div>
            </div>
            {/* <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Button</button> */}
          </div>

          <div className={style1.heading1}>
            <label htmlFor="city">SearchDecoration:</label></div>
          <div className={style1.container}>

            <div className={style1.input1}>
              <div className={style1.heading2}>
                <label htmlFor="district">Select District:</label></div>
              <select className={style1.s1} name="district" id="District" value={selectedDistrict} onChange={handleDistrictChange}>
                {loading ? (<option>Loading...</option>) : (
                  district.map((districtone, index) => (
                    <option key={index} value={districtone}>{districtone}</option>
                  ))
                )}

              </select>
            </div>
            <div className={style1.input1}>
              <div className={style1.heading2}>
                <label htmlFor="city">Select City:</label></div>
              <select className={style1.s1} name="city" id="city" value={selectedCity} onChange={handleCityChange}>
                {loading ? (<option value="">Loading...</option>) : (
                  city.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))
                )}


              </select>
            </div>

            <div className={style1.input1}>
              <div className={style1.heading2}>
                <label htmlFor="price">Select Price:</label></div>
              <select className={style1.s1} name="price" id="price" value={selectedPrice} onChange={handlePriceChange}>
                {loading ? (<option value="">Loading...</option>) : (
                  price.map((priceItem, index) => (
                    <option key={index} value={priceItem}>{priceItem}</option>
                  ))
                )}

              </select>
            </div>

            <div className={style1.input1}>
              <div className={style1.heading2}>
                <label htmlFor="Event">Select Event:</label></div>

              <select className={style1.s1} name="events" id="events" value={value.eventId} onChange={selectchange}>
                {loading ? (<option value="">Loading.....</option>) :
                  (events.map((event) => (
                    <option key={event.eventId} value={event.eventId}>
                      {event.eventName}
                    </option>
                  )))

                }

              </select>
            </div>

            {/* {loading ? (<option>Loading...</option>) :
              <div>
                {loading ? (<option><Loader /></option>) :
                  (
                    decorations.map((decoration, index) => (
                      <div key={index}>
                        <img src={decoration.imageUrl} alt="Decoration" height="200px" width="300px" />
                        <p>{decoration.eventName}</p>
                        <p>{decoration.price}</p>
                      </div>
                    ))
                  )

                    }
              </div>

            } */}

            {/* <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              {loading ? (
                <div><Loader /></div>
              ) : (
                decorations.map((decoration, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index} style={{ padding: '2rem 5rem', margin: '2rem 0' }}>
                    <Card>
                      <CardContent>
                        {Array.isArray(decoration.imageUrl) ? (
                          decoration.imageUrl.map((imageUrl: string, imageIndex: number) => (
                            <img key={imageIndex} src={imageUrl} alt="Decoration" style={{ width: '500px', height: '300px', objectFit: 'cover' }} />
                          ))
                        ) : (
                          <p>No images available</p>
                        )}
                        <div className={style.details}>
                          <div className={style.details1}>Event Name: {decoration.eventName}</div>
                          <div className={style.details1}>Price: {decoration.price}</div>
                          <div className={style.details1}>City: {decoration.CityName}</div>
                          <div className={style.details1}>District: {decoration.District}</div>
                        </div>
                        <div className={style.buttoncontainer}>
                          <button className={style.button}>view</button>
                          <button className={style.button}>Book Now</button>
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              )}
            </Grid> */}

            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              {decorations && decorations.map((decoration: Decoration, index: number) => (
                <Grid item xs={2} sm={4} md={4} key={index} style={{ padding: '2rem 5rem', margin: '2rem 0' }}>
                  <Card>
                    <CardContent>
                      {decoration.imageUrls && decoration.imageUrls.map((imageUrl: string, imageIndex: number) => (
                        <img key={imageIndex} src={imageUrl} alt="vendorDecorationImage" style={{ width: '700px', height: '300px', objectFit: 'cover' }} />
                      ))}
                      <div className={style.details}>
                        {/* <div className={style.details1}>EventName: {decoration.eventName}</div> */}
                        <div className={style.details1}>DecorationPrice: {decoration.price}</div>
                        {/* <div className={style.details1}>CityName: {decoration.cityName}</div>
                        <div className={style.details1}>District: {decoration.district}</div> */}
                      </div>
                      <div className={style.buttoncontainer}>
                        {/* <button className={style.button}>View</button> */}
                        {/* <button className={style.button} onClick={handleContinue}>Continue</button> */}

                        <button className={style.button} onClick={CtaringPage}>Continue</button>






                      </div>
                    </CardContent>

                  </Card>

                </Grid>
              ))}
            </Grid>

            {!open && ( // Show the button only if the dialog is not open
        <Button variant="outlined" className={style.b1} onClick={handleClickOpen}>
          Booked
        </Button>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Sucesss....!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Event book SuccessFully......!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>




            <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              {showCaterers && (
                caterers.map((caterer, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index} style={{ padding: '2rem 5rem', margin: '2rem 0' }}>
                    <Card>
                      <CardContent>
                        {/* Render images if available */}
                        <div style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
                          {caterer.images && caterer.images.map((imageUrl, imgIndex) => (
                            <img key={imgIndex} src={imageUrl} alt="Caterer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          ))}
                        </div>
                        <h3>Dish Name: {caterer.dishName}</h3>
                        <p>Price: {caterer.price}</p>
                        <button className={style.button} onClick={handleClickOpen}>Order</button>

                        <Dialog className={style.bg2}
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
                          <DialogTitle>Subscribe</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              To subscribe to this website, please enter your email address here. We
                              will send updates occasionally.
                            </DialogContentText>
                            <TextField
                              autoFocus
                              required
                              margin="dense"
                              id="name"
                              name="email"
                              label="Email Address"
                              type="email"
                              fullWidth
                              variant="standard"
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Subscribe</Button>
                          </DialogActions>
                        </Dialog>


                      </CardContent>
                    </Card>
                  </Grid>
                ))
              )}
            </Grid>



            {/* {showCaterers && (
                          <div>
                            {loading ? (<p><Loader /></p>) : (
                              caterers.map((caterer, index) => (
                                <div key={index}>
                                  <img src={caterer.imageUrl} alt="Caterer" style={{ width: '200px' }} />
                                  <h3>Dish Name: {caterer.dishName}</h3>
                                  <p>Price: {caterer.price}</p>
                                </div>
                              ))
                            )}
                          </div>
                        )} */}



            {/* {loading ? (<p><Loader /></p>) : (
              caterers.map((caterer, index) => (
                <div key={index}>
                  <img src={caterer.imageUrl} alt="Caterer" style={{ width: '200px' }} />
                  <h3>Dish Name: {caterer.dishName}</h3>
                  <p>Price: {caterer.price}</p>
                </div>
              ))
            )} */}





            {/* <div className={style1.input1}>
              <div className={style1.heading2}>
                <label htmlFor="Decoration">Decoration</label></div>
              <button className={style1.s1}>Decoration</button></div>

            <div className={style1.input1}>
              <div className={style1.heading2}>
                <label htmlFor="Catering">Catering</label></div>
              <button className={style1.s1}>Catering</button>
            </div> */}





          </div>

          <p className={Style.left}>
            Wedding Ceremony Hall
          </p>
          <div className="flex  flex-wrap -m-4" style={{ marginTop: '20px' }}>
            {imageFilenames.map((items, index) => (
              <div key={index} className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  {/* Generate image URL dynamically */}
                  <img src={items.imageurl} alt={index} className="object-cover w-full h-full" height="200" width="200" />
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
                  <Image src={Profile} height={600} width={250} />
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
                  <Image src={birthday1} height={100} width={300} />
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
                  <Image src={deco2} height={100} width={300} />
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
                  <Image src={ring2} height={100} width={300} />
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