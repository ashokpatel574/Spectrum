import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useSignUp } from "../../utils/authUtils";

const SignUp = () => {
  const { setToken, setCurrentUser, authError, setAuthError, setIsLoading } =
    useAuth();

  const {
    userSignUpDetails,
    signUpErrorDetails,
    signUpDataHandler,
    signUpFormSubmit,
  } = useSignUp(setToken, setCurrentUser, setAuthError, setIsLoading);

  return (
    <section className="signUpPage_container flex-column">
      <h2 className="app-title">spectrum</h2>
      <h3 className="signUp_title">Sign Up</h3>

      {authError && (
        <p className="signUpError_server-message">
          {`(${authError?.status})`} {authError?.message}
        </p>
      )}

      <div className="signUp_form flex-column">
        <label htmlFor="firstname"></label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          className="firstname"
          placeholder="First name"
          value={userSignUpDetails.firstname}
          onChange={signUpDataHandler}
        />
        <span className="signUpError_text">{signUpErrorDetails.firstname}</span>
      </div>

      <div className="signUp_form flex-column ">
        <label htmlFor="lastname"></label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="lastname"
          placeholder="Last name"
          value={userSignUpDetails.lastname}
          onChange={signUpDataHandler}
        />
        <span className="signUpError_text">{signUpErrorDetails.lastname}</span>
      </div>

      <div className=" signUp_form flex-column">
        <label htmlFor="username"></label>
        <input
          type="username"
          id="username"
          name="username"
          className="username"
          placeholder="Username"
          value={userSignUpDetails.username}
          onChange={signUpDataHandler}
        />
        <span className="signUpError_text">{signUpErrorDetails.username}</span>
      </div>

      <div className=" signUp_form flex-column">
        <label htmlFor="email"></label>
        <input
          type="email"
          id="email"
          name="email"
          className="email"
          placeholder="Email address"
          value={userSignUpDetails.email}
          onChange={signUpDataHandler}
        />
        <span className="signUpError_text">{signUpErrorDetails.email}</span>
      </div>

      <div className=" signUp_form flex-column">
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          name="password"
          className="password"
          placeholder="Password"
          value={userSignUpDetails.password}
          onChange={signUpDataHandler}
        />
        <span className="signUpError_text">{signUpErrorDetails.password}</span>
      </div>

      <div className="signUp_form flex-column">
        <label htmlFor="confirmPassword"></label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="confirmPassword"
          placeholder="Confirm password"
          value={userSignUpDetails.confirmPassword}
          onChange={signUpDataHandler}
        />
        <span className="signUpError_text">
          {signUpErrorDetails.confirmPassword}
        </span>
      </div>

      <div className="signUpPage-policyText">
        <span>
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy.
        </span>
      </div>

      <button onClick={signUpFormSubmit} className="btn signUpBtn">
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
