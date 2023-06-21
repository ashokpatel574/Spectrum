import React from "react";
import Post from "../Post/Post";
import SortIcon from "@mui/icons-material/Sort";
import "./postList.css";

const PostList = ({ postListData, headerState }) => {
  return (
    <>
      <header className="postFeed_container-header">
        <span>{headerState} | Latest posts</span>
        <span className="postFeed_container-filterIcon-container">
          <span className="postFeed_container-filterIcon">
            <SortIcon />
          </span>
          <span className="postFeed_settings flex-column">
            <span>Trending</span>
            <span>Latest</span>
            <span>Oldest</span>
          </span>
        </span>
      </header>
      <ul className="flex-column">
        {postListData?.map((post, id) => {
          return <Post key={id} post={post} />;
        })}
      </ul>
    </>
  );
};

export default PostList;
