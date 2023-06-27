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
      };
    }

    case "addNewPost": {
      return {
        ...state,
        posts: action.payload.newpost,
        isPostModalOpen: false,
        isPostEdited: false,
        postModalDetails: null,
      };
    }

    case "deletePost": {
      return {
        ...state,
        posts: action.payload,
      };
    }

    case "updateEditedPost": {
      return {
        ...state,
        isPostModalOpen: false,
        isPostEdited: false,
        postModalDetails: null,
        posts: action.payload,
      };
    }

    case "closePostModal": {
      return {
        ...state,
        isPostModalOpen: false,
        isPostEdited: false,
        postModalDetails: null,
      };
    }

    case "openPostModal": {
      return {
        ...state,
        isPostModalOpen: true,
        isPostEdited: action.payload.type === "edit",
        postModalDetails: action?.payload?.value,
      };
    }

    case "closeProfileModal": {
      return {
        ...state,
        isProfileModalOpen: false,
        profileModalDetails: null,
      };
    }

    case "openProfileModal": {
      return {
        ...state,
        isProfileModalOpen: true,
        profileModalDetails: action.payload,
      };
    }

    case "updateEditedProfile": {
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
