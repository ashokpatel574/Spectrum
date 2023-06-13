import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./sideBar.css";

const SideBar = () => {
  return (
    <section className="sideBar_container ">
      <ul className="sideBar_container-list flex-column ">
        <li className="sideBar_container-listItem">
          <span>
            <HomeIcon />
          </span>
          <span>Home</span>
        </li>
        <li className="sideBar_container-listItem">
          <span>
            <ExploreIcon />
          </span>
          <span>Explore</span>
        </li>
        <li className="sideBar_container-listItem">
          <span>
            <BookmarkIcon />
          </span>
          <span>Bookmarks</span>
        </li>
        <li className="sideBar_container-listItem">
          <span>
            <FavoriteIcon />
          </span>
          <span>Like Posts</span>
        </li>
        <li className="sideBar_container-listItem">
          <span className="btn postBtn">Post</span>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
