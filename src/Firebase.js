import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDVMhlnoGl_Ot_7IY18uOfUMAaP_PjtbFs",
  authDomain: "picklemall.firebaseapp.com",
  projectId: "picklemall",
  storageBucket: "picklemall.appspot.com",
  messagingSenderId: "159498687784",
  appId: "1:159498687784:web:0750f2390a21586fdaec1d",
  measurementId: "G-4X06GHMWS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);