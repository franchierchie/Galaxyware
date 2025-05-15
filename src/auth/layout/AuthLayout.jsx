
export const AuthLayout = ({ children, title = '' }) => {
  return (
    <div className="auth-wrapper">  {/* wrapper */}
      <h1>{ title }</h1>

      { children }
    </div> // close auth-wrapper
  )
}
