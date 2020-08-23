import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBlUif6NQqCvaBVXoer9QUE3CuexgLxEzE",
    authDomain: "nawab-photo-studio.firebaseapp.com",
    databaseURL: "https://nawab-photo-studio.firebaseio.com",
    projectId: "nawab-photo-studio",
    storageBucket: "nawab-photo-studio.appspot.com",
    messagingSenderId: "717017647191",
    appId: "1:717017647191:web:b59127afa7947c678ffb12",
    measurementId: "G-N82JRG8CG8"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};
