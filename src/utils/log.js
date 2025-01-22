import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA52ykkawu9GfKwpChe8wkKoP-ktnqed74",
  authDomain: "luvportfolio.firebaseapp.com",
  projectId: "luvportfolio",
  storageBucket: "luvportfolio.appspot.com",
  messagingSenderId: "100014779654",
  appId: "1:100014779654:web:f79514779fb2334a3dc287",
  measurementId: "G-EBQ1QQWS0P"
};

const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);



// export const logGa = (eventName, eventParams = {}) => {
//   isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
// };

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA52ykkawu9GfKwpChe8wkKoP-ktnqed74",
  authDomain: "luvportfolio.firebaseapp.com",
  projectId: "luvportfolio",
  storageBucket: "luvportfolio.appspot.com",
  messagingSenderId: "100014779654",
  appId: "1:100014779654:web:f79514779fb2334a3dc287",
  measurementId: "G-EBQ1QQWS0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/