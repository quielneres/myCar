import * as firebase from 'firebase';
import 'firebase/firestore'; 

var firebaseConfig = {
    apiKey: "AIzaSyAgA0Kp4E5S4T0HtYF7skRg9qEWaXWTQk4",
    authDomain: "my-car-ffcb4.firebaseapp.com",
    databaseURL: "https://my-car-ffcb4.firebaseio.com",
    projectId: "my-car-ffcb4",
    storageBucket: "my-car-ffcb4.appspot.com",
    messagingSenderId: "777043822229",
    appId: "1:777043822229:web:d92664a44885fd92187d9c",
    measurementId: "G-J8HMZ2LN4M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export const database = firebase.database();