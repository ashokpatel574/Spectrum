import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { getuserProfile } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import "./post.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  getPostEditService,
  postBookmarkService,
  deletePostService,
  addLikedPost,
  removeBookmarkService,
  removeLikedPost,
} from "../../services/postServices";

import { timeAgo } from "../../constant";

const Post = ({ post }) => {
  const {
    _id: postId,
    profileImage,
    username,
    createdAt,
    content,
    likes: { likeCount },
    comments,
  } = post;
  const { token, currentUser } = useAuth();
  const {
    state: { users, posts, userProfile },
    dispatch,
  } = useData();

  const navigate = useNavigate();

  const isPostBookmarked = userProfile?.bookmarks?.some(
    (bookItem) => bookItem._id === postId
  );

  const isPostLiked = posts
    .find((post) => post._id === postId)
    .likes.likedBy.some((post) => post.username === userProfile?.username);

  const postLikeHandler = (postId) => {
    isPostLiked
      ? removeLikedPost(postId, token, dispatch)
      : addLikedPost(postId, token, dispatch);
  };

  const postBookMarkHandler = (postId) => {
    isPostBookmarked
      ? removeBookmarkService(postId, token, dispatch, userProfile?.username)
      : postBookmarkService(postId, token, dispatch, userProfile?.username);
  };

  const profileHandler = () => {
    const getProfileId = users.find((user) => user.username === username)?._id;
    getuserProfile(getProfileId, dispatch);
    navigate(`/profile/${getProfileId}`);
  };

  const postEditHandler = (postId) => {
    getPostEditService(postId, dispatch);
  };

  const postDeleteHandler = (postId) => {
    deletePostService(token, postId, dispatch);
  };

  const postCommentHandler = () => {};

  return (
    <li className="feedListItem flex-column">
      <div className="feedListItem_header ">
        <div onClick={profileHandler} className="feedListItem_ImgContainer">
          <img src={profileImage} alt="profile" />
        </div>

        <div
          onClick={profileHandler}
          className="feedListItem_header-text flex-column"
        >
          <div className="feedListItem_header-text-partOne">
            <span className="fullname">
              {post?.firstname} {post?.lastname}
            </span>
          </div>

          <div className="feedListItem_header-text-partTwo">
            <span className="username">@{username}</span>
            <span className="postDate">{`${timeAgo(createdAt)}`}</span>
          </div>
        </div>

        {currentUser.username === username && (
          <div className="feedListItem_header-text-partThree">
            <span>
              <MoreHorizIcon />
            </span>
            <span className="post-settings flex-column">
              <span onClick={() => postEditHandler(postId, post)}>Edit</span>
              <span onClick={() => postDeleteHandler(postId)}>Delete</span>
            </span>
          </div>
        )}
      </div>

      <div className="feedListItem_main flex-column">
        <div className="feedListItem_InfoContainer-body flex-column">
          <p className="feedListItem_InfoContainer-body--content">{content}</p>
          {post?.postImage?.length > 0 &&
            post?.postImage.map((image, id) => (
              <div
                key={id}
                className="feedListItem_InfoContainer-body--postImage"
              >
                <img src={image} alt={content} />
              </div>
            ))}
        </div>
        <div className="feedListItem_InfoContainer-footer">
          <span
            className={`post_likeIcon ${isPostLiked && "selected"}`}
            onClick={() => postLikeHandler(postId)}
          >
            {isPostLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            {likeCount > 0 && <span className="likeCount">{likeCount}</span>}
          </span>
          <span className="post_commentIcon">
            <ChatBubbleOutlineIcon />
            {comments.length > 0 && (
              <span
                className="commentCount"
                onClick={() => postCommentHandler(postId)}
              >
                {comments.length}
              </span>
            )}
          </span>
          <span
            className={`post_bookmarkIcon ${isPostBookmarked && "marked"}`}
            onClick={() => postBookMarkHandler(postId)}
          >
            {isPostBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </span>
          <span className="post_shareIcon">
            <ShareIcon />
          </span>
        </div>
      </div>
    </li>
  );
};

export default Post;
