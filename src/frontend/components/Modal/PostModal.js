import React, { useEffect, useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { useAuth } from "../../context/AuthContext";
import "./postmodal.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EmojiPicker, { SuggestionMode } from "emoji-picker-react";
import { useData } from "../../context/DataContext";
import { postEditService } from "../../services/postServices";
import { useEmoji } from "../../utils/helper";
import {
  addNewPostFunc,
  deletePreviewFunc,
  postDataFunc,
} from "../../utils/utils";

const PostModal = () => {
  const [postModalData, setPostModalData] = useState({
    message: "",
    files: [],
  });

  const { token } = useAuth();
  const {
    dispatch,
    state: { postModalDetails, isPostEdited },
  } = useData();
  const { emojiModalOpen, emojiModalHandler, emojiPickerHandler } = useEmoji(
    postModalData,
    setPostModalData
  );

  const postModalHandler = (e) =>
    postDataFunc(e, setPostModalData, postModalData);

  const addNewPostHandler = () =>
    addNewPostFunc(postModalData, setPostModalData, token, dispatch);

  const deletePreviewHandler = (id) =>
    deletePreviewFunc(id, setPostModalData, postModalData);

  const updatePostModalDataHandler = () => {
    const updatedPost = {
      ...postModalDetails,
      content: postModalData?.message,
      postImage:
        postModalData?.files?.length === 0 ? null : postModalData?.files,
    };
    postEditService(token, postModalDetails._id, updatedPost, dispatch);
  };

  const closePostModalHandler = () => {
    dispatch({
      type: "closePostModal",
    });
  };

  useEffect(() => {
    if (isPostEdited) {
      setPostModalData({
        message: postModalDetails?.content,
        files: postModalDetails?.postImage || [],
      });
    }
  }, [isPostEdited]);

  return (
    <div className="postModal_container flex-column">
      <div className="postModal_container-header">
        <span className="title">Edit Post</span>
        <span onClick={closePostModalHandler} className="closeModal">
          <HighlightOffIcon />
        </span>
      </div>
      <div className="postModal_InfoContainer ">
        <label htmlFor="postModalMessage"></label>
        <textarea
          placeholder="What's on your mind?"
          id="postModalMessage"
          maxLength={200}
          name="message"
          value={postModalData.message}
          onChange={postModalHandler}
        >
          {postModalData.message}
        </textarea>
      </div>

      <div className="postModal_BtnContainer flex-column">
        <ul className="postModal_ImgUpload-container">
          {postModalData?.files?.map((file, id) => {
            return (
              <li className="newPostModalImg-container" key={id}>
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
        <div className="postModal_footer">
          <span>
            <label className="uploadImageLabel" htmlFor="postModalFile">
              <AddPhotoAlternateIcon />
            </label>
            <input
              type="file"
              id="postModalFile"
              accept="image/*"
              name="files"
              className="uploadImage"
              onChange={postModalHandler}
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

          {isPostEdited ? (
            <button
              onClick={updatePostModalDataHandler}
              className="btn updatepostBtn"
            >
              Update
            </button>
          ) : (
            <button onClick={addNewPostHandler} className="btn updatepostBtn">
              Post
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostModal;
