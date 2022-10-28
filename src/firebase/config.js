// import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBb4noLKh925A6dE_I3pvSgo5n5DrkJlTQ",
  authDomain: "first-6a149.firebaseapp.com",
  projectId: "first-6a149",
  storageBucket: "first-6a149.appspot.com",
  messagingSenderId: "723185044121",
  appId: "1:723185044121:web:f5989d5e6efe79d09a4608",
  measurementId: "G-4JHCDKLM15"
};

export default firebase.initializeApp(firebaseConfig);
// export const firestore = firebase.firestore();