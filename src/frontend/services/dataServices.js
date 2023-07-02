import axios from "axios";
import { ActionType } from "../constant";

export const getServerData = async (
  dispatch,
  token,
  currentUser,
  setIsLoadingData,
  setdataError
) => {
  try {
    setIsLoadingData(false);
    setdataError(null);
    const getAllUsers = await axios.get(`/api/users`);
    setIsLoadingData(true);
    if (getAllUsers?.status === 200 || getAllUsers?.status === 201) {
      dispatch({
        type: ActionType.InitialServerFetch,
        payload: {
          type: ActionType.AllUsers,
          value: getAllUsers?.data?.users,
          loggedInUser: currentUser,
        },
      });
      setIsLoadingData(false);
    }

    const getAllPosts = await axios.get(`/api/posts`);
    setIsLoadingData(true);
    if (getAllPosts?.status === 200 || getAllPosts?.status === 201) {
      dispatch({
        type: ActionType.InitialServerFetch,
        payload: {
          type: ActionType.AllPosts,
          value: getAllPosts?.data?.posts,
        },
      });
      setIsLoadingData(false);
    }

    const getUsersBookmarkedPost = await axios.get(`/api/users/bookmark/`, {
      headers: { authorization: token },
    });
    setIsLoadingData(true);

    if (
      getUsersBookmarkedPost?.status === 200 ||
      getUsersBookmarkedPost?.status === 201
    ) {
      dispatch({
        type: ActionType.InitialServerFetch,
        payload: {
          type: ActionType.UserBookmarkFetch,
          loggedInUser: currentUser,
          value: getUsersBookmarkedPost?.data?.bookmarks,
        },
      });
      setIsLoadingData(false);
    }
  } catch (error) {
    console.error("serverError", error);
    setIsLoadingData(false);
    setdataError(error);
  }
};
