import axios from "axios";
import { ActionType } from "../constant";
import { ToastHandler } from "../utils/utils";
import { ToastType } from "../constant";
import { getStringCaptialize } from "../utils/utils";

export const getLoginCredentialsService = async (
  username,
  password,
  setToken,
  setCurrentUser,
  navigate,
  setAuthError,
  setIsLoadingAuth
) => {
  try {
    setAuthError(null);
    setIsLoadingAuth(true);

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
      setIsLoadingAuth(false);
      ToastHandler(
        ToastType.Success,
        `Welcome back! ${getStringCaptialize(foundUser.firstname)}`
      );
      navigate("/");
    }
  } catch (error) {
    setIsLoadingAuth(false);

    if (error.response.status === 404) {
      setAuthError({
        status: 404,
        message: `The username is not Registered`,
      });
      ToastHandler(
        ToastType.Error,
        `${error.response.status},  The username is not Registered!`
      );
    } else if (error.response.status === 401) {
      setAuthError({
        status: 401,
        message: `Password is incorrect!`,
      });
      ToastHandler(
        ToastType.Error,
        `${error.response.status},  Password is incorrect!`
      );
    } else {
      setAuthError({
        status: error.response.status,
        message: `Something went wrong! Try again later`,
      });
      ToastHandler(
        ToastType.Error,
        `${error.response.status},  Something went wrong! Try again later`
      );
    }
  }
};

export const setSignUpCredentialsService = async (
  username,
  password,
  email,
  firstName,
  lastName,
  setToken,
  setCurrentUser,
  setSignUpError,
  setIsLoadingAuth,
  navigate
) => {
  try {
    setSignUpError(null);
    setIsLoadingAuth(true);
    const {
      data: { createdUser, encodedToken },
      status,
    } = await axios.post("/api/auth/signup", {
      username,
      password,
      email,
      firstName,
      lastName,
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
      setIsLoadingAuth(false);
      navigate("/");
      ToastHandler(
        ToastType.Success,
        `Account Created Successfully,
        Welcome ${getStringCaptialize(createdUser.firstname)}`
      );
    }
  } catch (error) {
    setIsLoadingAuth(false);

    if (error.response.status === 422) {
      setSignUpError({
        status: 422,
        message: "Username Already Exists",
      });
      ToastHandler(
        ToastType.Error,
        `${error.response.status}, Username Already Exists`
      );
    } else {
      setSignUpError({
        status: error.response.status,
        message: `Something went wrong! Try again later`,
      });
      ToastHandler(
        ToastType.Error,
        `${error.response.status}, Something went wrong! Try again later`
      );
    }
  }
};

export const logoutService = (setToken, setCurrentUser, dispatch, navigate) => {
  localStorage.removeItem("loginCredentials");
  localStorage.removeItem("epr_suggested");
  setToken("");
  setCurrentUser("");
  dispatch({ type: ActionType.LogOut });
  navigate("/user");
  ToastHandler(ToastType.Success, `Logged out`);
};
