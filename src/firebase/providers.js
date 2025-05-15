import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, uid } = result.user;

    return {
      ok: true,
      displayName, email, uid,
    }
    
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    }
  }
}

export const registerWithEmailPassword = async({ displayName, email, password }) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid } = resp.user;

    await updateProfile( FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      uid, email, displayName,
    }
    
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    }
  }
}

export const loginWithEmailPassword = async({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { displayName, uid } = resp.user;

    return {
      ok: true,
      displayName, email, uid,
    }
    
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    }
  }
}

export const logOutFireBase = async() => {
  return await FirebaseAuth.signOut();
}