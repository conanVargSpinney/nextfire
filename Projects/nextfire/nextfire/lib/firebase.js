import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAE5WJKl9_uqfQ--6t3x0LBsv-vTqKn6Rw",
  authDomain: "nextfire-73fb6.firebaseapp.com",
  projectId: "nextfire-73fb6",
  storageBucket: "nextfire-73fb6.appspot.com",
  messagingSenderId: "345226319193",
  appId: "1:345226319193:web:951b580bd0753e3b892848"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();