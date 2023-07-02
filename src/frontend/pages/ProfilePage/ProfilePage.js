import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../context/DataContext";

import Profile from "../../components/Profile/Profile";
import PostList from "../../components/PostList/PostList";

const ProfilePage = () => {
  const {
    state: { posts, users },
  } = useData();

  const { profileId } = useParams();
  const profileUsername = users?.find(
    (user) => user?._id === String(profileId)
  )?.username;

  const userPosts = posts?.filter((post) => post.username === profileUsername);

  return (
    <section className="postFeed_container flex-column">
      <Profile />
      {profileUsername && (
        <PostList postListData={userPosts} headerState={"Profile"} />
      )}
    </section>
  );
};

export default ProfilePage;
