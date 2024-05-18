"use client"

import React, { Suspense } from 'react';
import Profile from "./../../../public/home_image.jpeg"
//import "./../about/image.css"
//import Profile1 from "./../../../public/about1.png"
import Image from "next/image"
import { ImageList, ImageListItem } from '@mui/material';
import styles from './../about/image.module.css';
import yellow from "./../../../public/y1.png"
import Carousel from "@itseasy21/react-elastic-carousel";
import style1 from "./../../Styles/global.module.css"

import Ring from "./../../../public/ring.png"
import deco from "./../../../public/decoration.png"
import ring2 from "./../../../public/ring2.png"
import deco2 from "./../../../public/decoration1.png"
import birthday1 from "./../../../public/birthday1.png"
import Style from "./../home/card.module.css"
import w1 from "./../../../public/w1.png"
import chair from "./../../../public/chair.jpeg"
import Styles from "./../home/card.module.css" 
import haldi from "./../../../public/haldi12.jpeg"
import decorantal from "./../../../public/decorantals.jpeg"
import food1 from "./../../../public/food1.jpeg"


//import Link from "next/link";
// import { AnimationOnScroll } from "react-animate-on-scroll";
const About = () => {
  const data = [{ name: "yagnopavit", id: 1, src: "https://img.freepik.com/premium-photo/javanese-wedding-dress-wedding-ceremony-wedding-arch-wedding-moment-wedding-food_543567-2312.jpg?size=626&ext=jpg" },
  { name: "wedding", id: 2, src: "https://img.freepik.com/free-photo/glam-perfect-setting-tableware-appliances_8353-9912.jpg?w=900&t=st=1710248765~exp=1710249365~hmac=02a5eb7cd3a75110b64180360e916c1817d865f14ee8a919df6abc03c8fe6dcb" },
  { name: "ring ceremony", id: 3, src: "https://img.freepik.com/free-photo/white-daylight-illuminates-wooden-hangar-prepared-wedding_8353-788.jpg?w=900&t=st=1710248810~exp=1710249410~hmac=02d1a567eac58eab0f9eaee7824ebdf8b983c1d8b059370a4763fb2285c19674" },
  { name: "birthday celebration", id: 4, src: "https://www.pexels.com/photo/a-kid-opening-a-present-at-a-party-7099957/" }];
  return (<div>

    {/* <div className={styles.image_container}>
        <Image src={Profile} width={900} height={500} alt="home image"/>
     
        </div> */}
    <div className={styles.image_container}>
      <Image src={yellow} alt="home page" layout="responsive" />
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

    <div className={style1.carousel1}>
      <Carousel itemsToShow={2} isRTL={false}>
        <Image src={w1} alt="decoration" />
        <Image src={Ring} alt="decoration" />

        <Image src={birthday1} alt="decoration" />
        <Image src={deco2} alt="decoration" />

        <Image src={chair} alt="decoration" />

      </Carousel>
    </div>

    <div className={Styles.heading1}>Services</div>
    <div className={Styles.s_main}>
        <div className={Styles.service_container}>
          <div className={Styles.service_image_div}>
            <Image
              src={decorantal}
              alt="Manager"
              className={Styles.service_image}
              width={1000}
              height={1400}
            />
          </div>

   <div className={Styles.service_description_container}>
            <div className={Styles.service_description_title}>
              <h1>Decoration</h1>
            </div>
            <div className={Styles.service_description_summary}>
              <p>
              At Event Maker,
              Also provide latest Decoration Base on Selected Events here Multiple Decration available so that user can easily select decoration flexible manner.
              </p>
            </div>
          </div>
        </div>


      
<div className={Styles.service_container}>
  <div className={Styles.service_description_container}>
    <div className={Styles.service_description_title}>
      <h1>Catering</h1>
    </div>
    <div className={Styles.service_description_summary}>
      <p>
      Elevate your special day to extraordinary heights with our meticulously crafted wedding ceremony services. 
      At EventMaker,
       we understand the significance of this once-in-a-lifetime event, 
       and we are committed to turning your dreams into reality
      </p>
    </div>
  </div>
  <div className={Styles.service_image_div}>
    <Image
      src={food1}
      alt="Manager"
      className={Styles.service_image}
      width={1600}
      height={1600}
    />
  </div>
</div>






    </div>
    {/* <div>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Testimonials</h1>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/106x106" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Alper Kamu</span>
              <span className="text-gray-500 text-sm">DESIGNER</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</div> */}






  </div>)
}
export default About;
