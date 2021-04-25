import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBb68LY77LaRP5HpDc_woCOcBqUNQLdhqY",
  authDomain: "crowndb-b05a0.firebaseapp.com",
  projectId: "crowndb-b05a0",
  storageBucket: "crowndb-b05a0.appspot.com",
  messagingSenderId: "866653539626",
  appId: "1:866653539626:web:171ca6fba2c6b228e1a253",
  measurementId: "G-DZGBZ4P6N2",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email, 
        createdAt
      })
    } catch (error) {
      console.log('error in creating user.', error.message);
    }
  }
  return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
