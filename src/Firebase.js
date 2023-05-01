// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDVMhlnoGl_Ot_7IY18uOfUMAaP_PjtbFs",
//   authDomain: "picklemall.firebaseapp.com",
//   projectId: "picklemall",
//   storageBucket: "picklemall.appspot.com",
//   messagingSenderId: "159498687784",
//   appId: "1:159498687784:web:0750f2390a21586fdaec1d",
//   measurementId: "G-4X06GHMWS0",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const db = getFirestore(app);

// FOR DEV BUILD
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5LbzampH7HesfgFPaR9t4UPGGUYuOD9s",
  authDomain: "picklemall.firebaseapp.com",
  projectId: "picklemall",
  storageBucket: "picklemall.appspot.com",
  messagingSenderId: "159498687784",
  appId: "1:159498687784:web:06e48a67cd505b59daec1d",
  measurementId: "G-3LMB7FVTBW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
