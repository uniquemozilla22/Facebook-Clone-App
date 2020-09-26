import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA8kjSL6thGEEGdNHyCgMt2f2lbLa6hwrM",
  authDomain: "facebook-clone-35df7.firebaseapp.com",
  databaseURL: "https://facebook-clone-35df7.firebaseio.com",
  projectId: "facebook-clone-35df7",
  storageBucket: "facebook-clone-35df7.appspot.com",
  messagingSenderId: "962714274551",
  appId: "1:962714274551:web:ec40c8767008bd2a19a1f2",
  measurementId: "G-712ZLN52DF"
};


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth,provider}

export default db;