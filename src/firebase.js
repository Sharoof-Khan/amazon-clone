// import firebase from "firebase";
// import {initializeApp} from 'firebase/app'
// import {getFirestore} from 'firebase/firestore/lite'
// import {Auth} from 'firebase/auth'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT3bg3BMr9_C850GPOBsPp24GgBMId4oQ",
  authDomain: "clone-c3fbe.firebaseapp.com",
  projectId: "clone-c3fbe",
  storageBucket: "clone-c3fbe.appspot.com",
  messagingSenderId: "163129045935",
  appId: "1:163129045935:web:39eb0ba3e9601f6d76755a",
  measurementId: "G-V6YEE0JLZY"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export{auth,db}

