import React from "react";
import { useData } from "../../context/DataContext";
import PostList from "../../components/PostList/PostList";

const LikedPostPage = () => {
  const {
    state: { posts, userProfile },
  } = useData();

  const likedPostlist = posts.filter((post) => {
    return post.likes.likedBy.some((likedList) => {
      return likedList.username === userProfile.username;
    });
  });

  return (
    <section className="postFeed_container">
      {likedPostlist.length > 0 ? (
        <PostList postListData={likedPostlist} headerState={"Liked Posts"} />
      ) : (
        <p className="emptyFeed">You don't have any liked posts!</p>
      )}
    </section>
  );
};

export default LikedPostPage;
