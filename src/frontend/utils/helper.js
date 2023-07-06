import { useState, useEffect, useRef } from "react";
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

export const useEmoji = (newPostData, setNewPostData) => {
  const [emojiModalOpen, setEmojiModalOpen] = useState(false);

  const emojiModalHandler = () => {
    setEmojiModalOpen(!emojiModalOpen);
  };

  const emojiPickerHandler = (emojidata) => {
    const updatedPostMessage = newPostData?.message + emojidata.emoji;
    setNewPostData({
      ...newPostData,
      message: updatedPostMessage,
    });
    setEmojiModalOpen(!emojiModalOpen);
  };

  return {
    emojiModalOpen,
    setEmojiModalOpen,
    emojiModalHandler,
    emojiPickerHandler,
  };
};

export const useSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSearchDropBox, setShowSearchDropBox] = useState(false);

  const {
    state: { users },
  } = useData();

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
    setShowSearchDropBox(e.target.value.length > 0 && true);

    const result = users.filter((user) => {
      return user.firstname
        .toLowerCase()
        .toString()
        .startsWith(e.target.value.trim().toLowerCase());
    });
    setSearchResult(result);
  };

  const clearSearchHandler = () => {
    setSearchInput("");
    setShowSearchDropBox(false);
  };

  return {
    searchInput,
    searchHandler,
    searchResult,
    clearSearchHandler,
    showSearchDropBox,
    setShowSearchDropBox,
  };
};

export const usePost = (selectedPost) => {
  const [postEdit, setPostEdit] = useState(false);
  const { token } = useAuth();

  const {
    state: { users, posts, userProfile },
    dispatch,
  } = useData();

  let navigate = useNavigate();

  const isPostLiked = posts
    ?.find((post) => post?._id === selectedPost._id)
    ?.likes?.likedBy?.some((post) => post?.username === userProfile?.username);

  const isPostBookmarked = userProfile?.bookmarks?.some(
    (bookItem) => bookItem?._id === selectedPost._id
  );

  const postLikeHandler = (postId) => {
    isPostLiked
      ? removeLikedPostService(postId, token, dispatch)
      : addLikedPostService(postId, token, dispatch);
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
    postDeleteService(postId, token, dispatch);
  };

  const postCommentHandler = () => {};

  const profileHandler = () => {
    const getProfileId = users.find(
      (user) => user.username === selectedPost.username
    )?._id;
    navigate(`/profile/${getProfileId}`);
  };

  return {
    userProfile,
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

export const useClickedOutsideDropBox = (
  dropBoxstate,
  setDropBoxState,
  refState
) => {
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        dropBoxstate &&
        refState.current &&
        !refState.current.contains(e.target)
      ) {
        setDropBoxState(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [dropBoxstate, refState, setDropBoxState]);
};

export const useInfiniteScroll = (posts, lastElementInListRef) => {
  const [pageNumber, setPageNumber] = useState(1);

  const TotalPosts = posts?.length;
  const hasMorePost = Boolean(pageNumber <= Math.ceil(TotalPosts / 4));
  const [postLoading, setPostLoading] = useState(false);

  let interval;

  const observerFunc = (entries) => {
    const entry = entries[0];

    if (entry.isIntersecting && hasMorePost) {
      setPostLoading(true);
      interval = setTimeout(() => {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
        setPostLoading(false);
      }, 400);
    }
  };

  const observerOpts = {
    threshold: 0.6,
  };

  useEffect(() => {
    const referenceElement = lastElementInListRef.current;
    const infiniteScrollObserver = new IntersectionObserver(
      observerFunc,
      observerOpts
    );

    if (referenceElement) {
      infiniteScrollObserver.observe(referenceElement);
    }

    return () => {
      if (referenceElement) {
        infiniteScrollObserver.unobserve(referenceElement);
      }

      if (interval) {
        clearTimeout(interval);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMorePost, observerFunc]);

  return {
    pageNumber,
    lastElementInListRef,
    hasMorePost,
    postLoading,
    interval,
  };
};
