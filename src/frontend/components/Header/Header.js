import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
//import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const profileHandler = () => {
    navigate(`profile/${currentUser._id}`);
  };

  return (
    <header className="header">
      <nav className="header_nav ">
        <div onClick={() => navigate("/")} className="nav_logo ">
          Spectrum
        </div>
        <div className="nav_search flex-center">
          <label htmlFor="searchInput"></label>
          <input
            id="searchInput"
            type="text"
            className="searchInput"
            placeholder="Search"
          />
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
