import axios from "axios";
import { ActionType } from "../constant";
import { ToastHandler } from "../utils/utils";
import { ToastType } from "../constant";

export const addNewPostService = async (post, token, dispatch) => {
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
        type: ActionType.AddPost,
        payload: posts,
      });
      ToastHandler(ToastType.Success, `Created Post!`);
    }
  } catch (error) {
    console.error("addnewpost", error);
    ToastHandler(
      ToastType.Error,
      `Something went wrong!, Try Logging In again!`
    );
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
        type: ActionType.OpenPostModal,
        payload: {
          type: "edit",
          value: post,
        },
      });
    }
  } catch (error) {
    console.error("postEdit", error);
    ToastHandler(
      ToastType.Error,
      `Something went wrong!, Try Logging In again!`
    );
  }
};

export const postUpdateService = async (postId, post, token, dispatch) => {
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
        type: ActionType.UpdatePost,
        payload: posts,
      });
      ToastHandler(ToastType.Success, `Updated Post!`);
    }
  } catch (error) {
    console.error("postEdit", error);
    ToastHandler(
      ToastType.Error,
      `Something went wrong!, Try Logging In again!`
    );
  }
};

export const postDeleteService = async (postId, token, dispatch) => {
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
        type: ActionType.DeletePost,
        payload: posts,
      });
      ToastHandler(ToastType.Success, `Deleted Post!`);
    }
  } catch (error) {
    console.error("deletePostService", error);
    ToastHandler(
      ToastType.Error,
      `Something went wrong!, Try Logging In again!`
    );
  }
};

export const addLikedPostService = async (postId, token, dispatch) => {
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
        type: ActionType.TogglePostLike,
        payload: data?.posts,
      });
    }
  } catch (error) {
    console.error("addLikedpost", error);
  }
};

export const removeLikedPostService = async (postId, token, dispatch) => {
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
        type: ActionType.TogglePostLike,
        payload: data?.posts,
      });
    }
  } catch (error) {
    console.error("removeLikedpost", error);
  }
};

export const addBookmarkService = async (postId, token, dispatch, username) => {
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
        type: ActionType.SetBookmarkData,
        payload: {
          username: username,
          value: data?.bookmarks,
        },
      });
      ToastHandler(ToastType.Success, `Added To Bookmarks`);
    }
  } catch (error) {
    console.error("postBookmark", error);
  }
};

export const removeBookmarkService = async (
  postId,
  token,
  dispatch,
  username
) => {
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
        type: ActionType.SetBookmarkData,
        payload: {
          username: username,
          value: data?.bookmarks,
        },
      });
      ToastHandler(ToastType.Success, `Removed From Bookmarks`);
    }
  } catch (error) {
    console.error("removebookmark", error);
  }
};
