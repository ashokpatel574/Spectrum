import { useState } from "react";
import { useData } from "../context/DataContext";

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

  return { emojiModalOpen, emojiModalHandler, emojiPickerHandler };
};

export const useSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const {
    state: { users },
  } = useData();

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchResult = users.filter((user) => {
    return user.username
      .toLowerCase()
      .includes(searchInput.trim().toLowerCase());
  });

  return { searchInput, searchHandler, searchResult };
};
