// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import React from "react";
// import  hostname  from "./page";
// interface LoginData {
//     // Define the shape of your login data here
//     email: string;
//     password: string;
//   }
  
// //   interface UserData {
// //     email: string;
// //     password: string;
// //     // Define the shape of your user data here
// //     // Adjust this according to the response structure from your API
// //   }
  
//   export const LogInUser = createAsyncThunk<LoginData>(
//     'user/loginUser',
//     async (values) => {
//       const request = await axios.post<any>('https://localhost:7272/Api/Auth/login', values);
//       const response = await request.data.data;
//       localStorage.setItem('user', JSON.stringify(response));
//       return response;
//     }
//   );
// //  export default LogInUser;