import { Link, useParams } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import LogoutIcon from "@mui/icons-material/Logout";

import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import {
  getUserProfileService,
  followService,
  unFollowService,
} from "../../services/userServices";
import { logoutService } from "../../services/authServices";

const Profile = () => {
  const {
    state: { users, posts, userProfile },
    dispatch,
  } = useData();

  const { token, setToken, setCurrentUser } = useAuth();
  const { profileId } = useParams();
  const profileDetails = users?.find((user) => user?._id === String(profileId));

  const isFollowed =
    profileDetails?._id !== userProfile?._id &&
    userProfile?.following.some((item) => item?._id === profileDetails?._id);

  const followHandler = (e, followUserId, userfirstname, userLastname) => {
    e.stopPropagation();
    isFollowed
      ? unFollowService(
          followUserId,
          token,
          dispatch,
          userfirstname,
          userLastname
        )
      : followService(
          followUserId,
          token,
          dispatch,
          userfirstname,
          userLastname
        );
  };

  const editProfileHandler = () => {
    getUserProfileService(profileDetails?._id, dispatch);
  };

  const userPosts = posts?.filter(
    (post) => post?.username === profileDetails?.username
  )?.length;

  const logoutHandler = () => {
    logoutService(setToken, setCurrentUser, dispatch);
  };

  const reloadBtnHandler = () => {
    logoutService(setToken, setCurrentUser, dispatch);
  };

  return profileDetails ? (
    <>
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
                <span className="profileIcon">
                  <span onClick={editProfileHandler} className="profile-edit">
                    Edit
                  </span>
                  <span
                    className="logoutIcon flex-center"
                    onClick={logoutHandler}
                  >
                    <LogoutIcon />
                  </span>
                </span>
              ) : (
                <span
                  className="profile-edit"
                  onClick={(e) =>
                    followHandler(
                      e,
                      profileDetails?._id,
                      profileDetails?.firstname,
                      profileDetails?.lastname
                    )
                  }
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
            <span className="user_followersList">
              {profileDetails?.followers?.length} Followers
            </span>
            <span className="user_followingList">
              {profileDetails?.following?.length} Following
            </span>
          </div>
          {profileDetails?.website && (
            <div className="profile_details-partFour">
              <span>
                <LinkIcon />
                <Link to={profileDetails?.website}>
                  {profileDetails?.website}
                </Link>
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  ) : (
    <div className="emptyFeed">
      <p>Something went wrong!</p>
      <button className="btn reloadBtn" onClick={reloadBtnHandler}>
        Reload
      </button>
    </div>
  );
};

export default Profile;
