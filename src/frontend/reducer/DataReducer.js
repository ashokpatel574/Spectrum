export const initialState = {
  posts: [],
  users: [],
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

      return state;
    }

    default:
      return state;
  }
};
