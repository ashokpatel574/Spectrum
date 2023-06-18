import React from "react";
import { useData } from "../../context/DataContext";
import FeedHeader from "../../components/FeedHeader/FeedHeader";
import Post from "../../components/Post/Post";

import "./profilePage.css";

const ProfilePage = () => {
  const {
    state: { posts },
  } = useData();

  return (
    <section className="postFeed_container flex-column">
      <FeedHeader headerState={"Profile"} />
      <ul className="flex-column">
        {posts?.map((post, id) => {
          return <Post key={id} post={post} />;
        })}
      </ul>
    </section>
  );
};

export default ProfilePage;
