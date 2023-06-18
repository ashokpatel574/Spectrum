import React from "react";
import Post from "../Post/Post";
import { useData } from "../../context/DataContext";
import FeedHeader from "../FeedHeader/FeedHeader";
import "./bookmarkFeed.css";

const BookmarkFeed = () => {
  const {
    state: { bookmarks },
  } = useData();

  return (
    <section className="postFeed_container">
      <FeedHeader headerState={"Bookmark"} />

      {bookmarks.length > 0 ? (
        <ul className="flex-column">
          {bookmarks?.map((post, id) => {
            return <Post key={id} post={post} />;
          })}
        </ul>
      ) : (
        <p className="emptyBookmark">You don't have any posts bookmarked!</p>
      )}
    </section>
  );
};

export default BookmarkFeed;
