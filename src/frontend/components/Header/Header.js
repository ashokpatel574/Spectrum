import DarkModeIcon from "@mui/icons-material/DarkMode";
//import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useSearch } from "../../utils/helper";
import { useData } from "../../context/DataContext";
import { updateFollowList } from "../../services/userServices";

const Header = () => {
  const {
    state: { userProfile },
    dispatch,
  } = useData();

  const { token } = useAuth();
  const navigate = useNavigate();

  const profileHandler = (navigateStatus, profileId) => {
    navigateStatus === "home"
      ? navigate("/")
      : navigate(`profile/${profileId}`);
  };

  const followHandler = (e, followUserId) => {
    e.stopPropagation();
    updateFollowList(followUserId, token, dispatch);
  };

  const {
    searchInput,
    searchHandler,
    searchResult,
    isSearchResultUserFollowed,
  } = useSearch(userProfile);

  return (
    <header className="header">
      <nav className="header_nav  ">
        <div onClick={() => profileHandler("home")} className="nav_logo ">
          Spectrum
        </div>
        <div className="nav_search flex-center">
          <label htmlFor="searchInput">
            <input
              id="searchInput"
              type="text"
              className="searchInput"
              placeholder="Search"
              value={searchInput}
              onChange={searchHandler}
            />
            <span className="flex-center">
              {searchInput.length === 0 ? <SearchIcon /> : <CloseIcon />}
            </span>
          </label>

          <span
            className={`searchResult_container ${
              searchInput.length !== 0 && "active"
            }`}
          >
            {searchResult.length > 0 ? (
              searchResult?.map((item, id) => (
                <span
                  key={item.username}
                  className="searchResult_container-section"
                >
                  <span onClick={() => profileHandler("profile", item?._id)}>
                    <span className=" searchResult_Imgcontainer">
                      <img src={item?.profileImage} alt="searched profile" />
                    </span>
                    <span className="searchResult_container-name">
                      {item.firstname} {item.lastname}
                    </span>
                  </span>

                  {/* {userProfile.username !== item.username && (
                    <span
                      onClick={(e) => followHandler(e, item?._id)}
                      className="searchResult_container-followBtn"
                    >
                      {isSearchResultUserFollowed[id] ? "" : "Follow"}
                    </span>
                  )} */}
                </span>
              ))
            ) : (
              <div className="searchResult_container-section-error">
                No Results found!
              </div>
            )}
          </span>
        </div>
        <div className="nav_settings flex-center">
          <span>{<DarkModeIcon />}</span>
          <span onClick={profileHandler}>
            <AccountCircleIcon />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
