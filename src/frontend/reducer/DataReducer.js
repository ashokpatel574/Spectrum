export const initialState = {
  posts: [],
  users: [],
  bookmarks: [],
  userProfile: {},
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "InitialServerData": {
      if (action.payload.type === "allPosts") {
        return { ...state, posts: action.payload.value };
      }

      if (action.payload.type === "allUsers") {
        return { ...state, users: action.payload.value };
      }

      if (action.payload.type === "userBookmarkData") {
        return { ...state, bookmark: action.payload.value };
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
        bookmarks: [...action.payload.bookmarkValue],
        users: updatedUserData,
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
        bookmarks: [...action.payload.bookmarkValue],
        users: updatedUserData,
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

    case "AddUserProfile": {
      return {
        ...state,
        userProfile: action.payload,
      };
    }

    default:
      return state;
  }
};
