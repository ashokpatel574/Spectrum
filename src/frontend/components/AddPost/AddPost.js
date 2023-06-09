import React, { useState, useRef } from "react";
import EmojiPicker, { SuggestionMode } from "emoji-picker-react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";
import { useEmoji } from "../../utils/hooks/useEmoji";
import { useClickedOutsideDropBox } from "../../utils/hooks/useClickedOutsideDropBox";

import { addNewPostService } from "../../services/postServices";
import { deletePreviewFunc, postDataFunc } from "../../utils/utils";

const AddPost = () => {
  const [newPostData, setNewPostData] = useState({
    message: "",
    files: [],
  });

  const emojiRef = useRef();
  const { token } = useAuth();
  const {
    state: { userProfile, users },
    dispatch,
  } = useData();

  const currentUserProfile = users?.find(
    (user) => user?.username === userProfile?.username
  );

  const {
    emojiModalOpen,
    setEmojiModalOpen,
    emojiModalHandler,
    emojiPickerHandler,
  } = useEmoji(newPostData, setNewPostData);

  const postHandler = (e) => postDataFunc(e, newPostData, setNewPostData);

  const deletePreviewHandler = (id) =>
    deletePreviewFunc(id, newPostData, setNewPostData);

  const addNewPostHandler = () => {
    addNewPostService(newPostData, token, dispatch);
    setNewPostData({
      message: "",
      files: [],
    });
  };

  useClickedOutsideDropBox(emojiModalOpen, setEmojiModalOpen, emojiRef);

  return (
    <div className="addPost_container flex-column">
      <div className="addPost_InfoContainer ">
        <div className="addPost_ImgContainer">
          <img src={currentUserProfile?.profileImage} alt="profile" />
        </div>
        <div className="addPost_message">
          <label htmlFor="addPostMessage"></label>
          <textarea
            placeholder="What's on your mind?"
            id="addPostMessage"
            maxLength={1000}
            name="message"
            value={newPostData?.message}
            onChange={postHandler}
          >
            {newPostData?.message}
          </textarea>
        </div>
      </div>

      <div className="addPost_BtnContainer flex-column">
        <ul className="addPost_ImgUpload-container">
          {newPostData?.files?.map((file, id) => {
            return (
              <li className="newPostImg-container" key={id}>
                {file && (
                  <img
                    src={file}
                    alt="post files"
                    width="150px"
                    height="150px"
                    className="newpostImg"
                  />
                )}
                <span
                  onClick={() => deletePreviewHandler(id)}
                  className="flex-center"
                >
                  <HighlightOffIcon />
                </span>
              </li>
            );
          })}
        </ul>
        <div className="addPost_footer">
          <span>
            <label className="uploadImageLabel" htmlFor="postFile">
              <AddPhotoAlternateIcon />
            </label>
            <input
              type="file"
              id="postFile"
              accept="image/*"
              name="files"
              className="uploadImage"
              onChange={postHandler}
            />

            <span className="emojiPicker_container">
              <AddReactionIcon onClick={emojiModalHandler} />
              {emojiModalOpen && (
                <span className="emojiPicker_container-box" ref={emojiRef}>
                  <EmojiPicker
                    onEmojiClick={emojiPickerHandler}
                    suggestedEmojisMode={SuggestionMode.RECENT}
                    autoFocusSearch={false}
                    previewConfig={{
                      showPreview: false,
                    }}
                    searchDisabled
                    emojiStyle="native"
                    emojiVersion="1.0"
                    lazyLoadEmojis
                    skinTonesDisabled
                    height={250}
                    // theme={Theme.AUTO}
                  />
                </span>
              )}
            </span>
          </span>

          <button
            onClick={addNewPostHandler}
            className="btn postBtn"
            disabled={
              newPostData.message.length === 0 && newPostData.files.length === 0
            }
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
