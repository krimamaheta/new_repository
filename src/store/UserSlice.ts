// 'use client'
// // import LogInUser from "@/app/api/LogInUser";
// import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { LogInUser } from "./UserAction";
// import { useReducer } from "react";

// interface UserState {
//     loading:boolean;
//     user:null|User;
//     error:null|string;
    
// }
// interface User{

// }
// // const LogInUser=createAsyncThunk(
// //     'user/loginUser',
// //     async(values)=>{
// //         const request=await axios.post(`https://localhost:7272/Api/Auth/login`,values);
// //         const response=await request.data.data;
// //         localStorage.setItem('user',JSON.stringify(response));
// //         return response;
// //     }
// //   );
// const initialState: UserState = {
//     loading: false,
//     user: null as any,
//     error: null as string|null,
//   };

 

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         setLoading(state, action) {
//             state.loading = action.payload;
//         },
//         setUser(state, action) {
//             state.user = action.payload;
//         },
//         setError(state, action) {
//             state.error = action.payload;
//         },
//     },
//     extraReducers:(builder)=>{
//         builder
//         .addCase(LogInUser.pending,(state)=>{
//             state.loading=true;
//             state.user=null;
//             state.error=null;
//         })
//         .addCase(LogInUser.fulfilled,(state,action)=>{
//             state.loading=false;
//             state.user=action.payload;
//             state.error=null;
//         })
//         .addCase(LogInUser.rejected,(state,action)=>{
//             state.loading=false;
//             state.user=null;
//             console.log(action.error.message)
//             if(action.error.message==='Request failed with status code 401'){
//                 state.error="Access Denied Invalid Credenials"
//             }
//             else{
//                 state.error=action.error.message;
//             }
//         })
//     }
 
//     // get reducers() {
//     //     return this.reducers;
//     // },
//     // set reducers(value) {
//     //     this.reducers = value;
//     // },
//   });
// export default userSlice.reducer;
// // export const { setLoading, setUser, setError } = userSlice.actions;

// // export default userSlice.reducer;
// // import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// // import { RootState } from './store'; // Define RootState type if needed

// // interface UserState {
// //   user: string | null;
// // }

// // const initialState: UserState = {
// //   user: null,
// // };

// // const userSlice = createSlice({
// //   name: 'user',
// //   initialState,
// //   reducers: {
// //     setUser(state, action: PayloadAction<string>) {
// //       state.user = action.payload;
// //     },
// //     clearUser(state) {
// //       state.user = null;
// //     },
// //   },
// // });

// // export const { setUser, clearUser } = userSlice.actions;

// // export default userSlice.reducer;

// // // Selectors if needed
// // export const selectUser = (state: RootState) => state.user.user;
