import { useState } from "react";

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
