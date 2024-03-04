// // Import the functions you need from the SDKs you need
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// //import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCRKZN9bRxHIE4FiGpOX_Ns6xw8I-e-YOE",
//   authDomain: "fb-demo-18128.firebaseapp.com",
//   projectId: "fb-demo-18128",
//   storageBucket: "fb-demo-18128.appspot.com",
//   messagingSenderId: "549391726498",
//   appId: "1:549391726498:web:5fc621335d544df6f6a4fb",
//   measurementId: "G-3C2SHZ25Y5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);

//  const auth=getAuth(app);

//  export {auth};

 //2nd
 
 import { initializeApp } from "firebase/app";
 import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider}from'firebase/auth'
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAoViv3AKAqwpZ4otYkDL-veMxQBmKwTF8",
   authDomain: "sign-demo-d88b3.firebaseapp.com",
   projectId: "sign-demo-d88b3",
   storageBucket: "sign-demo-d88b3.appspot.com",
   messagingSenderId: "1039950250615",
   appId: "1:1039950250615:web:9d7dd5b4492e31395fbc72"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const provider=new GoogleAuthProvider();
 provider.setCustomParameters({
    prompt:'select_account'
 })

 export const auth=getAuth();
 export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

 export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,provider);