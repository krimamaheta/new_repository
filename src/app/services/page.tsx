"use client"
 import React from 'react';
 import Service from "../component/Service"
 import NavBar from '../navigation';
import Footer from '../componets/footer';

 const Servicepage=()=>{
  return(
    <div>
         <NavBar/>
        <Service/>
      <Footer/>
    </div>
  )
 }
 export default Servicepage;
// import Image from "next/image"
// import Profile from "./../../../public/ring1.png"
// import Birthday from "./../../../public/birthday.jpeg"
// import Ring from "./../../../public/ring.png"
// import deco from "./../../../public/decoration.png"
// import ring2 from "./../../../public/ring2.png"
// import deco2 from "./../../../public/decoration1.png"
// import birthday1 from "./../../../public/birthday1.png"
// const Service=()=>{
//     return(
//         <div>
//            <h1>services page</h1> 
          
// <section className="text-gray-600 body-font">
//   <div className="container px-5 py-24 mx-auto">
//         <div className='align:item:center'>
//         <div className="image1">
//         <Image src={deco2} alt="home page" layout="responsive"/>  
//       </div>
//         {/* <Image src={deco2} height={200} width={200}/>  */}
//         </div>
//     <div className="flex flex-wrap w-full mb-20">
    
//       <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
     
//         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Event Maker</h1>
//         <div className="h-1 w-20 bg-indigo-500 rounded"></div>
//       </div>
//       <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
//     </div>
   
//     <div className="flex flex-wrap -m-4">
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg">
//             <div className="h-40 rounded w-full object-cover object-center mb-6">
//             <Image src={Profile} height={600} width={250}/>
//             </div>
//           {/* <img className="h-40 rounded w-full object-cover object-center mb-6" src="~/public/ring1.png" alt="content"/> */}
//           {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Wedding Planning</h2>
//           <p className="leading-relaxed text-base">We’re here to take the vision and goals you have for the most important day of your lives and transform that into reality.  </p>
//         </div>
//       </div>
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg">
//         <div className="h-40 rounded w-full object-cover object-center mb-6">
//             <Image src={birthday1} height={100} width={300}/>
//             </div>
//           {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Birthday Celebration</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg">
//         <div className="h-40 rounded w-full object-cover object-center mb-6">
//             <Image src={deco2} height={100} width={300}/>
//             </div>
//           {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Decorantals</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//       <div className="xl:w-1/4 md:w-1/2 p-4">
//         <div className="bg-gray-100 p-6 rounded-lg">
//         <div className="h-40 rounded w-full object-cover object-center mb-6">
//             <Image src={ring2} height={100} width={300}/>
//             </div>
//           {/* <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3> */}
//           <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Ring Ceremony</h2>
//           <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//         </div>
//     )
// }
// export default Service;