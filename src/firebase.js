import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2C0C886i86onQpQ58Jb0_b7y9P6w4cs0",
  authDomain: "todo-app-db-301f4.firebaseapp.com",
  projectId: "todo-app-db-301f4",
  storageBucket: "todo-app-db-301f4.appspot.com",
  messagingSenderId: "1017526741816",
  appId: "1:1017526741816:web:6bb09f583aee2dbad8afcd",
  measurementId: "G-BS4TMT7TEL",
});

const db = firebaseApp.firestore();

export default db;
