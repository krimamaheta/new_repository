import Image from "next/image";
import Profile from "./../../public/vercel.svg"

//font feature
import { Roboto } from "next/font/google";
const roboto=({
  width:'100',
  display:'swap',
  subset:['latin'],
  
})

export default function Home() {
  console.log(Profile);
  return (
    <main >
      <h2>internal image</h2>
      <Image src={Profile} height={200} width={200}/>
      <img  src={Profile.src} height={200} width={200}/>

      <h3>external image</h3>
      <Image  src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={200} width={200}/>

      <Image src="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600" height={200} width={200}/>

      <h2 style={{fontFamily:'bigelow',}}>font optimization</h2>

      <h1 style={{fontFamily:'Roboto',textDecoration:'underline'}}>font opt practise</h1>


    <h3 className={roboto.className}>font feature</h3>
    <h1>generate metadata example</h1>
    </main>
  );
}
