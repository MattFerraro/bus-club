// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3zi0rb7IRS_Nnxh9DQSo7VnsnEXflL_w",
    authDomain: "bus-club.firebaseapp.com",
    projectId: "bus-club",
    storageBucket: "bus-club.appspot.com",
    messagingSenderId: "820453723681",
    appId: "1:820453723681:web:c36d7e14527614acfd1d60",
    measurementId: "G-2RX5BMLMZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);