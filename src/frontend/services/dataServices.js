import axios from "axios";
import { ActionType } from "../constant";

export const getServerData = async (dispatch, token, currentUser) => {
  try {
    const getAllPosts = await axios.get(`/api/posts`);
    if (getAllPosts?.status === 200 || getAllPosts?.status === 201) {
      dispatch({
        type: ActionType.InitialServerFetch,
        payload: {
          type: ActionType.AllPosts,
          value: getAllPosts?.data?.posts,
        },
      });
    }

    const getAllUsers = await axios.get(`/api/users`);
    if (getAllUsers?.status === 200 || getAllUsers?.status === 201) {
      dispatch({
        type: ActionType.InitialServerFetch,
        payload: {
          type: ActionType.AllUsers,
          value: getAllUsers?.data?.users,
          loggedInUser: currentUser,
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
        type: ActionType.InitialServerFetch,
        payload: {
          type: ActionType.UserBookmarkFetch,
          loggedInUser: currentUser,
          value: getUsersBookmarkedPost?.data?.bookmarks,
        },
      });
    }
  } catch (error) {
    console.error("serverError", error);
  }
};
