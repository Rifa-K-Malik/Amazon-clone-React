import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBi5G-WWIh8PRT7KPCEXISsQeQxjpK61Do",
    authDomain: "clone-39359.firebaseapp.com",
    projectId: "clone-39359",
    storageBucket: "clone-39359.appspot.com",
    messagingSenderId: "466022635425",
    appId: "1:466022635425:web:45f612895135f99efadde0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth };