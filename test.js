// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAd4i4S7IW5vX5K6vcIPWymsByrPSj95SA",
    authDomain: "mentorstvonext.firebaseapp.com",
    projectId: "mentorstvonext",
    storageBucket: "mentorstvonext.firebasestorage.app",
    messagingSenderId: "676966012228",
    appId: "1:676966012228:web:5a90bd9f3482ba6b0d7311",
    measurementId: "G-R8CM9YBJ3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);