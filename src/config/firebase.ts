import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKNaWcqPrk27IefuEhYlDogCXfEtSkG_0",
  authDomain: "ethbvoting.firebaseapp.com",
  projectId: "ethbvoting",
  storageBucket: "ethbvoting.appspot.com",
  messagingSenderId: "74021962137",
  appId: "1:74021962137:web:e9d75d7875acf14996d308",
  measurementId: "G-8YQLNZ56K9"
};

const app = initializeApp(firebaseConfig);
const db=getFirestore();
const storage=getStorage(app);
const auth=getAuth();
export {db,app,storage,auth};