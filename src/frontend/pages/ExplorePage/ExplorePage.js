import React from "react";
import { useData } from "../../context/DataContext";
import PostList from "../../components/PostList/PostList";
import { getfilterDataBySort } from "../../utils/utils";

const ExplorePage = () => {
  const {
    state: { posts, sortFeedTypeDefault },
  } = useData();

  const filteredFeedBySort =
    posts && getfilterDataBySort(posts, sortFeedTypeDefault);

  return (
    <section className="postFeed_container">
      <PostList
        postListData={filteredFeedBySort}
        headerState={"Explore"}
        sortFeedType={sortFeedTypeDefault}
      />
    </section>
  );
};

export default ExplorePage;
