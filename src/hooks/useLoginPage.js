import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from './';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../store';

// Keep formData like this to avoid a loop
const formData = {
  email: '',
  password: '',
}

export const useLoginPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const { email, password, onInputChange, formState } = useForm( formData );

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn( formState ) );
  }

  const onSubmit = ( e ) => {
    e.preventDefault();
    dispatch( startLoginWithEmailPassword( formState ) );
  }

  return {
    errorMessage,
    email, password, onInputChange,

    isAuthenticating,
    onGoogleSignIn,
    onSubmit,
  }
}
