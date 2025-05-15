import { Link } from 'react-router-dom';

import { AuthLayout } from '../layout';
import { useLoginPage } from '../../hooks';

export const LoginPage = () => {
  const {
    email,
    password,
    onInputChange,
    errorMessage,
    onSubmit,
    onGoogleSignIn,
    isAuthenticating,
  } = useLoginPage();

  return (
    <AuthLayout title="Log in">
      <form onSubmit={ onSubmit } >
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={ email }
              onChange={ onInputChange }
              type="email"
              placeholder="johnDoe@example.com"
            />
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
            <div className="change-auth-page">
              <p>Don't have an account?</p>
              <Link to="/auth/register">Register</Link>
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
            disabled={ isAuthenticating }
            type="submit"
            value="Log In"
            className="button button-primary"
          />
            
          <div className="other-options">
            <hr />
            <p>Or Continue With</p>
            <hr />
          </div> {/* close other-options */}

          <button
            onClick={ onGoogleSignIn }
            disabled={ isAuthenticating }
            className="button google-button"
          >
            <img src="../icons/google.svg" alt="Google logo" />
            <p>Google</p>
          </button>
        </div> {/* close input-container */}
      </form>
    </AuthLayout>
  )
}
