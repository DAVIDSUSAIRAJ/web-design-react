import "../scss/login.scss";

function Login(params) {
  return (
    <div>
      <div className="login">
        <div className="login-form">
          <form className="form">
            <h2 className="h2">LOGIN</h2>
            <label className="username" for="username">
              Username
            </label>
            <br></br>
            <input
              type="text"
              name="loginname"
              id="username"
              className="username-input"
            ></input>
            <br></br>
            <label className="password" for="password">
              password
            </label>
            <br></br>
            <input
              type="password"
              name="loginpwd"
              id="password"
              className="pwd-input"
            ></input>
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
