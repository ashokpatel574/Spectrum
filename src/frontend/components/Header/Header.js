import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import { useThemeContext } from "../../context/ThemeContext";
import { useClickedOutsideDropBox, useSearch } from "../../utils/helper";

import sepectrumLogo from "../../assets/logo/spectrum.png";

const Header = () => {
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const { themeMode, themeChangeHandler } = useThemeContext();

  const {
    searchInput,
    searchHandler,
    searchResult,
    clearSearchHandler,
    showSearchDropBox,
    setShowSearchDropBox,
  } = useSearch();

  const profileHandler = (navigateStatus, profileId) => {
    navigateStatus === "home"
      ? navigate("/")
      : navigate(`profile/${profileId}`);
    clearSearchHandler();
  };

  useClickedOutsideDropBox(showSearchDropBox, setShowSearchDropBox, searchRef);

  useEffect(() => {
    if (!showSearchDropBox) {
      clearSearchHandler();
    }
  }, [clearSearchHandler, showSearchDropBox]);

  return (
    <header className="header">
      <nav className="header_nav  container_section-width ">
        <div onClick={() => profileHandler("home")} className="nav_logo">
          <span className="logoMin">
            <img src={sepectrumLogo} alt="spectrum logo" />
          </span>
          <span className="logoMax">Spectrum</span>
        </div>
        <div className="nav_search " ref={searchRef}>
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
              {searchInput.length === 0 ? (
                <SearchIcon />
              ) : (
                <CloseIcon onClick={clearSearchHandler} />
              )}
            </span>
          </label>

          {showSearchDropBox && (
            <span
              className={`searchResult_container  ${
                searchInput.length !== 0 && "active"
              } `}
            >
              {searchResult.length > 0 ? (
                searchResult?.map((item, id) => (
                  <span
                    key={item.username}
                    className="searchResult_container-section "
                  >
                    <span onClick={() => profileHandler("profile", item?._id)}>
                      <span className=" searchResult_Imgcontainer">
                        <img src={item?.profileImage} alt="searched profile" />
                      </span>
                      <span className="searchResult_container-name">
                        {item.firstname} {item.lastname}
                      </span>
                    </span>
                  </span>
                ))
              ) : (
                <div className="searchResult_container-section-error">
                  No Results found!
                </div>
              )}
            </span>
          )}
        </div>
        <div className="nav_settings flex-center">
          <span className="flex-center" onClick={themeChangeHandler}>
            {themeMode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
