import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import SuggestionFeed from "../../components/SuggestionFeed/SuggestionFeed";
import "./homePage.css";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <article className="homePage_container">
      <SideBar />
      <Outlet />
      <SuggestionFeed />
    </article>
  );
};

export default HomePage;
