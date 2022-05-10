// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGRLEo588f7AaIXRZJ689ihHodBXXwVac',
  authDomain: 'vue-music-e3f76.firebaseapp.com',
  projectId: 'vue-music-e3f76',
  storageBucket: 'vue-music-e3f76.appspot.com',
  messagingSenderId: '680324413744',
  appId: '1:680324413744:web:74545c867458181c0f30f5',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};
