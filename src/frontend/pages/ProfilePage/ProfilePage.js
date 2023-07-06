import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../../context/DataContext";

import Profile from "../../components/Profile/Profile";
import PostListHeader from "../../components/PostListHeader/PostListHeader";
import PostList from "../../components/PostList/PostList";
import Loader from "../../components/loader/Loader";
import { getfilterDataBySort } from "../../utils/utils";

const ProfilePage = () => {
  const {
    state: { posts, users, userProfile, sortFeedTypeProfile },
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

  const filteredFeedBySort = getfilterDataBySort(
    userPosts,
    sortFeedTypeProfile
  );

  return (
    <>
      {isLoadingData ? (
        <Loader />
      ) : (
        <section className="postFeed_container flex-column">
          <Profile />
          {profileUsername &&
            (filteredFeedBySort?.length > 0 ? (
              <>
                <PostListHeader
                  postListData={filteredFeedBySort}
                  headerState={"Profile"}
                  sortFeedType={sortFeedTypeProfile}
                />
                <PostList postListData={filteredFeedBySort} />
              </>
            ) : (
              <>
                {userProfile?.username === profileUsername ? (
                  <p className="emptyFeed">Start Posting & Following People</p>
                ) : (
                  <p className="emptyFeed">User has not posted anything yet!</p>
                )}
              </>
            ))}
        </section>
      )}
    </>
  );
};

export default ProfilePage;
