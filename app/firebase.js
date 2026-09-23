import{initializeApp} from "firebase/app";
import{getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAd4i4S7IW5vX5K6vcIPWymsByrPSj95SA",
    authDomain: "mentorstvonext.firebaseapp.com",
    projectId: "mentorstvonext",
    storageBucket: "mentorstvonext.firebasestorage.app",
    messagingSenderId: "676966012228",
    appId: "1:676966012228:web:5a90bd9f3482ba6b0d7311",
    measurementId: "G-R8CM9YBJ3G"
};
const app=initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;