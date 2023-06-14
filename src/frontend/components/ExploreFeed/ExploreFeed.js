import React from "react";
import { useData } from "../../context/DataContext";

import Post from "../Post/Post";

const ExploreFeed = () => {
  const {
    state: { posts },
  } = useData();

  return (
    <section className="postFeed_container">
      <h3 className="postFeed_container-header">Explore</h3>
      <ul>
        {posts?.map((post, id) => {
          return <Post key={id} post={post} />;
        })}
      </ul>
    </section>
  );
};

export default ExploreFeed;
