// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC5ZKszBW64RFf2Dz9r36cx95CK3A8J9wU",
  authDomain: "twitter-clone-c3763.firebaseapp.com",
  projectId: "twitter-clone-c3763",
  storageBucket: "twitter-clone-c3763.appspot.com",
  messagingSenderId: "391965260001",
  appId: "1:391965260001:web:d7b0e580e6f74511c11fa0",
  measurementId: "G-H6C5BQ7F18"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
