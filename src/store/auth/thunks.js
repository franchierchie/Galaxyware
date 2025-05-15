import { loginWithEmailPassword, logOutFireBase, registerWithEmailPassword, signInWithGoogle } from '../../firebase/providers';
import { clearEcommerceSliceLogOut } from '../ecommerce';
import { checkingCredentials, login, logOut } from './authSlice';

export const startGoogleSignIn = () => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() );

    const result = await signInWithGoogle();
    if ( !result.ok ) return dispatch( logOut({ errorMessage: result.errorMessage }) );

    dispatch( login( result ) );
  }
}

export const startCreatingUserWithEmailPassword = ({ displayName, email, password }) => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() );

    const resp = await registerWithEmailPassword({ displayName, email, password });
    if ( !resp.ok ) return dispatch( logOut({ errorMessage: resp.errorMessage }) );

    dispatch( login( resp ) );
  }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async( dispatch ) => {
    dispatch( checkingCredentials() );

    const resp = await loginWithEmailPassword({ email, password });
    if ( !resp.ok ) return dispatch( logOut({ errorMessage: resp.errorMessage }) );

    dispatch( login( resp ) );
  }
}

export const startLogOut = () => {
  return async( dispatch ) => {
    await logOutFireBase();

    localStorage.removeItem('Galaxyware__products');
    localStorage.removeItem('Galaxyware__filters');
    localStorage.removeItem('Galaxyware__cart');
    localStorage.removeItem('Galaxyware__route');

    dispatch( clearEcommerceSliceLogOut() );
    dispatch( logOut() );
  }
}