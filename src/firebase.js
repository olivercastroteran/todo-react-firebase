import firebase from 'firebase/app';
import 'firebase/firebase-firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyALxFfR0URKw_Y-00fsUJ1lUpDT9DO1Trw',
  authDomain: 'todo-react-app-9e79f.firebaseapp.com',
  databaseURL: 'https://todo-react-app-9e79f.firebaseio.com',
  projectId: 'todo-react-app-9e79f',
  storageBucket: 'todo-react-app-9e79f.appspot.com',
  messagingSenderId: '155890156883',
  appId: '1:155890156883:web:c77c72d7eda440736e0da6',
  measurementId: 'G-4FNWJZ4242',
});

const db = firebaseApp.firestore();

export default db;
