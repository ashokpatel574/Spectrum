import React from "react";
import { useData } from "../../context/DataContext";
import "./profilePage.css";
import Profile from "../../components/Profile/Profile";
import PostList from "../../components/PostList/PostList";
import { useParams } from "react-router-dom";

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
      <PostList postListData={userPosts} headerState={"Profile"} />
    </section>
  );
};

export default ProfilePage;
