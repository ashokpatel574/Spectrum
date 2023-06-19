import React from "react";

import LinkIcon from "@mui/icons-material/Link";
import "./profile.css";
import { useData } from "../../context/DataContext";
import { updateFollowList } from "../../services/dataServices";
import { useAuth } from "../../context/AuthContext";
import { updateUnFollowList } from "../../services/dataServices";

const Profile = () => {
  const {
    state: { profileDetails, userProfile, posts },
    dispatch,
  } = useData();

  const { token } = useAuth();

  const userPosts = posts?.filter(
    (post) => post.username === profileDetails.username
  ).length;

  console.log(profileDetails);

  const isFollowed =
    profileDetails._id !== userProfile._id &&
    userProfile.following.some((item) => item._id === profileDetails._id);

  const followHandler = (e, followUserId) => {
    e.stopPropagation();
    isFollowed
      ? updateUnFollowList(followUserId, token, dispatch)
      : updateFollowList(followUserId, token, dispatch);
  };

  return (
    <div className="profile_container">
      <div className="profile_ImgContainer">
        <img src={profileDetails?.profileImage} alt="profile" />
      </div>
      <div className="profile_detailsContainer flex-column">
        <div className="profile_details-partOne ">
          <div className="flex-column">
            <span className="fullname">
              {profileDetails?.firstname} {profileDetails?.lastname}
            </span>
            <span className="username">@{profileDetails?.username}</span>
          </div>

          <div>
            {userProfile.username === profileDetails.username ? (
              <span className="profile-edit">Edit</span>
            ) : (
              <span
                className="profile-edit"
                onClick={(e) => followHandler(e, profileDetails._id)}
              >
                {isFollowed ? "Unfollow" : "Follow"}
              </span>
            )}
          </div>
        </div>

        <div className="profile_details-partTwo">
          <span>
            {profileDetails?.content} Dream big, work hard, and make it happen.
            #Motivation Every day is a new opportunity to make a positive
            change. #NewDay #Inspiration
          </span>
        </div>
        <div className="profile_details-partThree">
          <span>{userPosts} Posts</span>
          <span> {profileDetails?.followers?.length} Followers</span>
          <span> {profileDetails?.following?.length} Following</span>
        </div>
        <div className="profile_details-partFour">
          <span>
            <LinkIcon />
            https
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
