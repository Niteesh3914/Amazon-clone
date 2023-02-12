// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
//import { getFirestore } from "firebase/firestore/lite";
//import {auth}  from "./firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCb_MnHgbpICluwwLlCWoj6_NgVOPXMt3U",
    authDomain: "clone-73938.firebaseapp.com",
    projectId: "clone-73938",
    storageBucket: "clone-73938.appspot.com",
    messagingSenderId: "314560889742",
    appId: "1:314560889742:web:cc993ac47e1e2c8a921adf",
    measurementId: "G-WJT6MWXVX7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export {db, auth};
export default firebase;