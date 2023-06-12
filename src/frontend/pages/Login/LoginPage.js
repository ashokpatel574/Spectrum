import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLoginCredentials } from "../../services/authServices";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loginErrorData, setLoginErrorData] = useState({
    username: "",
    password: "",
  });

  const { setToken, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const loginFormHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const formSubmit = () => {
    const { username, password } = loginData;
    console.log(username, password);

    getLoginCredentials(username, password, setToken, setCurrentUser, navigate);
    console.log(1);
  };

  return (
    <section className="login_container flex-column">
      <h3 className="login_title">Log In</h3>

      <div className="login_form-section flex-column">
        <label htmlFor="username">
          Username <span>*</span>
        </label>
        <input
          id="username"
          placeholder="Enter username"
          className="username"
          name="username"
          value={loginData.username}
          onChange={loginFormHandler}
        />
        <span className="loginError-text">{loginErrorData.username}</span>
      </div>
      <div className="login_form-section flex-column">
        <label htmlFor="password">
          Password <span>*</span>
        </label>
        <input
          id="password"
          placeholder="Enter password"
          className="password"
          name="password"
          value={loginData.password}
          onChange={loginFormHandler}
        />
        <span className="loginError-text">{loginErrorData.password}</span>
      </div>

      <button className="btn loginBtn" onClick={formSubmit}>
        Login
      </button>
      <button className="btn guestLoginBtn">Log In as Guest</button>
      <span className="goto_signUp-text">
        Don't have an account? <Link to="signUp">Sign Up</Link>
      </span>
    </section>
  );
};

export default LoginPage;
