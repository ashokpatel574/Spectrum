import React from "react";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import Post from "../Post/Post";
import FeedHeader from "../FeedHeader/FeedHeader";
import "./likedPostFeed.css";

const LikedPostFeed = () => {
  const {
    state: { posts },
  } = useData();
  const { currentUser } = useAuth();

  const likedPostlist = posts.filter((post) => {
    return post.likes.likedBy.some((likedList) => {
      return likedList.username === currentUser.username;
    });
  });

  return (
    <section className="postFeed_container">
      <FeedHeader headerState={"Liked Posts"} />
      {likedPostlist.length > 0 ? (
        <ul className="flex-column">
          {likedPostlist?.map((post, id) => {
            return <Post key={id} post={post} />;
          })}
        </ul>
      ) : (
        <p className="emptylikedPosts">You don't have any liked posts!</p>
      )}
    </section>
  );
};

export default LikedPostFeed;
