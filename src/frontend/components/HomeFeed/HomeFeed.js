import React, { useState } from "react";
import { useData } from "../../context/DataContext";
import "./homeFeed.css";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const HomeFeed = () => {
  const [newPostData, setNewPostData] = useState({
    message: "",
    files: [],
  });
  const {
    state: { posts },
  } = useData();

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
    <section className="postFeed_container">
      <h3 className="postFeed_container-header">Home</h3>
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
      <ul>
        {posts?.map((post) => {
          const {
            _id: postId,
            profileImage,
            username,
            createdAt,
            content,
          } = post;

          return (
            <li key={postId} className="feedListItem">
              <div className="feedListItem_ImgContainer">
                <img src={profileImage} alt="profile" />
              </div>
              <div className="feedListItem_InfoContainer flex-column">
                <div className="feedListItem_InfoContainer-header">
                  <span>
                    Bhararti {post?.firstname} {post?.lastname}
                  </span>
                  <span>@{username}</span>
                  <span>{`${createdAt}`}</span>
                </div>
                <div className="feedListItem_InfoContainer-body flex-column">
                  <p className="feedListItem_InfoContainer-body--content">
                    {content}
                  </p>
                  {post?.postImage && (
                    <div className="feedListItem_InfoContainer-body--postImage">
                      <img src={post?.postImage} alt={content} />
                    </div>
                  )}
                </div>
                <div className="feedListItem_InfoContainer-footer">
                  <span className="post_likeIcon">
                    <FavoriteBorderIcon />
                  </span>
                  <span className="post_commenIcon">
                    <ChatBubbleOutlineIcon />
                  </span>
                  <span className="post_bookmarkIcon">
                    <BookmarkBorderIcon />
                  </span>
                  <span className="post_shareIcon">
                    <ShareIcon />
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HomeFeed;
