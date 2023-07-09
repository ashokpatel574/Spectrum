import { useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
import LogoutIcon from "@mui/icons-material/Logout";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";

import {
  getUserProfileService,
  followService,
  unFollowService,
} from "../../services/userServices";
import { logoutService } from "../../services/authServices";

import { useClickedOutsideDropBox } from "../../utils/hooks/useClickedOutsideDropBox";
import { isFollowedFunc } from "../../utils/utils";

const Profile = () => {
  const [showUserFollowList, setShowUserFollowList] = useState(false);
  const [userProfileFollowType, setUserProfileFollowType] = useState("");
  const [userList, setUserList] = useState([]);
  const {
    state: { users, posts, userProfile },
    dispatch,
  } = useData();
  let navigate = useNavigate();
  const userListRef = useRef();

  const currentuserProfile = users?.find(
    (user) => user?.username === userProfile?.username
  );

  const { token, setToken, setCurrentUser } = useAuth();
  const { profileId } = useParams();
  const profileDetails = users?.find((user) => user?._id === String(profileId));

  const isFollowed = isFollowedFunc(profileDetails, currentuserProfile);

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
    logoutService(setToken, setCurrentUser, dispatch, navigate);
  };

  const reloadBtnHandler = () => {
    logoutService(setToken, setCurrentUser, dispatch, navigate);
  };

  const userFollowListHandler = (users, type) => {
    setShowUserFollowList(true);
    setUserList([...users]);
    setUserProfileFollowType(type);
  };

  const profileHandler = (profileId) => {
    navigate(`/profile/${profileId}`);
    setShowUserFollowList(false);
  };

  const followListModalHandler = (e, followState, user) => {
    e.stopPropagation();

    followState === "follow"
      ? followService(
          user?._id,
          token,
          dispatch,
          user?.firstname,
          user?.lastname
        )
      : unFollowService(
          user?._id,
          token,
          dispatch,
          user?.firstname,
          user?.lastname
        );

    userProfileFollowType === "following" &&
      followState === "unfollow" &&
      setUserList((prevState) => {
        return [...prevState].filter((item) => item._id !== user._id);
      });
  };

  useClickedOutsideDropBox(
    showUserFollowList,
    setShowUserFollowList,
    userListRef
  );

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
            <span
              className="user_followersList"
              onClick={() =>
                userFollowListHandler(profileDetails?.followers, "followers")
              }
            >
              {profileDetails?.followers?.length} Followers
            </span>
            <span
              className="user_followingList"
              onClick={() =>
                userFollowListHandler(profileDetails?.following, "following")
              }
            >
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

        {showUserFollowList && userList.length > 0 && (
          <div className="followListModal_section" ref={userListRef}>
            <div className="followListModal_container">
              <p>
                <span>
                  {userProfileFollowType === "followers"
                    ? "Followers"
                    : "Following"}
                </span>

                <span onClick={() => setShowUserFollowList(false)}>
                  <HighlightOffIcon />
                </span>
              </p>
              <div className="followListModal_wrapper">
                {userList?.map((item) => (
                  <span
                    key={item.username}
                    className="followListModal_listItem"
                  >
                    <span
                      onClick={() => profileHandler(item?._id)}
                      className="followListModal_listItem-partOne"
                    >
                      <span className=" followListModal_listItem_Imgcontainer">
                        <img src={item?.profileImage} alt="user profile" />
                      </span>
                      <span className="followListModal_listItem-name">
                        {item.firstname} {item.lastname}
                      </span>
                    </span>

                    <span className="followListModal_listItem-partTwo">
                      {userProfileFollowType === "followers" ? (
                        <>
                          {isFollowedFunc(item, currentuserProfile) ? (
                            <span
                              className="unfollow"
                              onClick={(e) =>
                                followListModalHandler(e, "unfollow", item)
                              }
                            >
                              following
                            </span>
                          ) : (
                            <span
                              className="follow"
                              onClick={(e) =>
                                followListModalHandler(e, "follow", item)
                              }
                            >
                              Follow
                            </span>
                          )}
                        </>
                      ) : (
                        <>
                          <span
                            className="unfollow"
                            onClick={(e) =>
                              followListModalHandler(e, "unfollow", item)
                            }
                          >
                            following
                          </span>
                        </>
                      )}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
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
