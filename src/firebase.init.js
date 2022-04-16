// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4Ra-Xwdi_8Ic3hqI0HQqOuDooG4fk4Ug",
    authDomain: "assignment-auth-f6130.firebaseapp.com",
    projectId: "assignment-auth-f6130",
    storageBucket: "assignment-auth-f6130.appspot.com",
    messagingSenderId: "547838545273",
    appId: "1:547838545273:web:fecab433da35428126f3a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
