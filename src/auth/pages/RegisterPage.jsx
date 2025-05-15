import { Link } from 'react-router-dom';

import { AuthLayout } from '../layout';
import { useRegisterPage } from '../../hooks';

export const RegisterPage = () => {
  const {
    displayName,
    displayNameValid,
    email,
    emailValid,
    password,
    passwordValid,
    onInputChange,
    isCheckingAuthentication,
    onSubmit,
    formSubmitted,
    errorMessage,
  } = useRegisterPage();

  return (
    <AuthLayout
      title="Register"
    >
      <form onSubmit={ onSubmit } >
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              type="text"
              placeholder="John Doe"
            />

              {
                ( !!displayNameValid && formSubmitted ) && (
                  <div className="is-valid">
                    <img src="/icons/circle-alert.svg" alt="alert icon" />
                    <p>{ displayNameValid }</p>
                  </div>
                )
              }
          </div> {/* close input-wrapper */}

          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={ email }
              onChange={ onInputChange }
              placeholder="johnDoe@example.com"
            />

            {
              ( !!emailValid && formSubmitted ) && (
                <div className="is-valid">
                  <img src="/icons/circle-alert.svg" alt="alert icon" />
                  <p>{ emailValid }</p>
                </div>
              )
            }
          </div> {/* close input-wrapper */}

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              value={ password }
              onChange={ onInputChange }
              type="password"
            />

            {
              ( !!passwordValid && formSubmitted ) && (
                <div className="is-valid">
                  <img src="/icons/circle-alert.svg" alt="alert icon" />
                  <p>{ passwordValid }</p>
                </div>
                )
            }

            <div className="change-auth-page">
              <p>Already have an account?</p>
              <Link to="/auth/login">Log In</Link>
            </div>
          </div> {/* close input-wrapper */}

          {
            (errorMessage) && (
              <div className="error-message">
                <img src="/icons/circle-alert.svg" alt="alert icon" />
                <p><span>Error:</span> { errorMessage }</p>
              </div>
            )
          }
          

          <input
            disabled={ isCheckingAuthentication }
            type="submit"
            value="Register"
            className="button button-primary"
          />
        </div> {/* close input-container */}
      </form>
    </AuthLayout>
  )
}
