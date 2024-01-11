import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDjcH5HewMIHl_tPax3lFn2XnF1gy98qio",
  authDomain: "proyecto-e8b77.firebaseapp.com",
  projectId: "proyecto-e8b77",
  storageBucket: "proyecto-e8b77.appspot.com",
  messagingSenderId: "903136181575",
  appId: "1:903136181575:web:63762539b55d84f2e1e062"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);