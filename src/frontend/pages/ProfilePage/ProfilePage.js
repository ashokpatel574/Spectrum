import React from "react";
import { useData } from "../../context/DataContext";
import FeedHeader from "../../components/FeedHeader/FeedHeader";
import Post from "../../components/Post/Post";

import "./profilePage.css";
import Profile from "../../components/Profile/Profile";

const ProfilePage = () => {
  const {
    state: { posts, profileDetails },
  } = useData();

  const userPosts = posts?.filter(
    (post) => post.username === profileDetails?.username
  );

  return (
    <section className="postFeed_container flex-column">
      <Profile />
      <FeedHeader headerState={"Profile"} />
      <ul className="flex-column">
        {userPosts?.map((post, id) => {
          return <Post key={id} post={post} />;
        })}
      </ul>
    </section>
  );
};

export default ProfilePage;
