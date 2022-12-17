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
  apiKey: "AIzaSyAzAgq0r9HK5L7xwhzytC9_1JHN2v_gOgA",
  authDomain: "beclean-firebase.firebaseapp.com",
  projectId: "beclean-firebase",
  storageBucket: "beclean-firebase.appspot.com",
  messagingSenderId: "403241017104",
  appId: "1:403241017104:web:fd86bd98203ef4ac2a8f95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app); 
const auth = getAuth(app);

export {firestore, storage, auth}