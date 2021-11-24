import app from 'firebase/app';
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyASAoeZJbSk_gOWklQQnHiEyVwaj94skVo",
  authDomain: "job-listing-b5db0.firebaseapp.com",
  projectId: "job-listing-b5db0",
  storageBucket: "job-listing-b5db0.appspot.com",
  messagingSenderId: "161528975167",
  appId: "1:161528975167:web:9583bebb06ee01cce88d8a"
};


const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export {firebase, firestore, app}