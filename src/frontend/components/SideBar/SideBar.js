import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useData } from "../../context/DataContext";

const SideBar = () => {
  const {
    state: { userProfile },
    dispatch,
  } = useData();

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
            <span className="home">Home</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <NavLink to="/explore">
            <span>
              <ExploreIcon />
            </span>
            <span className="explore">Explore</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <NavLink to="/bookmark">
            <span>
              <BookmarkIcon />
            </span>
            <span className="bookmarks">Bookmarks</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <NavLink to="/likedPost">
            <span>
              <FavoriteIcon />
            </span>
            <span className="likeposts">Like Posts</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <NavLink to={`profile/${userProfile?._id}`}>
            <span>
              <AccountCircleIcon />
            </span>
            <span className="profile">Profile</span>
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
