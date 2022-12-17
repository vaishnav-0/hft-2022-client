// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";



// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGF3e38FjQw4jKH0QXyQYffXbGtoobfws",
  authDomain: "beclean-c25cc.firebaseapp.com",
  projectId: "beclean-c25cc",
  storageBucket: "beclean-c25cc.appspot.com",
  messagingSenderId: "498051882819",
  appId: "1:498051882819:web:d460d266feb8534a28d9f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app); 
const auth = getAuth(app);

export {firestore, storage, auth}