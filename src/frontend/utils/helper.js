import { useState } from "react";
import { useData } from "../context/DataContext";
import { getUserFollowingList } from "./utils";

export const useEmoji = (newPostData, setNewPostData) => {
  const [emojiModalOpen, setEmojiModalOpen] = useState(false);

  const emojiModalHandler = () => {
    setEmojiModalOpen(!emojiModalOpen);
  };

  const emojiPickerHandler = (emojidata) => {
    const updatedPostMessage = newPostData?.message + emojidata.emoji;
    setNewPostData({
      ...newPostData,
      message: updatedPostMessage,
    });
    setEmojiModalOpen(!emojiModalOpen);
  };

  return {
    emojiModalOpen,
    setEmojiModalOpen,
    emojiModalHandler,
    emojiPickerHandler,
  };
};

export const useSearch = (currentUser) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearchResultUserFollowed, setIsSearchResultUserFollowed] =
    useState("");

  const {
    state: { users },
  } = useData();

  const searchHandler = (e) => {
    setSearchInput(e.target.value);

    const result = users.filter((user) => {
      return user.firstname
        .toLowerCase()
        .toString()
        .startsWith(e.target.value.trim().toLowerCase());
    });

    const currentUserFollowing = getUserFollowingList(currentUser);
    const followingList = result.map(
      (item) =>
        currentUserFollowing?.includes(item.username) &&
        currentUser.username !== item.username
    );

    setIsSearchResultUserFollowed(followingList);
    setSearchResult(result);
  };

  return {
    searchInput,
    searchHandler,
    searchResult,
    isSearchResultUserFollowed,
  };
};
