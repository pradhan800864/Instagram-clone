import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCKTHRqXoM9qvEPOU8iBEHNqVQR4Xpx59w",
    authDomain: "instagram-clone-react-45ce8.firebaseapp.com",
    projectId: "instagram-clone-react-45ce8",
    storageBucket: "instagram-clone-react-45ce8.appspot.com",
    messagingSenderId: "539756865605",
    appId: "1:539756865605:web:f18ae1d9ac20afdc249b2c",
    measurementId: "G-61FESN7NJF" 
});

    const db= firebaseApp.firestore();
    const auth = firebase.auth();
    const storage = firebase.storage();

    export {db , auth, storage};

    // export default db;