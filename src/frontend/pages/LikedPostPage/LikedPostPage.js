import React from "react";
import { useData } from "../../context/DataContext";
import PostList from "../../components/PostList/PostList";
import { getfilterDataBySort } from "../../utils/utils";

const LikedPostPage = () => {
  const {
    state: { posts, userProfile, sortFeedTypeLiked },
  } = useData();

  const likedPostlist = posts.filter((post) => {
    return post.likes.likedBy.some((likedList) => {
      return likedList.username === userProfile.username;
    });
  });

  const filteredFeedBySort = getfilterDataBySort(
    likedPostlist,
    sortFeedTypeLiked
  );

  return (
    <section className="postFeed_container">
      {likedPostlist.length > 0 ? (
        <PostList
          postListData={filteredFeedBySort}
          headerState={"Liked Posts"}
          sortFeedType={sortFeedTypeLiked}
        />
      ) : (
        <p className="emptyFeed">You don't have any liked posts!</p>
      )}
    </section>
  );
};

export default LikedPostPage;
