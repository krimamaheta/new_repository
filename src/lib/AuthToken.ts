"use server"
import { NextPageContext } from "next";
import { cookies as cookieNext } from "next/headers";
const cookieAge = 60 * 60 * 24; // 24 hours

// export class AuthToken {

//   static remove() {
//     cookieNext().delete("token");
//   }


// }

export const getToken=async ()=>{
    const cooToken=cookieNext().get('token')
    return cooToken;

}

export const  setToken=async (token: string, ctx?: NextPageContext)=> {
    console.log("token ",token)
    await cookieNext().set("token",token)
  }

export const removeToken=async()=>{
    await cookieNext().delete('token')
}
