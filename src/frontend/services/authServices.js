import axios from "axios";

export const getLoginCredentials = async (
  username,
  password,
  setToken,
  setCurrentUser,
  navigate
) => {
  try {
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
        JSON.stringify({ token: encodedToken, user: foundUser })
      );
      setToken(encodedToken);
      setCurrentUser(foundUser);
      navigate("/");
    }
  } catch (error) {
    console.log("loginError", error);

    if (error.response.status === 500) {
      // setAuthError({
      //   status: 500,
      //   message: `Something went wrong! Try again later`,
      // });
    }
  }
};

export const setSignUpCredentials = async (
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

    setAuthError(null);

    if (status === 200 || status === 201) {
      localStorage.setItem(
        "loginCredentials",
        JSON.stringify({ token: encodedToken, user: createdUser })
      );
      setToken(encodedToken);
      setCurrentUser(createdUser);
      navigate("/");
    }
  } catch (error) {
    console.error("SignUpError", error);

    if (error.response.status === 422) {
      setAuthError({
        status: 422,
        message: "Username Already Exists",
      });
    }

    if (error.response.status === 500) {
      setAuthError({
        status: 500,
        message: `Something went wrong! Try again later`,
      });
    }
  }
};
