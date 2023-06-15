import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import {
  addLikedPost,
  getuserProfile,
  postBookmark,
  removeBookmark,
  removeLikedPost,
} from "../../services/dataServices";
import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { _id: postId, profileImage, username, createdAt, content } = post;
  const { token, currentUser } = useAuth();
  const {
    state: { bookmarks, users, posts },
    dispatch,
  } = useData();

  const navigate = useNavigate();

  const isPostBookmarked = bookmarks?.some(
    (bookItem) => bookItem._id === postId
  );

  const isPostLiked = posts
    .find((post) => post._id === postId)
    .likes.likedBy.some((post) => post.username === currentUser.username);

  const postLikeHandler = (postId) => {
    isPostLiked
      ? removeLikedPost(postId, token, dispatch)
      : addLikedPost(postId, token, dispatch);
  };

  const postBookMarkHandler = (postId) => {
    isPostBookmarked
      ? removeBookmark(postId, token, dispatch, currentUser.username)
      : postBookmark(postId, token, dispatch, currentUser.username);
  };

  const getProfileId = users.find((user) => user.username === username)?._id;

  const profileHandler = () => {
    getuserProfile(getProfileId, dispatch);
    navigate(`profile/${getProfileId}`);
  };

  return (
    <li className="feedListItem">
      <div onClick={profileHandler} className="feedListItem_ImgContainer">
        <img src={profileImage} alt="profile" />
      </div>
      <div className="feedListItem_InfoContainer flex-column">
        <div
          onClick={profileHandler}
          className="feedListItem_InfoContainer-header"
        >
          <span>
            {post?.firstname} {post?.lastname}
          </span>
          <span>@{username}</span>
          <span>{`${createdAt}`}</span>
        </div>
        <div className="feedListItem_InfoContainer-body flex-column">
          <p className="feedListItem_InfoContainer-body--content">{content}</p>
          {post?.postImage && (
            <div className="feedListItem_InfoContainer-body--postImage">
              <img src={post?.postImage} alt={content} />
            </div>
          )}
        </div>
        <div className="feedListItem_InfoContainer-footer">
          <span
            className={`post_likeIcon ${isPostLiked && "selected"}`}
            onClick={() => postLikeHandler(postId)}
          >
            {isPostLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </span>
          <span className="post_commenIcon">
            <ChatBubbleOutlineIcon />
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
