import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNfAGR2GqwxOOGMcyxXIo_e6uhV9PP3TE",
  authDomain: "mynotes-23ce4.firebaseapp.com",
  projectId: "mynotes-23ce4",
  storageBucket: "mynotes-23ce4.appspot.com",
  messagingSenderId: "350549813439",
  appId: "1:350549813439:web:f00e1be1e698570214be0a",
  measurementId: "G-BWVWL4PY4C",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
