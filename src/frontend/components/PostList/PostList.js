import React, { useRef, useState } from "react";
import { Oval } from "react-loader-spinner";

import SortIcon from "@mui/icons-material/Sort";
import Post from "../Post/Post";
import { getFiltertypeState } from "../../utils/utils";
import {
  useClickedOutsideDropBox,
  useInfiniteScroll,
} from "../../utils/helper";
import { useData } from "../../context/DataContext";

const PostList = ({ postListData, headerState, sortFeedType }) => {
  const [showfilterMenu, setShowFilterMenu] = useState(false);
  const filterMenuRef = useRef(null);
  const { dispatch } = useData();

  const postFilterHandler = (sortOptions) => {
    dispatch({
      type: getFiltertypeState(headerState),
      payload: sortOptions,
    });
  };

  const filterMenuHandler = () => setShowFilterMenu(!showfilterMenu);
  useClickedOutsideDropBox(showfilterMenu, setShowFilterMenu, filterMenuRef);

  const { pageNumber, lastElementInListRef, hasMorePost, postLoading } =
    useInfiniteScroll(postListData);
  const postToRender = postListData?.slice(0, pageNumber * 4);

  return (
    <>
      {postListData && postListData?.length > 0 ? (
        <>
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
          <ul className="flex-column">
            {postToRender?.map((post, id) => {
              return <Post key={post?._id} post={post} />;
            })}

            <div
              key={"last-postElement"}
              className="infiniteScroll_loader-container"
              ref={lastElementInListRef}
            >
              {postToRender?.length &&
                hasMorePost &&
                postLoading &&
                postListData?.length !== postToRender?.length && (
                  <Oval
                    height={50}
                    width={50}
                    color="#3c0ac2"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#30089b"
                    strokeWidth={5}
                    strokeWidthSecondary={5}
                  />
                )}
              {!hasMorePost &&
                !postLoading &&
                postListData?.length === postToRender?.length && (
                  <p>You have reached End!</p>
                )}
            </div>
          </ul>
        </>
      ) : (
        <>
          <p className="emptyFeed">Start Posting & Following People</p>
        </>
      )}
    </>
  );
};

export default PostList;
