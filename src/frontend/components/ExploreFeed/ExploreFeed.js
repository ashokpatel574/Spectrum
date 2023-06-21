import React from "react";
import { useData } from "../../context/DataContext";
import PostList from "../PostList/PostList";

const ExploreFeed = () => {
  const {
    state: { posts },
  } = useData();

  return (
    <section className="postFeed_container">
      <PostList postListData={posts} headerState={"Explore"} />
    </section>
  );
};

export default ExploreFeed;
