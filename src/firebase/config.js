import app from 'firebase/app';
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyASAoeZJbSk_gOWklQQnHiEyVwaj94skVo",
  authDomain: "job-listing-b5db0.firebaseapp.com",
  projectId: "job-listing-b5db0",
  storageBucket: "job-listing-b5db0.appspot.com",
  messagingSenderId: "161528975167",
  appId: "1:161528975167:web:1968c89edb0aad27e88d8a"
};


const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export {firebase, firestore, app}