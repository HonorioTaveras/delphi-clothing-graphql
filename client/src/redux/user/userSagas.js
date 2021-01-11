import {
  takeLatest, put, all, call, actionChannel,
} from 'redux-saga/effects';

import UserActionTypes from './userTypes';

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../../firebase/firebase.utils';
import {
  googleSignInFailure,
  googleSignInSuccess,
  emailSignInSuccess,
  emailSignInFailure,
} from './userActions';

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }),
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield actionChannel.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(
      emailSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }),
    );
  } catch (error) {
    put(emailSignInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
