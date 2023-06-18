import React from "react";
import { useData } from "../../context/DataContext";

import Post from "../Post/Post";
import FeedHeader from "../FeedHeader/FeedHeader";

const ExploreFeed = () => {
  const {
    state: { posts },
  } = useData();

  return (
    <section className="postFeed_container">
      <FeedHeader headerState={"Explore"} />
      <ul className="flex-column">
        {posts?.map((post, id) => {
          return <Post key={id} post={post} />;
        })}
      </ul>
    </section>
  );
};

export default ExploreFeed;
