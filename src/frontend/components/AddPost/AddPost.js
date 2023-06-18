import React, { useState } from "react";
import "./addPost.css";
import { useAuth } from "../../context/AuthContext";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddReactionIcon from "@mui/icons-material/AddReaction";

const AddPost = () => {
  const [newPostData, setNewPostData] = useState({
    message: "",
    files: [],
  });

  const { currentUser } = useAuth();

  const postHandler = (e) => {
    const { name, value, files } = e.target;
    const filesUrl = [...files]?.map((file) => URL.createObjectURL(file));

    setNewPostData({
      ...newPostData,
      [name]: name === "message" ? value : [...newPostData.files, ...filesUrl],
    });
  };

  const deletePreviewHandler = (id) => {
    setNewPostData({
      ...newPostData,
      files: newPostData.files.filter((item, index) => index !== id),
    });
  };

  return (
    <div className="addPost_container flex-column">
      <div className="addPost_InfoContainer ">
        <div className="addPost_ImgContainer">
          <img src={currentUser?.profileImage} alt="profile" />
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
        <div className="addPost_ImgUpload-container">
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
                <span onClick={() => deletePreviewHandler(id)}> X</span>
              </div>
            );
          })}
        </div>
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

export default AddPost;
