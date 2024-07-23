// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6MGdm3GmWUQBWasBwHfNA-4qhu8DOK5I",
  authDomain: "test-firebase-2fb9a.firebaseapp.com",
  projectId: "test-firebase-2fb9a",
  storageBucket: "test-firebase-2fb9a.appspot.com",
  messagingSenderId: "801112819667",
  appId: "1:801112819667:web:7ec621285e24a59b495126",
  measurementId: "G-V9Z6RRJWDP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { app, db };
