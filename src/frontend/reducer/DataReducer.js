export const initialState = {
  posts: [],
  users: [],
  userProfile: {},
  profileDetails: {},
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "InitialServerData": {
      if (action.payload.type === "allPosts") {
        return { ...state, posts: action.payload.value };
      }

      if (action.payload.type === "allUsers") {
        return {
          ...state,
          users: action.payload.value,
          userProfile: action.payload.currentUser,
        };
      }

      if (action.payload.type === "userBookmarkData") {
        return {
          ...state,
          users: [
            ...state.users.map((item) =>
              item.id === action.payload.currentUser.id
                ? { ...item, bookmarks: [...action.payload.value] }
                : item
            ),
          ],
        };
      }

      return state;
    }

    case "addBookmark": {
      const updatedUserData = state.users.map((user) => {
        return user.username === action.payload.username
          ? {
              ...user,
              bookmarks: [...action.payload.bookmarkValue],
            }
          : user;
      });

      return {
        ...state,
        users: updatedUserData,
        userProfile: {
          ...state.userProfile,
          bookmarks: [...action.payload.bookmarkValue],
        },
      };
    }

    case "removeBookmark": {
      const updatedUserData = state.users.map((user) => {
        return user.username === action.payload.username
          ? {
              ...user,
              bookmarks: [...action.payload.bookmarkValue],
            }
          : user;
      });

      return {
        ...state,
        users: updatedUserData,
        userProfile: {
          ...state.userProfile,
          bookmarks: [...action.payload.bookmarkValue],
        },
      };
    }

    case "likedPost": {
      return {
        ...state,
        posts: [...action.payload],
      };
    }

    case "removeLikedPost": {
      return {
        ...state,
        posts: [...action.payload],
      };
    }

    case "getProfileDetails": {
      return {
        ...state,
        profileDetails: action.payload,
      };
    }

    case "updateUserFollower": {
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
        profileDetails:
          state.profileDetails._id === action.payload.updatedUser._id
            ? {
                ...action.payload.updatedUser,
              }
            : {
                ...action.payload.updatedFollowedUser,
              },
      };
    }

    default:
      return state;
  }
};
