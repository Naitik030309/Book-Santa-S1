import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyDUXmKrxm5pZ0cuqEwMjBELbuRMAjDDEIU",
    authDomain: "book-santa-5ba9c.firebaseapp.com",
    projectId: "book-santa-5ba9c",
    storageBucket: "book-santa-5ba9c.appspot.com",
    messagingSenderId: "364530392306",
    appId: "1:364530392306:web:8068d941288ccbb9c3046b"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();