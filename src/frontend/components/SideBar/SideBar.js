import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./sideBar.css";
import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { getuserProfile } from "../../services/userServices";

const SideBar = () => {
  const {
    state: { userProfile },
    dispatch,
  } = useData();

  const userId = userProfile?._id;
  const profileHandler = () => {
    getuserProfile(userId, dispatch);
  };

  const sideBarAddPostHandler = () => {
    dispatch({
      type: "openPostModal",
      payload: {
        type: "newPost",
        value: null,
      },
    });
  };

  return (
    <section className="sideBar_container ">
      <ul className="sideBar_container-list flex-column ">
        <li className="sideBar_container-listItem">
          <NavLink to="/">
            <span>
              <HomeIcon />
            </span>
            <span>Home</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <NavLink to="/explore">
            <span>
              <ExploreIcon />
            </span>
            <span>Explore</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <NavLink to="/bookmark">
            <span>
              <BookmarkIcon />
            </span>
            <span>Bookmarks</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <NavLink to="/likedPost">
            <span>
              <FavoriteIcon />
            </span>
            <span>Like Posts</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <NavLink onClick={profileHandler} to={`profile/${userId}`}>
            <span>
              <AccountCircleIcon />
            </span>
            <span>Profile</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <span onClick={sideBarAddPostHandler} className="btn postBtn">
            Post
          </span>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
