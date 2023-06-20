import React, { useState } from "react";
import "./addPost.css";
import { useAuth } from "../../context/AuthContext";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import EmojiPicker, { Theme, SuggestionMode } from "emoji-picker-react";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { addNewPost } from "../../services/dataServices";
import { useData } from "../../context/DataContext";

const AddPost = () => {
  const [newPostData, setNewPostData] = useState({
    message: "",
    files: [],
  });
  const [emojiModalOpen, setEmojiModalOpen] = useState(false);
  const { token } = useAuth();
  const {
    state: { userProfile },
    dispatch,
  } = useData();

  const postHandler = (e) => {
    e.stopPropagation();
    const { name, value, files } = e.target;
    const filesUrl =
      files && [...files]?.map((file) => URL.createObjectURL(file));

    setNewPostData({
      ...newPostData,
      [name]: name === "message" ? value : [...newPostData.files, filesUrl],
    });
  };

  const deletePreviewHandler = (id) => {
    setNewPostData({
      ...newPostData,
      files: newPostData.files.filter((item, index) => index !== id),
    });
  };

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

  const addPostHandler = () => {
    newPostData.message.length > 1 && addNewPost(token, newPostData, dispatch);

    setNewPostData({
      message: "",
      files: [],
    });
  };

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

          <button onClick={addPostHandler} className="btn postBtn">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
