import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import "./profile.css";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import {
  updateUnFollowList,
  getUserProfileService,
  updateFollowList,
} from "../../services/userServices";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const {
    state: { users, posts, userProfile },
    dispatch,
  } = useData();
  const { token } = useAuth();
  const { profileId } = useParams();
  const profileDetails = users?.find((user) => user?._id === String(profileId));

  const isFollowed =
    profileDetails?._id !== userProfile?._id &&
    userProfile?.following.some((item) => item?._id === profileDetails?._id);

  const followHandler = (e, followUserId) => {
    e.stopPropagation();
    isFollowed
      ? updateUnFollowList(followUserId, token, dispatch)
      : updateFollowList(followUserId, token, dispatch);
  };

  const editProfileHandler = () => {
    getUserProfileService(profileDetails?._id, dispatch);
  };

  const userPosts = posts?.filter(
    (post) => post?.username === profileDetails?.username
  )?.length;

  if (profileDetails) {
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
              {userProfile?.username === profileDetails?.username ? (
                <span onClick={editProfileHandler} className="profile-edit">
                  Edit
                </span>
              ) : (
                <span
                  className="profile-edit"
                  onClick={(e) => followHandler(e, profileDetails?._id)}
                >
                  {isFollowed ? "Unfollow" : "Follow"}
                </span>
              )}
            </div>
          </div>

          <div className="profile_details-partTwo">
            <span>{profileDetails?.bio}</span>
          </div>
          <div className="profile_details-partThree">
            <span>{userPosts} Posts</span>
            <span> {profileDetails?.followers?.length} Followers</span>
            <span> {profileDetails?.following?.length} Following</span>
          </div>
          <div className="profile_details-partFour">
            <span>
              <LinkIcon />
              <Link to={profileDetails?.website}>
                {profileDetails?.website}
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
