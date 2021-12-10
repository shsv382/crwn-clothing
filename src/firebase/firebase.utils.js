import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyArMcGXV1Zy017OKri3vg73sjQSiQI7GKc",
  authDomain: "crwn-db-d9d4d.firebaseapp.com",
  projectId: "crwn-db-d9d4d",
  storageBucket: "crwn-db-d9d4d.appspot.com",
  messagingSenderId: "109132335857",
  appId: "1:109132335857:web:62d87f1cf58cfb01137750"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;