import React from "react";
import SortIcon from "@mui/icons-material/Sort";

const FeedHeader = ({ headerState }) => {
  return (
    <header className="postFeed_container-header">
      <span>{headerState} | Latest posts</span>
      <span>
        <SortIcon />
      </span>
    </header>
  );
};

export default FeedHeader;
