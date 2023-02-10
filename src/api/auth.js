import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {app} from '../util/firebase.config';

const auth = getAuth(app);

export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredentials;
  } catch (error) {
    throw error;
  }
};

export const signUpWithEmailAndPassword = async (email, password) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredentials;
  } catch (error) {
    throw error;
  }
};

export const onAuthStateChangedObserver = (onUser, onNullUser) => {
  return onAuthStateChanged(auth, user => {
    if (user) {
      onUser(user);
    } else {
      onNullUser();
    }
  });
};

export const signOutFirebase = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
