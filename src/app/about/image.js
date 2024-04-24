
import Profile from "./../../../public/home_image.jpeg"
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ImagesAnimate=()=>{
    return(
        <div>
            <AnimationOnScroll animateIn="animate__zoomIn" duration={0.3}>
                <Image src={Profile} alt="Mask Image" width={1080} height={720} className="mask" />
            </AnimationOnScroll>
        </div>
    )
}
export default ImagesAnimate;