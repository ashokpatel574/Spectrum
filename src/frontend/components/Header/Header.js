import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header_nav ">
        <div className="nav_logo ">Spectrum</div>
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
          <span className="flex-center">{<DarkModeIcon />}</span>
          <span>Profile</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
