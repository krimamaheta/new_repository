import React, { useEffect, useRef } from "react";
import Image from "next/image";
import decohome1 from "./../../../../public/decohome1.jpeg"
import decohome2 from "./../../../../public/decohome2.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import about1 from "./../../../../public/about1.png"
import about2 from "./../../../../public/about2.png"
import about3 from "./../../../../public/about3.png"
import award1 from "./../../../../public/award1.png"
import award2 from "./../../../../public/about2.png"
import w1 from "./../../../../public/wedding2.jpeg"
import baby2 from "./../../../../public/baby2.png"
import w2 from "./../../../../public/w2.png"
import w11 from "./../../../../public/w1.png"
import T1 from "./../../../../public/t1.jpeg"
import "./style.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const DecoratorHome=()=>{
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
    return(
        <div>
               
                <div style={{ marginLeft: '5rem', marginTop: '3rem', marginRight: '5rem', marginBottom: '2rem' }}>
                <Image src={decohome1} alt={"/catererhome"} height={200} width={1800} />
                </div>
                <div style={{marginTop:'0rem' , fontSize: '50px',color:'black',marginLeft:'40rem',marginBottom:'1rem'}}>Welcome to Decoration Area</div>
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
                    <Image className="h-56 w-96" src={about2} alt="/catererhome" height={200} width={200}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="h-56 w-96" src={decohome2} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="h-56 w-96" src={award1} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>

                
                <SwiperSlide>
                    <Image className="h-56 w-96" src={about3} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="h-56 w-96" src={T1} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="h-56 w-96" src={w1} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="h-56 w-96" src={w2} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className="h-56 w-96" src={w11} alt="/catererhome" height={200} width={200} />
                </SwiperSlide>
            </Swiper>
            </div>


        </div>
    )
}

export default DecoratorHome;