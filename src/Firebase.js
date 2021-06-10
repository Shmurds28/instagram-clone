// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDo7YVoM6hI2G_tZrU30owbH6zTgGxq3NA",
    authDomain: "instagram-clone-9edfc.firebaseapp.com",
    projectId: "instagram-clone-9edfc",
    storageBucket: "instagram-clone-9edfc.appspot.com",
    messagingSenderId: "153084500775",
    appId: "1:153084500775:web:5644f3ad145b7253a4a702",
    measurementId: "G-0YWHMHH9CZ"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export {db, auth, storage};
