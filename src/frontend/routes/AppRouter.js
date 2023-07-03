import { createBrowserRouter } from "react-router-dom";

// pages
import App from "../../App";
import LoginPage from "../pages/Login/LoginPage";
import SignUp from "../pages/Signup/SignUpPage";
import LandingPage from "../pages/LandingPage/LandingPage";
import HomePage from "../pages/Home/HomePage";
import BookmarkPage from "../pages/BookmarkPage/BookmarkPage";
import LikedPostPage from "../pages/LikedPostPage/LikedPostPage";
import ExplorePage from "../pages/ExplorePage/ExplorePage";

// components
import RequireAuth from "../components/RequireAuth/RequireAuth";
import MockAPI from "../components/mockApi/MockApi";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

// React Router version > 6.4
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <HomePage />
          </RequireAuth>
        ),
      },
      { path: "explore", element: <ExplorePage /> },
      {
        path: "bookmark",
        element: (
          <RequireAuth>
            <BookmarkPage />
          </RequireAuth>
        ),
      },
      {
        path: "likedPost",
        element: (
          <RequireAuth>
            <LikedPostPage />
          </RequireAuth>
        ),
      },
      {
        path: "/profile/:profileId",
        element: (
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "/user",
    element: <LandingPage />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "signUp", element: <SignUp /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  { path: "/mock-man", element: <MockAPI /> },
]);

export default AppRouter;
