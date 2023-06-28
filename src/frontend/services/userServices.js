import axios from "axios";
import { ActionType } from "../constant";

export const getUserProfileService = async (userId, dispatch) => {
  try {
    const {
      status,
      data: { user },
    } = await axios.get(`/api/users/${userId}`);

    if (status === 200 || status === 201) {
      dispatch({
        type: ActionType.OpenProfileModal,
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
        type: ActionType.UpdateProfile,
        payload: user,
      });
    }
  } catch (error) {
    console.error("updateUserProfileService", error);
  }
};

export const followService = async (followUserId, token, dispatch) => {
  try {
    const { status, data } = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({
        type: ActionType.UpdateUserFollowerList,
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

export const unFollowService = async (followUserId, token, dispatch) => {
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
        type: ActionType.UpdateUserFollowerList,
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
