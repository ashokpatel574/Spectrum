import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./sideBar.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
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
          <span className="btn postBtn">Post</span>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;