import axios from "axios";
import { ActionType } from "../constant";

export const getLoginCredentialsService = async (
  username,
  password,
  setToken,
  setCurrentUser,
  navigate,
  setAuthError
) => {
  try {
    setAuthError(null);
    const {
      data: { foundUser, encodedToken },
      status,
    } = await axios.post("/api/auth/login", {
      username,
      password,
    });

    if (status === 200 || status === 201) {
      localStorage.setItem(
        "loginCredentials",
        JSON.stringify({
          token: encodedToken,
          user: {
            ...foundUser,
            password: "########",
          },
        })
      );
      setToken(encodedToken);
      setCurrentUser(foundUser);
      navigate("/");
    }
  } catch (error) {
    console.error("loginError", error);

    setAuthError({
      status: error.response.status,
      message: `Something went wrong! Try again later`,
    });

    if (error.response.status === 404) {
      setAuthError({
        status: 404,
        message: `The username is not Registered`,
      });
    }

    if (error.response.status === 401) {
      setAuthError({
        status: 401,
        message: `Password is incorrect!`,
      });
    }
  }
};

export const setSignUpCredentialsService = async (
  username,
  password,
  email,
  firstName,
  lastName,
  birthYear,
  gender,
  setToken,
  setCurrentUser,
  setAuthError,
  setIsLoading,
  navigate
) => {
  try {
    setAuthError(null);
    const {
      data: { createdUser, encodedToken },
      status,
    } = await axios.post("/api/auth/signup", {
      username,
      password,
      email,
      firstName,
      lastName,
      birthYear,
      gender,
    });

    if (status === 200 || status === 201) {
      localStorage.setItem(
        "loginCredentials",
        JSON.stringify({
          token: encodedToken,
          user: {
            ...createdUser,
            password: "########",
          },
        })
      );
      setToken(encodedToken);
      setCurrentUser(createdUser);
      navigate("/");
    }
  } catch (error) {
    console.error("SignUpError", error);

    setAuthError({
      status: error.response.status,
      message: `Something went wrong! Try again later`,
    });

    if (error.response.status === 422) {
      setAuthError({
        status: 422,
        message: "Username Already Exists",
      });
    }
  }
};

export const logoutService = (setToken, setCurrentUser, dispatch) => {
  localStorage.removeItem("loginCredentials");
  localStorage.removeItem("epr_suggested");
  setToken("");
  setCurrentUser("");
  dispatch({ type: ActionType.LogOut });
};
