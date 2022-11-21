import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCohcRyelCBe-6SkicWj31CvlmOORrSDUk",
    authDomain: "firecontact-c5c7f.firebaseapp.com",
    databaseURL: "https://firecontact-c5c7f-default-rtdb.firebaseio.com",
    projectId: "firecontact-c5c7f",
    storageBucket: "firecontact-c5c7f.appspot.com",
    messagingSenderId: "653699310118",
    appId: "1:653699310118:web:faf71b694e21dfee3afce7"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;