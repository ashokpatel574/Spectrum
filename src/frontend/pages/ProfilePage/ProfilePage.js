import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../context/DataContext";

import Profile from "../../components/Profile/Profile";
import PostList from "../../components/PostList/PostList";
import Loader from "../../components/loader/Loader";

const ProfilePage = () => {
  const {
    state: { posts, users },
    isLoadingData,
    setIsLoadingData,
  } = useData();

  const { profileId } = useParams();
  const profileUsername = users?.find(
    (user) => user?._id === String(profileId)
  )?.username;

  const userPosts = posts?.filter((post) => post.username === profileUsername);

  useEffect(() => {
    let intervalId;
    setIsLoadingData(true);
    intervalId = setTimeout(() => {
      setIsLoadingData(false);
    }, 250);

    return () => {
      clearTimeout(intervalId);
      setIsLoadingData(false);
    };
  }, []);

  return (
    <>
      {isLoadingData ? (
        <Loader />
      ) : (
        <section className="postFeed_container flex-column">
          <Profile />
          {profileUsername && (
            <PostList postListData={userPosts} headerState={"Profile"} />
          )}
        </section>
      )}
    </>
  );
};

export default ProfilePage;
