/* eslint-disable consistent-return */
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user: ', err.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
