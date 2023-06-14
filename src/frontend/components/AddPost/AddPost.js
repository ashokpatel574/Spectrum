import React, { useState } from "react";

const AddPost = () => {
  const [newPostData, setNewPostData] = useState({
    message: "",
    files: [],
  });

  const postHandler = (e) => {
    const { name, value, files } = e.target;
    const filesUrl = [...files].map((file) => URL.createObjectURL(file));
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
    <div className="addPost_container">
      <div className="addPost_ImgContainer">
        {/* <img src={posts[0].profileImage} alt="profile" /> */}
      </div>
      <div className="addPost_InfoContainer flex-column">
        <div className="addPost_message">
          <div>
            <label htmlFor="addPostMessage"></label>
            <textarea
              placeholder="Message"
              id="addPostMessage"
              maxLength={200}
              name="message"
              value={newPostData.message}
              onChange={postHandler}
            >
              {newPostData.message}
            </textarea>
          </div>
          <div>
            {newPostData?.files?.map((file, id) => {
              return (
                <div className="newPostImg-container">
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
          <div>
            <label className="uploadImageLabel" htmlFor="postFile">
              Add files
            </label>
            <input
              type="file"
              id="postFile"
              accept="image/*"
              name="files"
              className="uploadImage"
              onChange={postHandler}
            />
            <button className="btn postBtn">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
