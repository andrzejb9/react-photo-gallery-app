import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyalqsourFwXAHNboOlDTdDa8xShKpmg8",
  authDomain: "photo-gallery-app-1bbee.firebaseapp.com",
  projectId: "photo-gallery-app-1bbee",
  storageBucket: "photo-gallery-app-1bbee.appspot.com",
  messagingSenderId: "263942486038",
  appId: "1:263942486038:web:51c50f57b7544a8ffb1d37",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
