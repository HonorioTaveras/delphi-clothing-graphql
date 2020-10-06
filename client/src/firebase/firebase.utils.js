import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDROo45HTSv3lN-KA2y4yHmexK9QEb27DY',
  authDomain: 'delphi-db.firebaseapp.com',
  databaseURL: 'https://delphi-db.firebaseio.com',
  projectId: 'delphi-db',
  storageBucket: 'delphi-db.appspot.com',
  messagingSenderId: '813160444227',
  appId: '1:813160444227:web:16341cc2cbddc4e51dbff6',
  measurementId: 'G-Y833RJ5CT6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
