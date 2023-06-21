import React, { useState } from "react";
import "./addPost.css";
import { useAuth } from "../../context/AuthContext";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EmojiPicker, { SuggestionMode } from "emoji-picker-react";
import AddReactionIcon from "@mui/icons-material/AddReaction";

import { useData } from "../../context/DataContext";
import { useEmoji } from "../../utils/helper";
import {
  addNewPostFunc,
  deletePreviewFunc,
  postDataFunc,
} from "../../utils/utils";

const AddPost = () => {
  const [newPostData, setNewPostData] = useState({
    message: "",
    files: [],
  });

  const { token } = useAuth();
  const {
    state: { userProfile },
    dispatch,
  } = useData();
  const { emojiModalOpen, emojiModalHandler, emojiPickerHandler } = useEmoji(
    newPostData,
    setNewPostData
  );

  const postHandler = (e) => postDataFunc(e, setNewPostData, newPostData);

  const deletePreviewHandler = (id) =>
    deletePreviewFunc(id, setNewPostData, newPostData);

  const addNewPostHandler = () =>
    addNewPostFunc(newPostData, setNewPostData, token, dispatch);

  return (
    <div className="addPost_container flex-column">
      <div className="addPost_InfoContainer ">
        <div className="addPost_ImgContainer">
          <img src={userProfile?.profileImage} alt="profile" />
        </div>
        <div className="addPost_message">
          <label htmlFor="addPostMessage"></label>
          <textarea
            placeholder="What's on your mind?"
            id="addPostMessage"
            maxLength={200}
            name="message"
            value={newPostData.message}
            onChange={postHandler}
          >
            {newPostData.message}
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
                <span onClick={() => deletePreviewHandler(id)}> X</span>
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
                <span className="emojiPicker_container-box">
                  <EmojiPicker
                    onEmojiClick={emojiPickerHandler}
                    suggestedEmojisMode={SuggestionMode.RECENT}
                    autoFocusSearch={false}
                    // theme={Theme.AUTO}
                    // height={350}
                    // width="50%"
                  />
                </span>
              )}
            </span>
          </span>

          <button onClick={addNewPostHandler} className="btn postBtn">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
