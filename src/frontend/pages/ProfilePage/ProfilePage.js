import React from "react";
import { useData } from "../../context/DataContext";
import "./profilePage.css";
import Profile from "../../components/Profile/Profile";
import PostList from "../../components/PostList/PostList";

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
      <PostList postListData={userPosts} headerState={"Profile"} />
    </section>
  );
};

export default ProfilePage;
