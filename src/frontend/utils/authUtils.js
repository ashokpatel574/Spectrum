import { useState } from "react";
import { validateEmail, validateOnlyString, validatePassword } from "./utils";
import {
  getLoginCredentialsService,
  setSignUpCredentialsService,
} from "../services/authServices";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const useLogin = () => {
  const [logInUserInput, setLogInUserInput] = useState({
    username: "",
    password: "",
  });
  const [logInErrorDetails, setLogInErrorDetails] = useState({
    username: "",
    password: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { setToken, setCurrentUser, setAuthError, setIsLoadingAuth } =
    useAuth();

  const loginFormHandler = (e) => {
    const { name, value } = e.target;
    setLogInUserInput({ ...logInUserInput, [name]: value });

    if (name === "username" && value !== "") {
      setLogInErrorDetails({
        ...logInErrorDetails,
        username: "",
      });
    }

    if (name === "password" && value !== "") {
      setLogInErrorDetails({
        ...logInErrorDetails,
        password: "",
      });
    }
  };

  const logInformSubmit = () => {
    const { username, password } = logInUserInput;

    let flag = false;
    let logInError = {};
    Object.keys(logInErrorDetails).forEach((element) => {
      if (logInUserInput[element] === "") {
        logInError[element] = `${
          element.at(0).toUpperCase() + element.slice(1)
        } is required!`;
        flag = true;
      }
    });

    !flag
      ? getLoginCredentialsService(
          username,
          password,
          setToken,
          setCurrentUser,
          navigate,
          setAuthError,
          setIsLoadingAuth
        )
      : setLogInErrorDetails(logInError);

    !flag &&
      setLogInErrorDetails({
        username: "",
        password: "",
      });
  };

  const guestLoginformSubmit = () => {
    const guestLogInData = {
      username: "ashokpatel",
      password: "Ashokpatel123",
    };
    setLogInUserInput(guestLogInData);
    getLoginCredentialsService(
      guestLogInData.username,
      guestLogInData.password,
      setToken,
      setCurrentUser,
      navigate,
      setAuthError,
      setIsLoadingAuth
    );
  };

  const passwordViewHandler = (e) => {
    if (e.type === "mouseout" || e.type === "touchend") {
      setIsPasswordVisible(false);
    }

    if (e.type === "mouseover" || e.type === "touchstart") {
      setIsPasswordVisible(true);
    }
  };

  return {
    logInUserInput,
    logInErrorDetails,
    isPasswordVisible,
    loginFormHandler,
    logInformSubmit,
    guestLoginformSubmit,
    passwordViewHandler,
  };
};

export const useSignUp = () => {
  const [userSignUpDetails, setUserSignUpDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [signUpErrorDetails, setSignUpErrorDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { setToken, setCurrentUser, setAuthError, setIsLoadingAuth } =
    useAuth();
  const navigate = useNavigate();

  const signUpDataHandler = (e) => {
    const { name, value } = e.target;
    setUserSignUpDetails({ ...userSignUpDetails, [name]: value });

    if (name === "firstname") {
      let firstnameText = value.length;
      setSignUpErrorDetails({ ...signUpErrorDetails, [name]: "" });

      if (!validateOnlyString(value)) {
        setSignUpErrorDetails({
          ...signUpErrorDetails,
          [name]: "Firstname should be in text!",
        });
      }

      if (firstnameText < 3) {
        setSignUpErrorDetails({
          ...signUpErrorDetails,
          [name]: "Firstname should have atleast 3 character!",
        });
      }
    }

    if (name === "lastname") {
      setSignUpErrorDetails({ ...signUpErrorDetails, [name]: "" });

      if (!validateOnlyString(value)) {
        setSignUpErrorDetails({
          ...signUpErrorDetails,
          [name]: "Lastname should be in text!",
        });
      }
    }

    if (name === "username") {
      let usernameText = value.length;
      setSignUpErrorDetails({ ...signUpErrorDetails, [name]: "" });

      if (usernameText < 3) {
        setSignUpErrorDetails({
          ...signUpErrorDetails,
          [name]: "Username should have more than 3 character!",
        });
      }
    }

    if (name === "email") {
      setSignUpErrorDetails({ ...signUpErrorDetails, [name]: "" });
      if (!validateEmail(value)) {
        setSignUpErrorDetails({
          ...signUpErrorDetails,
          [name]: "Email is invalid!",
        });
      }
    }

    if (name === "password") {
      setSignUpErrorDetails({ ...signUpErrorDetails, [name]: `` });
      if (!validatePassword(value)) {
        setSignUpErrorDetails({
          ...signUpErrorDetails,
          [name]: `Password should be min 8 chars, should include atleast one small, captial letter & digit`,
        });
      }
    }

    if (name === "confirmPassword") {
      if (value.length > 0) {
        setSignUpErrorDetails({ ...signUpErrorDetails, [name]: `` });
      }
    }
  };

  const signUpFormSubmit = () => {
    const { firstname, lastname, email, username, password, confirmPassword } =
      userSignUpDetails;

    let flag = false;
    let errorMessage = {};

    if (password !== confirmPassword) {
      errorMessage["confirmPassword"] = "Password does not match";
      flag = true;
    } else {
      setSignUpErrorDetails({ ...signUpErrorDetails, confirmPassword: `` });
      flag = false;
    }

    Object.keys(userSignUpDetails).forEach((element) => {
      if (userSignUpDetails[element] === "") {
        errorMessage[element] =
          element !== "confirmPassword"
            ? `${element.at(0).toUpperCase() + element.slice(1)} is Required!`
            : ``;
        flag = true;
      }
    });

    !flag
      ? setSignUpCredentialsService(
          username,
          password,
          email,
          firstname,
          lastname,
          setToken,
          setCurrentUser,
          setAuthError,
          setIsLoadingAuth,
          navigate
        )
      : setSignUpErrorDetails({ ...signUpErrorDetails, ...errorMessage });

    !flag &&
      setSignUpErrorDetails({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
  };

  return {
    userSignUpDetails,
    signUpErrorDetails,
    signUpDataHandler,
    signUpFormSubmit,
  };
};
