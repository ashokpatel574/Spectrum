import { createBrowserRouter } from "react-router-dom";
import AuthContextProvider from "../context/AuthContext";
import App from "../../App";
import LoginPage from "../pages/Login/LoginPage";
import SignUp from "../pages/Signup/SignUpPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import RequireAuth from "../components/RequireAuth/RequireAuth";
import HomePage from "../pages/Home/HomePage";
import MockAPI from "../components/mockApi/MockApi";
import DataContextProvider from "../context/DataContext";

// React Router version > 6.4
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthContextProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </AuthContextProvider>
    ),
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "/user",
    element: (
      <AuthContextProvider>
        <LandingPage />
      </AuthContextProvider>
    ),
    children: [
      { index: true, element: <LoginPage /> },
      { path: "signUp", element: <SignUp /> },
    ],
  },
  { path: "/mock-man", element: <MockAPI /> },
]);

export default AppRouter;
