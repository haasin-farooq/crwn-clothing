import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAXNSBtXD7PS_95jTyOSl3QaMc5f4x6BbQ",
    authDomain: "crwn-clothing-24428.firebaseapp.com",
    databaseURL: "https://crwn-clothing-24428.firebaseio.com",
    projectId: "crwn-clothing-24428",
    storageBucket: "crwn-clothing-24428.appspot.com",
    messagingSenderId: "364628428676",
    appId: "1:364628428676:web:5a0acf78d0482f3a05ffd1",
    measurementId: "G-Y22C29510X"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider(); // Gives us access to the Google Auth Provider class from the authentication library
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => {
      auth.signInWithPopup(provider);
  }

  export default firebase;