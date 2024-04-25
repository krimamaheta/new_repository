"use client"
import Image from "next/image";
import Profile3 from "./../../public/home_image.jpeg"
import Pro from "./../../public/chair.jpeg"
import { Roboto } from 'next/font/google'
import Home1 from "./../../public/home1.png"
import About2 from "./../../public/about2.png"
import Birthday from "./../../public/birthday.jpeg"
import Thread from "./../../public/thread1.png"
import ring from "./../../public/ring1.png"
import wed1 from "./../../public/wed1.png"
import { jsx } from "@emotion/react";
//import{ Home as ComponentHome} from "./component/home";
import { LandingPage as ComponentLandingPage, LandingPage } from "./component/LandingPage";
import { Provider } from "react-redux";
import NavBar from "./navigation";
import Footer from "./componets/footer";
import store from "@/Redux/store";

//import store from "@/Redux/store";


//import Navbar from "./navigation"
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})



interface HomeProps{
  children:React.ReactNode;
}
 export default function Home({children}:HomeProps):JSX.Element{
  return (
    <>
    <Provider store={store}>
      
      <NavBar/>
      <LandingPage />
      <Footer/>
      </Provider>
      {/* <ComponentHome /> */}
      </>
   
  );
}
