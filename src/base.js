import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD7MkPwZjxq2AeJDX7n2W1odmArE6tmpZw",
  authDomain: "catch-of-the-day-jorge-morais.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jorge-morais-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-jorge-morais",
  storageBucket: "catch-of-the-day-jorge-morais.appspot.com",
  messagingSenderId: "667541338631",
  appId: "1:667541338631:web:f2992127be0290fa7ec8a2",
  measurementId: "G-KRY6DM0YB4"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
