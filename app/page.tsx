import Image from "next/image";
import {API_BASE} from './config/constant'
export default function Home() {
  //whole env data get
  console.log(process.env)
  //type of mode represents
  console.log(process.env.NODE_ENV)
  console.log(process.env.db_password)
  console.log(process.env.CUSTOM_MODE)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        process.env.CUSTOM_MODE=='testing'?
        <h2>you are on testing mode</h2>:
        <h2>you are on not testing mode</h2>
      }
      {
        process.env.NODE_ENV=='development'?
        <h1>you are on development mode</h1>:
        <h1>you are on production mode</h1>
      }
      <h3>Environment varables</h3>
      {
        API_BASE
      }
    </main>
  );
}
