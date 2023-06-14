import React from "react";
import Post from "../Post/Post";
import { useData } from "../../context/DataContext";

const BookmarkFeed = () => {
  const {
    state: { bookmarks },
  } = useData();

  return (
    <section className="postFeed_container">
      <h3 className="postFeed_container-header">Bookmark</h3>

      {bookmarks.length > 0 ? (
        <ul>
          {bookmarks?.map((post, id) => {
            return <Post key={id} post={post} />;
          })}
        </ul>
      ) : (
        <p>You don't have any posts bookmarked!</p>
      )}
    </section>
  );
};

export default BookmarkFeed;
