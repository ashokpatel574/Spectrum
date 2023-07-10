import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import {
  removeBookmarkService,
  addBookmarkService,
  addLikedPostService,
  removeLikedPostService,
  getPostEditService,
  postDeleteService,
} from "../services/postServices";
import { updateUserProfileService } from "../services/userServices";

import { validateOnlyString } from "./utils";
import { ActionType } from "../constant";

export const usePost = (selectedPost) => {
  const [postEdit, setPostEdit] = useState(false);
  const { token } = useAuth();

  const {
    state: { users, posts, userProfile },
    dispatch,
  } = useData();

  let navigate = useNavigate();

  const currentUserProfile = users?.find(
    (user) => user?.username === userProfile?.username
  );

  const isPostLiked = posts
    ?.find((post) => post?._id === selectedPost._id)
    ?.likes?.likedBy?.some((post) => post?.username === userProfile?.username);

  const isPostBookmarked = currentUserProfile?.bookmarks?.some(
    (bookItem) => bookItem?._id === selectedPost._id
  );

  const postLikeHandler = (postId) => {
    isPostLiked
      ? removeLikedPostService(postId, token, dispatch, userProfile?.username)
      : addLikedPostService(postId, token, dispatch, userProfile?.username);
  };

  const postBookMarkHandler = (postId) => {
    isPostBookmarked
      ? removeBookmarkService(postId, token, dispatch, userProfile?.username)
      : addBookmarkService(postId, token, dispatch, userProfile?.username);
  };

  const postEditHandler = (postId) => {
    setPostEdit(false);
    getPostEditService(postId, dispatch);
  };

  const postDeleteHandler = (postId) => {
    setPostEdit(false);
    postDeleteService(postId, token, dispatch, userProfile?.username);
  };

  const postCommentHandler = () => {};

  const profileHandler = () => {
    const getProfileId = users.find(
      (user) => user.username === selectedPost.username
    )?._id;
    navigate(`/profile/${getProfileId}`);
  };

  return {
    currentUserProfile,
    postEdit,
    setPostEdit,
    isPostLiked,
    isPostBookmarked,
    postLikeHandler,
    postBookMarkHandler,
    postEditHandler,
    postDeleteHandler,
    postCommentHandler,
    profileHandler,
  };
};

export const useProfile = () => {
  const [updatedProfileData, setUpdatedProfileData] = useState({
    profileImage: "",
    firstname: "",
    lastname: "",
    bio: "",
    link: "",
  });

  const [profileDataError, setProfileDataError] = useState({
    firstname: "",
    lastname: "",
  });

  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  const { token } = useAuth();

  const {
    dispatch,
    state: { profileModalDetails },
  } = useData();

  const profileDataChangeHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedProfileData({
      ...updatedProfileData,
      [name]: value,
    });

    if (name === "firstname") {
      let firstnameText = value.length;
      setProfileDataError({ ...profileDataError, [name]: "" });

      if (!validateOnlyString(value)) {
        setProfileDataError({
          ...profileDataError,
          [name]: "Firstname should be in text!",
        });
      }

      if (firstnameText < 3) {
        setProfileDataError({
          ...profileDataError,
          [name]: "Firstname should have atleast 3 character!",
        });
      }
    }

    if (name === "lastname") {
      setProfileDataError({ ...profileDataError, [name]: "" });

      if (!validateOnlyString(value)) {
        setProfileDataError({
          ...profileDataError,
          [name]: "Lastname should be in text!",
        });
      }
    }
  };

  const updateUserProfileHandler = () => {
    let flag = false;
    let errorMessage = {};

    Object.keys(updatedProfileData).forEach((element) => {
      if (updatedProfileData[element] === "") {
        errorMessage[element] = `${
          element.at(0).toUpperCase() + element.slice(1)
        } is required!`;
        flag = true;
      }
    });

    !flag
      ? updateUserProfileService(token, updatedProfileData, dispatch)
      : setProfileDataError(errorMessage);

    !flag &&
      setProfileDataError({
        firstname: "",
        lastname: "",
      }) &&
      setIsAvatarModalOpen(!isAvatarModalOpen);
  };

  const closeProfileModalHandler = () => {
    dispatch({
      type: ActionType.CloseProfileModal,
    });
    setUpdatedProfileData({
      profileImage: "",
      firstname: "",
      lastname: "",
      bio: "",
      link: "",
    });
    setProfileDataError({
      firstname: "",
      lastname: "",
    });
  };

  const editUserImgHandler = (e) => {
    setIsAvatarModalOpen(!isAvatarModalOpen);
  };

  useEffect(() => {
    if (profileModalDetails) {
      setUpdatedProfileData({
        ...updatedProfileData,
        profileImage: profileModalDetails?.profileImage,
        firstname: profileModalDetails?.firstname,
        lastname: profileModalDetails?.lastname,
        bio: profileModalDetails?.bio,
        link: profileModalDetails?.website,
      });
    }
  }, []);

  return {
    updatedProfileData,
    setUpdatedProfileData,
    profileDataError,
    isAvatarModalOpen,
    setIsAvatarModalOpen,
    profileDataChangeHandler,
    updateUserProfileHandler,
    closeProfileModalHandler,
    editUserImgHandler,
  };
};
