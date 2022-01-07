import "../scss/login.scss";
import { useState, useEffect, useRef } from "react";

function Login(params) {
  const [logineye, setLogineye] = useState(false);
  const loginshowHidden = () => {
    setLogineye(!logineye);
  };
  const handleonClick = (e) => {
    e.preventDefault();
    alert("login sucessfully!!");
  };

  // LOGIN AUTO FOCUS

  const loginFocus = useRef();
  useEffect(() => {
    loginFocus.current.focus();
  }, []);
  // END LOGIN AUTO FOCUS
  return (
    <div>
      <div className="login">
        <div className="login-form">
          <form className="form" onSubmit={handleonClick}>
            <h2 className="h2">LOGIN</h2>
            <label className="username" for="username">
              Username
            </label>
            <br></br>
            <input
              ref={loginFocus}
              type="text"
              name="loginname"
              id="username"
              className="username-input"
              required
            ></input>
            <br></br>
            <label className="password" for="password">
              password
            </label>
            <br></br>
            <input
              type={logineye ? "text" : "password"}
              name="loginpwd"
              id="password"
              className="pwd-input"
              required
            ></input>
            <span className="login-eye" onClick={loginshowHidden}>
              {logineye ? (
                <i class="fas fa-eye faeye"></i>
              ) : (
                <i class="fas fa-eye-slash faeyeslash"></i>
              )}
            </span>
            <br></br>
            <button className="login-btn">Login</button> <br></br>
            <a className="forget-pwd">forget password?</a>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
