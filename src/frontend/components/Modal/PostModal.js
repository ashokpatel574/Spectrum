import React, { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { useAuth } from "../../context/AuthContext";

const PostModal = () => {
  const [newPostData, setNewPostData] = useState({
    message: "",
    files: [],
  });
  const { currentUser } = useAuth();

  return (
    <div className="postModal_container flex-column">
      <div className="postModal_InfoContainer ">
        <label htmlFor="postModalMessage"></label>
        <textarea
          placeholder="What's on your mind?"
          id="postModalMessage"
          maxLength={200}
          name="message"
          value={newPostData.message}
        >
          {newPostData.message}
        </textarea>
      </div>

      <div className="postModal_BtnContainer flex-column">
        <div className="postModal_ImgUpload-container">
          {newPostData?.files?.map((file, id) => {
            return (
              <div className="newPostImg-container" key={id}>
                {file && (
                  <img
                    src={file}
                    alt="post files"
                    width="200px"
                    height="200px"
                    className="newpostImg"
                  />
                )}
                <span> X</span>
              </div>
            );
          })}
        </div>
        <div className="postModal_footer">
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
            />

            <span>
              <AddReactionIcon />
            </span>
          </span>

          <button className="btn postBtn">Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
