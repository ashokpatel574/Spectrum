import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setLoginCredentials } from "../../services/authServices";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    birthYear: "",
    gender: "",
  });

  const [signUpErrorData, setSignUpErrorData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    birthYear: "",
    gender: "",
  });

  const { setToken, setCurrentUser } = useAuth();

  const signUpDataHandler = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const SignUpFormHandler = () => {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
      birthYear,
      gender,
    } = signUpData;

    setLoginCredentials(
      username,
      password,
      email,
      firstName,
      lastName,
      birthYear,
      gender,
      setToken,
      setCurrentUser
    );
  };

  return (
    <section className="signUpPage_container flex-column">
      <h3 className="signUp_title">Sign Up</h3>

      <div className="signUp_form flex-column">
        <label htmlFor="firstName"></label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="firstname"
          placeholder="First name"
          value={signUpData.firstName}
          onChange={signUpDataHandler}
        />
        <span className="signUpError_text">{signUpErrorData.firstName}</span>
      </div>

      <div className="signUp_form flex-column ">
        <label htmlFor="lastName"></label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="lastname"
          placeholder="Last name"
          value={signUpData.lastName}
          onChange={signUpDataHandler}
        />
        <span className="signUpError_text">{signUpErrorData.lastName}</span>
      </div>

      <div className=" signUp_form flex-column">
        <label htmlFor="username"></label>
        <input
          type="username"
          id="username"
          name="username"
          className="username"
          placeholder="Username"
          value={signUpData.username}
          onChange={signUpDataHandler}
        />
        <span className="signUpError_text">{signUpErrorData.username}</span>
      </div>

      <div className=" signUp_form flex-column">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          className="email"
          placeholder="Email address"
          value={signUpData.email}
          onChange={signUpDataHandler}
        />
        <span className="signUpError_text">{signUpErrorData.email}</span>
      </div>

      <div className=" signUp_form flex-column">
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          name="password"
          className="password"
          placeholder="Password"
          value={signUpData.password}
          onChange={signUpDataHandler}
        />
        <span className="signUpError_text">{signUpErrorData.password}</span>
      </div>

      <div className="signUp_form flex-column">
        <label htmlFor="confirmPassword"></label>
        <input
          type="confirmPassword"
          id="confirmPassword"
          name="confirmPassword"
          className="confirmPassword"
          placeholder="Confirm password"
          value={signUpData.confirmPassword}
          onChange={signUpDataHandler}
        />
        <span className="signUpError_text">
          {signUpErrorData.confirmPassword}
        </span>
      </div>

      <div className="signUpPage-policyText">
        <span>
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy.
        </span>
      </div>

      <button onClick={SignUpFormHandler} className="btn signUpBtn">
        Sign Up
      </button>

      <p className="goto_login-text">
        Already have an account?
        <span>
          <Link to="/user">Login</Link>
        </span>
      </p>
    </section>
  );
};

export default SignUp;
