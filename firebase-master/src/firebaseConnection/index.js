import firebase from "firebase/app";
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyD1aGrNVxcFUi5W9nLsBe41Uv82dYAYotY",
    authDomain: "aulapam01.firebaseapp.com",
    databaseURL: "https://aulapam01-default-rtdb.firebaseio.com",
    projectId: "aulapam01",
    storageBucket: "aulapam01.appspot.com",
    messagingSenderId: "13455005498",
    appId: "1:13455005498:web:41e07d010e61e5b99da203",
    measurementId: "G-Z32MYELGGN"
  };


  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;