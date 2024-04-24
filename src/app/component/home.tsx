"use client"
import Image from "next/image";
import Profile3 from "./../../../public/home1.png"
import Pro from "./../../../public/chair.jpeg"
import { Roboto } from 'next/font/google'
import Home1 from "./../../../public/home1.png"
import About2 from "./../../../public/about2.png"
import Birthday from "./../../../public/birthday.jpeg"
import HomeImage from "./../../../public/home_image.jpeg"
import Thread from "./../../../public/thread1.png"
import ring from "./../../../public/ring1.png"
import wed1 from "./../../../public/wed1.png"
import { jsx } from "@emotion/react";
import  Style  from "./../about/image.module.css";
import Styles from "./../home/card.module.css" 
import b1 from "./../../../public/b1.png"
import annyversary from "./../../../public/anniversary.png"
//import Navbar from "./navigation"
// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })

interface HomeProps{
  children:React.ReactNode;
}
// const Home:({children:HomeProps}):JSX.Element = ()=>{
  export const Home = ():JSX.Element=>{
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
     <div className={Styles.heading}>
        We help our candidates plan and design unforgettable events and share with their guests so they can spend more time creating beautiful  memories.
      </div>
      <div className={Style.image_container}>
        <Image src={HomeImage} alt="home page" layout="responsive"/>  
      </div>

      <section className="text-gray-600 body-font">
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
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">EventMaker</h2>
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
      
        
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Decorentals</h2>
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


<div className={Styles.s_main}>
  <div className={Styles.service_container}>
          <div className={Styles.service_image_div}>
            <Image
              src={ring}
              alt="Manager"
              className={Styles.service_image}
              width={1800}
              height={1600}
            />
          </div>

   <div className={Styles.service_description_container}>
            <div className={Styles.service_description_title}>
              <h1>Ring Ceremony</h1>
            </div>
            <div className={Styles.service_description_summary}>
              <p>
              At Event Maker,
       we understand the importance of this cherished moment in your journey together, 
       and we are dedicated to ensuring that every detail of your ring ceremony is nothing short of perfection.
    From the elegant décor to the exquisite floral arrangements, our team of experienced event planners will work
    closely with you to bring your vision to life.
              </p>
            </div>
          </div>
        </div>

<div className={Styles.service_container}>
  <div className={Styles.service_description_container}>
    <div className={Styles.service_description_title}>
      <h1>Wedding Ceremony</h1>
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
      src={wed1}
      alt="Manager"
      className={Styles.service_image}
      width={1800}
      height={1600}
    />
  </div>
</div>



<div className={Styles.service_container}>
          <div className={Styles.service_image_div}>
            <Image
              src={Thread}
              alt="Manager"
              className={Styles.service_image}
              width={1800}
              height={1600}
            />
          </div>

   <div className={Styles.service_description_container}>
            <div className={Styles.service_description_title}>
              <h1>Yagnopavit Ceremony</h1>
            </div>
            <div className={Styles.service_description_summary}>
              <p>
              Embark on a sacred journey of spiritual growth and knowledge with our Upanayan Sanskar ceremony services.
               At EventMaker, we recognize the profound significance of this
               traditional Hindu rite of passage and are honored to help you celebrate this important 
               milestone in your childs life.
              </p>
            </div>
          </div>
        </div>

        <div className={Styles.service_container}>
  <div className={Styles.service_description_container}>
    <div className={Styles.service_description_title}>
      <h1>Birthday Ceremony</h1>
    </div>
    <div className={Styles.service_description_summary}>
      <p>
      Make every birthday a memorable occasion with our exceptional birthday celebration services.
       At EventMaker, we understand the importance of 
      commemorating another year of life, and we are committed 
      to creating unforgettable moments for you and your children
      </p>
    </div>
  </div>
  <div className={Styles.service_image_div}>
    <Image
      src={b1}
      alt="Manager"
      className={Styles.service_image}
      width={1800}
      height={1600}
    />
  </div>
</div>

<div className={Styles.service_container}>
          <div className={Styles.service_image_div}>
            <Image
              src={annyversary}
              alt="Manager"
              className={Styles.service_image}
              width={1600}
              height={1000}
            />
          </div>

   <div className={Styles.service_description_container}>
            <div className={Styles.service_description_title}>
              <h1>Anniversary party</h1>
            </div>
            <div className={Styles.service_description_summary}>
              <p>
              Mark the milestone of your enduring love and commitment with our bespoke wedding 
              anniversary celebration services. At Event Maker, we believe that every love story 
              deserves to be celebrated in style, and we are dedicated to creating unforgettable 
              moments that honor your journey together.
              </p>
            </div>
          </div>
        </div>




</div>   
</section>

      {/* <div className="i2 flex">
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
        <div className="image2">
          <Image src={Pro} alt="wed image" height={200} width={200} layout="responsive"/>
        </div>
      </div>



      <div className="i2 flex">
      <div className="image2">
          <Image src={Home1} alt="wed image" layout="responsive" height={200} width={200}/>
        </div>
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
      </div>


      <div className="i2 flex">
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
        <div className="image2">
          <Image src={About2} alt="wed image" layout="responsive" />
        </div>
      </div>



      <div className="i2 flex">
      <div className="image2">
          <Image src={Birthday} alt="wed image" layout="responsive" />
        </div>
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
      </div>

      <div className="i2 flex">
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
        <div className="image2">
          <Image src={Thread} alt="wed image" layout="responsive"/>
        </div>
      </div>

      <div className="i2 flex">
      <div className="image2">
          <Image src={ring} alt="wed image" layout="responsive"/>
        </div>
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
      </div>


      <div className="i2 flex">
        <div className="flex-1 p-8">
          <h2>
            We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality. So you can focus on creating beautiful lasting memories with your fiance and loved ones.
          </h2>
        </div>
        <div className="image2">
          <Image src={wed1} alt="wed image" layout="responsive"/>
        </div>
      </div> */}

    
    </main>
  );
}


