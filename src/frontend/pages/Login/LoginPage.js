import { Link } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useLogin } from "../../utils/authUtils";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const { setToken, setCurrentUser, setAuthError, authError } = useAuth();
  const {
    logInUserInput,
    logInErrorDetails,
    isPasswordVisible,
    loginFormHandler,
    logInformSubmit,
    guestLoginformSubmit,
    passwordViewHandler,
  } = useLogin(setToken, setCurrentUser, setAuthError);

  return (
    <section className="login_container flex-column">
      <h2 className="app-title">spectrum</h2>
      <h3 className="login_title">Log In</h3>
      {authError && (
        <p className=" loginError_server-message">
          {`(${authError?.status})`} {authError?.message}
        </p>
      )}

      <div className="login_form-section flex-column">
        <label htmlFor="username">
          Username <span>*</span>
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter username"
          className="username"
          name="username"
          value={logInUserInput.username}
          onChange={loginFormHandler}
        />
        <span className="loginError-text">{logInErrorDetails.username}</span>
      </div>
      <div className="login_form-section passwordContainer flex-column">
        <label htmlFor="password">
          Password <span>*</span>
        </label>
        <input
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Enter password"
          className="password"
          name="password"
          value={logInUserInput.password}
          onChange={loginFormHandler}
        />

        {logInUserInput.password && (
          <span
            className={`password-icon ${
              logInErrorDetails.password && "active"
            }`}
          >
            {isPasswordVisible ? (
              <VisibilityIcon
                className="password-visible-icon"
                onMouseOver={(e) => passwordViewHandler(e)}
                onMouseOut={(e) => passwordViewHandler(e)}
                onTouchStart={(e) => passwordViewHandler(e)}
                onTouchEnd={(e) => passwordViewHandler(e)}
              />
            ) : (
              <VisibilityOffIcon
                className="password-hidden-icon"
                onMouseOver={(e) => passwordViewHandler(e)}
                onMouseOut={(e) => passwordViewHandler(e)}
                onTouchStart={(e) => passwordViewHandler(e)}
                onTouchEnd={(e) => passwordViewHandler(e)}
              />
            )}
          </span>
        )}
        <span className="loginError-text ">{logInErrorDetails.password}</span>
      </div>

      <button className="btn loginBtn" onClick={logInformSubmit}>
        Log In
      </button>
      <button onClick={guestLoginformSubmit} className="btn guestLoginBtn">
        Log In as Guest
      </button>
      <span className="goto_signUp-text">
        Don't have an account? <Link to="signUp">Sign Up</Link>
      </span>
    </section>
  );
};

export default LoginPage;
