import { ActionType } from "../constant";

export const initialState = {
  posts: [],
  users: [],
  userProfile: {},
  isPostModalOpen: false,
  postModalDetails: null,
  isPostEdited: false,
  isProfileModalOpen: false,
  profileModalDetails: null,
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case ActionType.InitialServerFetch: {
      if (action.payload.type === ActionType.AllPosts) {
        return { ...state, posts: action.payload.value };
      }

      if (action.payload.type === ActionType.AllUsers) {
        return {
          ...state,
          users: action.payload.value,
          userProfile: action.payload.loggedInUser,
        };
      }

      if (action.payload.type === ActionType.UserBookmarkFetch) {
        return {
          ...state,
          users: [
            ...state.users.map((item) =>
              item._id === action.payload.loggedInUser._id
                ? { ...item, bookmarks: [...action.payload.value] }
                : item
            ),
          ],
        };
      }

      return state;
    }

    case ActionType.SetBookmarkData: {
      const updatedUserData = state.users.map((user) => {
        return user.username === action.payload.username
          ? {
              ...user,
              bookmarks: [...action.payload.value],
            }
          : user;
      });

      return {
        ...state,
        users: updatedUserData,
        userProfile: {
          ...state.userProfile,
          bookmarks: [...action.payload.value],
        },
      };
    }

    case ActionType.TogglePostLike: {
      return {
        ...state,
        posts: [...action.payload],
      };
    }

    case ActionType.UpdateUserFollowerList: {
      return {
        ...state,
        users: [
          ...state.users.map((item) => {
            return item._id !== action.payload.updatedUser._id &&
              item._id !== action.payload.updatedFollowedUser._id
              ? item
              : item._id === action.payload.updatedUser._id
              ? action.payload.updatedUser
              : action.payload.updatedFollowedUser;
          }),
        ],
        userProfile: action.payload.updatedUser,
      };
    }

    case ActionType.AddPost: {
      return {
        ...state,
        posts: action.payload,
        isPostModalOpen: false,
        isPostEdited: false,
        postModalDetails: null,
      };
    }

    case ActionType.DeletePost: {
      return {
        ...state,
        posts: action.payload,
      };
    }

    case ActionType.OpenPostModal: {
      return {
        ...state,
        isPostModalOpen: true,
        isPostEdited: action.payload.type === "edit",
        postModalDetails: action.payload.value,
      };
    }

    case ActionType.ClosePostModal: {
      return {
        ...state,
        isPostModalOpen: false,
        isPostEdited: false,
        postModalDetails: null,
      };
    }

    case ActionType.UpdatePost: {
      return {
        ...state,
        isPostModalOpen: false,
        isPostEdited: false,
        postModalDetails: null,
        posts: action.payload,
      };
    }

    case ActionType.CloseProfileModal: {
      return {
        ...state,
        isProfileModalOpen: false,
        profileModalDetails: null,
      };
    }

    case ActionType.OpenProfileModal: {
      return {
        ...state,
        isProfileModalOpen: true,
        profileModalDetails: action.payload,
      };
    }

    case ActionType.UpdateProfile: {
      const updatedUserPost = {
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        profileImage: action.payload.profileImage,
      };

      return {
        ...state,
        users: [
          ...state.users.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        ],

        userProfile: action.payload,
        posts: [
          ...state.posts.map((item) =>
            item.username === action.payload.username
              ? { ...item, ...updatedUserPost }
              : item
          ),
        ],
        isProfileModalOpen: false,
        profileModalDetails: null,
      };
    }

    default:
      return state;
  }
};
