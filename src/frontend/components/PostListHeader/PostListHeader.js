import React, { useRef, useState } from "react";
import SortIcon from "@mui/icons-material/Sort";

import { useData } from "../../context/DataContext";
import { getFiltertypeState } from "../../utils/utils";
import { useClickedOutsideDropBox } from "../../utils/helper";

const PostListHeader = ({ postListData, headerState, sortFeedType }) => {
  const [showfilterMenu, setShowFilterMenu] = useState(false);
  const { dispatch } = useData();
  const filterMenuRef = useRef(null);

  const postFilterHandler = (sortOptions) => {
    dispatch({
      type: getFiltertypeState(headerState),
      payload: sortOptions,
    });
  };

  const filterMenuHandler = () => setShowFilterMenu(!showfilterMenu);
  useClickedOutsideDropBox(showfilterMenu, setShowFilterMenu, filterMenuRef);

  return (
    <>
      {postListData?.length > 0 && (
        <header className="postFeed_container-header">
          <span>
            {headerState}
            {headerState === "Explore"
              ? ""
              : sortFeedType
              ? ` | ${sortFeedType}`
              : ""}
          </span>
          {headerState !== "Explore" && (
            <span
              className="postFeed_container-filterIcon-container"
              ref={filterMenuRef}
            >
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
                  <span onClick={() => postFilterHandler("Latest")}>
                    Latest
                  </span>
                  <span onClick={() => postFilterHandler("Oldest")}>
                    Oldest
                  </span>
                </span>
              )}
            </span>
          )}
        </header>
      )}
    </>
  );
};

export default PostListHeader;
