import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCOo7IAjE6TTryVy4z_9agx-_itwP8-W60",
    authDomain: "signal-clone-dpm-build.firebaseapp.com",
    projectId: "signal-clone-dpm-build",
    storageBucket: "signal-clone-dpm-build.appspot.com",
    messagingSenderId: "1095106416375",
    appId: "1:1095106416375:web:501e6ca7ed666c56ff4df2"
  };

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };