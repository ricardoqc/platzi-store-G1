
import "./clase3.css"

const  Clase3 = () =>{
  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <form action="/" className="form">
          <div>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="text"
              id="email"
              placeholder="platzi@example.cm"
              className="input input-email"
            />
          </div>
          <div>
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*********"
              className="input input-password"
            />
          </div>
          <input type="submit" value="Log in" className="primary-button login-button" />
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
}

export default Clase3;