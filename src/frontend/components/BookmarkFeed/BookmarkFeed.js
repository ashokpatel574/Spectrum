import React from "react";
import { useData } from "../../context/DataContext";
import "./bookmarkFeed.css";
import PostList from "../PostList/PostList";

const BookmarkFeed = () => {
  const {
    state: { userProfile },
  } = useData();

  const bookmarksData = userProfile?.bookmarks;

  return (
    <section className="postFeed_container">
      {bookmarksData?.length > 0 ? (
        <PostList postListData={bookmarksData} headerState={"Bookmark"} />
      ) : (
        <p className="emptyBookmark">You don't have any posts bookmarked!</p>
      )}
    </section>
  );
};

export default BookmarkFeed;
