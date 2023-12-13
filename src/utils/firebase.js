// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbAoTwpqJ7PtX7NHRlTVGy__uVkQrEKIo",
  authDomain: "marineroweb-551e9.firebaseapp.com",
  projectId: "marineroweb-551e9",
  storageBucket: "marineroweb-551e9.appspot.com",
  messagingSenderId: "496096701623",
  appId: "1:496096701623:web:519e3d032fc1fd4e59b132",
  measurementId: "G-50K3BKFY65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};