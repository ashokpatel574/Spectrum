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
  }
};

export const setLoginCredentials = async (
  username,
  password,
  email,
  firstName,
  lastName,
  birthYear,
  gender,
  setToken,
  setCurrentUser
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

    if (status === 200 || status === 201) {
      localStorage.setItem(
        "loginCredentials",
        JSON.stringify({ token: encodedToken, user: createdUser })
      );
      setToken(encodedToken);
      setCurrentUser(createdUser);
    }
  } catch (error) {
    console.log("SignUpError", error);
  }
};
