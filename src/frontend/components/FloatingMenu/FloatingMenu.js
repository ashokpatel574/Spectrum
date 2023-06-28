import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddBoxIcon from "@mui/icons-material/AddBox";

import { useData } from "../../context/DataContext";

const FloatingMenu = () => {
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
    <section className="floatMenu_container ">
      <ul className="floatMenu_container-list  ">
        <li className="floatMenu_container-listItem">
          <NavLink to="/">
            <span>
              <HomeIcon />
            </span>
          </NavLink>
        </li>
        <li className="floatMenu_container-listItem">
          <NavLink to="/explore">
            <span>
              <ExploreIcon />
            </span>
          </NavLink>
        </li>
        <li className="floatMenu_container-listItem">
          <span onClick={sideBarAddPostHandler} className=" postBtn">
            <AddBoxIcon />
          </span>
        </li>
        <li className="floatMenu_container-listItem">
          <NavLink to="/bookmark">
            <span>
              <BookmarkIcon />
            </span>
          </NavLink>
        </li>
        <li className="floatMenu_container-listItem">
          <NavLink to="/likedPost">
            <span>
              <FavoriteIcon />
            </span>
          </NavLink>
        </li>
        <li className="floatMenu_container-listItem">
          <NavLink to={`profile/${userProfile?._id}`}>
            <span>
              <AccountCircleIcon />
            </span>
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default FloatingMenu;
