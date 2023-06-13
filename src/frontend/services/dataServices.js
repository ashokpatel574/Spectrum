import axios from "axios";

export const getServerData = async (dispatch) => {
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
        payload: { type: "allUsers", value: getAllUsers?.data?.users },
      });
    }
  } catch (error) {
    console.log("serverError", error);
  }
};
