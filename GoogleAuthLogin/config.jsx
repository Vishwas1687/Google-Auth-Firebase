// npm install firebase
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth' //add this

const firebaseConfig = {
  apiKey: "AIzaSyBIqZVKbFlhzz8m3i4lmRAS1BNmLEjo_nM",
  authDomain: "auth-login-4cb55.firebaseapp.com",
  projectId: "auth-login-4cb55",
  storageBucket: "auth-login-4cb55.appspot.com",
  messagingSenderId: "706056262142",
  appId: "1:706056262142:web:686ef457aea8edf17070af",
  measurementId: "G-4YD6231QJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);                  //add this
const provider=new GoogleAuthProvider(); //add this
export {auth,provider}                    //add this
