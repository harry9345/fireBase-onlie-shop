import firebase from "firebase/app";
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
import "firebase/functions";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: " YOUR API KEY",
  authDomain: "YOUR DATA BASE DOMAIN ",
  databaseURL: " YOUR DATA BASE URL ",
  projectId: " ",
  storageBucket: " ",
  messagingSenderId: " ",
  appId: " API ID ",
  measurementId: " ",
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();
const fs = firebase;

export { auth, storage, db, fs };
