
import Image from "next/image";
import React, { useEffect } from "react";
import cacke1 from "./../../../../public/cake1.png"
import punjabi from "./../../../../public/punjabi1.jpeg"
import gujrati from "./../../../../public/gujratidish.png"
import cacke2 from "./../../../../public/cake2.png"
import about2 from "./../../../../public/about2.png"
import NavBar from "@/app/navigation";

import punjabi2 from "./../../../../public/punjabidish2.pnh.jpg"
import style1 from "./../../../Styles/global.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';
import idaly from "./../../../../public/idaly.png'.jpg"
import paratha from "./../../../../public/paratha.jpeg"
import burger1 from "./../../../../public/burger1.jpeg"
import franki from "./../../../../public/franki.jpeg"
import catehome from "./../../../../public/caterer1.jpeg"
import "./style.css"
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from "../footer";



export const CatererHome = () => {
    const progressCircle = useRef<SVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);
    useEffect(() => {
        if (progressCircle.current && progressContent.current) {
            const svgElement = progressCircle.current;
            const spanElement = progressContent.current;
            // Your code to manipulate the SVG element and the span element
        }
    }, []);
    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', String(1 - progress));
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };
   
    //about2
    return (
        <div>
            <NavBar />
            <div style={{ marginLeft: '5rem', marginTop: '3rem', marginRight: '5rem', marginBottom: '2rem' }}>
                <Image src={catehome} alt={"/catererhome"} height={200} width={1800} />
            </div>

            <div style={{marginTop:'0rem' , fontSize: '50px',color:'black',marginLeft:'45rem',marginBottom:'1rem'}}>Welcome to Food Area</div>
            <div style={{marginLeft:'5rem',marginRight:'5rem'}}>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                slidesPerGroup={4} 
                loop={true} 
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {/* First set of three images */}
                <SwiperSlide>
                    <Image className="h-56 w-96" src={about2} alt="/catererhome" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="h-56 w-96" src={cacke1} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="h-56 w-96" src={cacke2} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>

                {/* Second set of three images */}
                <SwiperSlide>
                    <Image className="h-56 w-96" src={punjabi} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="h-56 w-96" src={punjabi2} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="h-56 w-96" src={idaly} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="h-56 w-96" src={burger1} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="h-56 w-96" src={franki} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>
            </Swiper>
            </div>
                   
        </div>
    )
}