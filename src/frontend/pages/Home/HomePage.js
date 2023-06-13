import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import SuggestionFeed from "../../components/SuggestionFeed/SuggestionFeed";
import "./homePage.css";
import HomeFeed from "../../components/HomeFeed/HomeFeed";

const HomePage = () => {
  return (
    <article className="homePage_container">
      <SideBar />
      <HomeFeed />
      <SuggestionFeed />
    </article>
  );
};

export default HomePage;
