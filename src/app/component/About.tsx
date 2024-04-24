"use client"

import React, { Suspense } from 'react'; 
import Profile from "./../../../public/home_image.jpeg"
//import "./../about/image.css"
//import Profile1 from "./../../../public/about1.png"
import Image from "next/image"
import { ImageList,ImageListItem } from '@mui/material';
import styles from './../about/image.module.css';


 //import Link from "next/link";
// import { AnimationOnScroll } from "react-animate-on-scroll";
 const About=()=>{
   const data=[{name:"yagnopavit",id:1,src:"https://img.freepik.com/premium-photo/javanese-wedding-dress-wedding-ceremony-wedding-arch-wedding-moment-wedding-food_543567-2312.jpg?size=626&ext=jpg"},
   {name:"wedding",id:2,src:"https://img.freepik.com/free-photo/glam-perfect-setting-tableware-appliances_8353-9912.jpg?w=900&t=st=1710248765~exp=1710249365~hmac=02a5eb7cd3a75110b64180360e916c1817d865f14ee8a919df6abc03c8fe6dcb"},
    {name:"ring ceremony",id:3,src:"https://img.freepik.com/free-photo/white-daylight-illuminates-wooden-hangar-prepared-wedding_8353-788.jpg?w=900&t=st=1710248810~exp=1710249410~hmac=02d1a567eac58eab0f9eaee7824ebdf8b983c1d8b059370a4763fb2285c19674" },
  {name:"birthday celebration",id:4,src:"https://www.pexels.com/photo/a-kid-opening-a-present-at-a-party-7099957/"}];
    return(<div>
        
        <div className={styles.image_container}>
        <Image src={Profile} width={900} height={500} alt="home image"/>
     
        </div>
      
        <div>

        </div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">Event management is the application of project management to the creation and development of small and/or large-scale personal or corporate events such as festivals, conferences, ceremonies, weddings, formal parties, concerts, or conventions. It involves studying the brand, identifying its target audience, devising the event concept, and coordinating the technical aspects before actually launching the event</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
      {/* <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
      <p className="text-gray-500">Senior Product Designer</p> */}
    </div>
  </div>
</section>
        <div>
    {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
  {data.map((item) => (
    <ImageListItem key={item.img}>
      <img
        // srcSet={`${item.src}`}
        src={`${item.src}`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
        {/* {data.map((item) => (
         <Image key={item.id} src={item.src} alt={item.name} width={500} height={1000}  />
        ))} */}
        </div> */}
        
    </div>)
 }
 export default About;
