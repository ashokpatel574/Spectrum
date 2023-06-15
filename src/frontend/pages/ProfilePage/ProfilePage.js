import React from "react";
import { useData } from "../../context/DataContext";

const ProfilePage = () => {
  const {
    state: { userProfile },
  } = useData();

  return (
    <section className="postFeed_container">{userProfile.username}</section>
  );
};

export default ProfilePage;
