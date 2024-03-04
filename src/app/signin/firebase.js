

// import { getAuth } from "firebase/auth";

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCJCb0mUu8XzdOKlCFtRlU6L-eJHiirZlM",
//     authDomain: "fir-sample-app-a795b.firebaseapp.com",
//     projectId: "fir-sample-app-a795b",
//     storageBucket: "fir-sample-app-a795b.appspot.com",
//     messagingSenderId: "314626496122",
//     appId: "1:314626496122:web:173a4122b5a0a5404f0dc3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// export { auth }
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}from"firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD83Ln9k9lCX362pIRg5lH5dKQueijfr44",
  authDomain: "fir-m-7e3a7.firebaseapp.com",
  projectId: "fir-m-7e3a7",
  storageBucket: "fir-m-7e3a7.appspot.com",
  messagingSenderId: "301173996488",
  appId: "1:301173996488:web:56626f2c0c64308e39defd",
  measurementId: "G-LSWVJ1MGGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth=getAuth(app);

export default function (){
    return(<>nothing is here</>)
}