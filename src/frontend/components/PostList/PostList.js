import React, { useRef } from "react";
import { Oval } from "react-loader-spinner";

import { useThemeContext } from "../../context/ThemeContext";
import Post from "../Post/Post";
import { useInfiniteScroll } from "../../utils/helper";

const PostList = ({ postListData }) => {
  const lastElementInListRef = useRef(null);
  const { themeMode } = useThemeContext();

  const { pageNumber, hasMorePost, postLoading } = useInfiniteScroll(
    postListData,
    lastElementInListRef
  );
  const postToRender = postListData?.slice(0, pageNumber * 4);

  return (
    <>
      {postToRender && postToRender?.length > 0 && (
        <ul className="flex-column">
          {postToRender?.map((post) => {
            return <Post key={post._id} post={post} />;
          })}

          <div
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
                  color={themeMode === "light" ? "#3c0ac2" : "#fff"}
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor={themeMode === "light" ? "#30089b" : "#fff"}
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
      )}
    </>
  );
};

export default PostList;
