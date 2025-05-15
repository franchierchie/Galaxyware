import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useForm } from './useForm';
import { startCreatingUserWithEmailPassword } from '../store';

// Keep formData like this to avoid a loop
const formData = {
  displayName: '',
  email: '',
  password: '',
}

const formValidations = {
  email: [(value) => value.includes('@') && value.includes('.com'), 'Please enter a valid email address'],
  password: [(value) => value.length >= 6, 'Password must be at least 6 characters long'],
  displayName: [(value) => value.length >= 1, 'A name is required'],
}

export const useRegisterPage = () => {
  const { status, errorMessage } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm( formData, formValidations );
  
  const onSubmit = ( e ) => {
    e.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;
    
    dispatch( startCreatingUserWithEmailPassword( formState ) );
  }

  return {
    errorMessage,
    isCheckingAuthentication,
    displayName, email, password,
    displayNameValid, emailValid, passwordValid,

    formSubmitted,
    onInputChange,
    onSubmit,
  }
}
