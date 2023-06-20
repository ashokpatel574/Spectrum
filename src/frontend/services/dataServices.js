import axios from "axios";

export const getServerData = async (dispatch, token, currentUser) => {
  try {
    const getAllPosts = await axios.get(`/api/posts`);
    if (getAllPosts?.status === 200 || getAllPosts?.status === 201) {
      dispatch({
        type: "InitialServerData",
        payload: { type: "allPosts", value: getAllPosts?.data?.posts },
      });
    }

    const getAllUsers = await axios.get(`/api/users`);
    if (getAllUsers?.status === 200 || getAllUsers?.status === 201) {
      dispatch({
        type: "InitialServerData",
        payload: {
          type: "allUsers",
          value: getAllUsers?.data?.users,
          currentUser: currentUser,
        },
      });
    }

    const getUsersBookmarkedPost = await axios.get(`/api/users/bookmark/`, {
      headers: { authorization: token },
    });

    if (
      getUsersBookmarkedPost?.status === 200 ||
      getUsersBookmarkedPost?.status === 201
    ) {
      dispatch({
        type: "InitialServerData",
        payload: {
          type: "userBookmarkData",
          currentUser: currentUser,
          value: getUsersBookmarkedPost?.data?.bookmarks,
        },
      });
    }
  } catch (error) {
    console.log("serverError", error);
  }
};

export const postBookmark = async (postId, token, dispatch, username) => {
  try {
    const { status, data } = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({
        type: "addBookmark",
        payload: {
          username: username,
          bookmarkValue: data?.bookmarks,
        },
      });
    }
  } catch (error) {
    console.error("postBookmark", error);
  }
};

export const removeBookmark = async (postId, token, dispatch, username) => {
  try {
    const { status, data } = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({
        type: "removeBookmark",
        payload: {
          username: username,
          bookmarkValue: data?.bookmarks,
        },
      });
    }
  } catch (error) {
    console.error("removebookmark", error);
  }
};

export const addLikedPost = async (postId, token, dispatch) => {
  try {
    const { status, data } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({
        type: "likedPost",
        payload: data?.posts,
      });
    }
  } catch (error) {
    console.error("addLikedpost", error);
  }
};

export const removeLikedPost = async (postId, token, dispatch) => {
  try {
    const { status, data } = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({
        type: "removeLikedPost",
        payload: data?.posts,
      });
    }
  } catch (error) {
    console.error("removeLikedpost", error);
  }
};

export const getuserProfile = async (userId, dispatch) => {
  try {
    const { status, data } = await axios.get(`/api/users/${userId}`);

    if (status === 200 || status === 201) {
      dispatch({ type: "getProfileDetails", payload: data?.user });
    }
  } catch (error) {
    console.error("userprofile", error);
  }
};

export const updateFollowList = async (followUserId, token, dispatch) => {
  try {
    const { status, data } = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      console.log(data);
      dispatch({
        type: "updateUserFollower",
        payload: {
          updatedUser: data.user,
          updatedFollowedUser: data.followUser,
        },
      });
    }
  } catch (error) {
    console.error("addUserFollow", error);
  }
};

export const updateUnFollowList = async (followUserId, token, dispatch) => {
  try {
    const { status, data } = await axios.post(
      `/api/users/unfollow/${followUserId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({
        type: "updateUserFollower",
        payload: {
          updatedUser: data.user,
          updatedFollowedUser: data.followUser,
        },
      });
    }
  } catch (error) {
    console.error("removeUserFollow", error);
  }
};

export const addNewPost = async (token, post, dispatch) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts`,
      {
        postData: post,
      },
      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({
        type: "addNewPost",
        payload: {
          newpost: posts,
        },
      });
    }
  } catch (error) {
    console.log("addnewpost", error);
  }
};

export const getPostEditService = async (postId, dispatch) => {
  try {
    const {
      status,
      data: { post },
    } = await axios.get(`/api/posts/${postId}`);

    if (status === 200 || status === 201) {
      dispatch({
        type: "openPostModal",
        payload: {
          type: "edit",
          value: post,
        },
      });
    }
  } catch (error) {
    console.error("postEdit", error);
  }
};

export const postEditService = async (token, postId, post, dispatch) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/edit/${postId}`,
      {
        postData: post,
      },
      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({
        type: "updateEditedPost",
        payload: posts,
      });
    }
  } catch (error) {
    console.error("postEdit", error);
  }
};

export const deletePostService = async (token, postId, dispatch) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.delete(
      `/api/posts/${postId}`,

      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({
        type: "deletePost",
        payload: posts,
      });
    }
  } catch (error) {
    console.error("deletePostService", error);
  }
};

export const getUserProfileService = async (userId, dispatch) => {
  try {
    const {
      status,
      data: { user },
    } = await axios.get(`/api/users/${userId}`);

    if (status === 200 || status === 201) {
      dispatch({
        type: "openProfileModal",
        payload: user,
      });
    }
  } catch (error) {
    console.error("getUserProfileService", error);
  }
};

export const updateUserProfileService = async (token, userData, dispatch) => {
  try {
    const {
      status,
      data: { user },
    } = await axios.post(
      `/api/users/edit`,
      { userData: userData },
      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({
        type: "updateEditedProfile",
        payload: user,
      });
    }
  } catch (error) {
    console.error("updateUserProfileService", error);
  }
};
