// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFikskwks-JunYPqLFp-yUuRbW3Chm3gA",
    authDomain: "admin-mlm-eb3f1.firebaseapp.com",
    projectId: "admin-mlm-eb3f1",
    storageBucket: "admin-mlm-eb3f1.appspot.com",
    messagingSenderId: "20749703527",
    appId: "1:20749703527:web:6983d639e6a3fdc27ff7c2",
    measurementId: "G-197JL9H2YZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;