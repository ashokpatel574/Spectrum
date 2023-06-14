import React from "react";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import Post from "../Post/Post";

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
      <h3 className="postFeed_container-header">Liked Posts</h3>
      {likedPostlist.length > 0 ? (
        <ul>
          {likedPostlist?.map((post, id) => {
            return <Post key={id} post={post} />;
          })}
        </ul>
      ) : (
        <p>You don't have any liked posts!</p>
      )}
    </section>
  );
};

export default LikedPostFeed;
