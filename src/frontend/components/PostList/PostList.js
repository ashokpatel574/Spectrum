import React, { useEffect, useState } from "react";

import SortIcon from "@mui/icons-material/Sort";
import Post from "../Post/Post";
import { getfilterDataBySort } from "../../utils/utils";


const PostList = ({ postListData, headerState }) => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filterPostType, setFilterPostType] = useState("");
  const [showfilterMenu, setShowFilterMenu] = useState(false);

  const postFilterHandler = (sortOptions) => {
    const UpdatedfilterData = getfilterDataBySort(postListData, sortOptions);
    setFilterPostType(sortOptions === "ClearFilter" ? "" : sortOptions);
    setFilteredPosts([...UpdatedfilterData]);
    setShowFilterMenu(!showfilterMenu);
  };

  const filterMenuHandler = (e) => {
    setShowFilterMenu(!showfilterMenu);
  };

  useEffect(() => {
    setFilteredPosts([...postListData]);
  }, [postListData]);

  return (
    <>
      <header className="postFeed_container-header">
        <span>
          {headerState} {filterPostType && `| ${filterPostType}`}
        </span>
        <span className="postFeed_container-filterIcon-container">
          <span
            className="postFeed_container-filterIcon"
            onClick={filterMenuHandler}
          >
            <SortIcon />
          </span>
          {showfilterMenu && (
            <span className="postFeed_settings flex-column">
              <span onClick={() => postFilterHandler("Trending")}>
                Trending
              </span>
              <span onClick={() => postFilterHandler("Latest")}>Latest</span>
              <span onClick={() => postFilterHandler("Oldest")}>Oldest</span>
              <span onClick={() => postFilterHandler("ClearFilter")}>
                Clear Filter
              </span>
            </span>
          )}
        </span>
      </header>
      <ul className="flex-column">
        {filteredPosts?.map((post, id) => {
          return <Post key={id} post={post} />;
        })}
      </ul>
    </>
  );
};

export default PostList;
