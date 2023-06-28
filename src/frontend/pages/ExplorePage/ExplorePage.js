import React from "react";
import { useData } from "../../context/DataContext";
import PostList from "../../components/PostList/PostList";

const ExplorePage = () => {
  const {
    state: { posts },
  } = useData();
  return (
    <section className="postFeed_container">
      <PostList postListData={posts} headerState={"Explore"} />
    </section>
  );
};

export default ExplorePage;
