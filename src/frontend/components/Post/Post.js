import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";

const Post = ({ post }) => {
  const { _id: postId, profileImage, username, createdAt, content } = post;

  const { currentUser } = useAuth();

  console.log(currentUser);

  const isPostBookmarked = currentUser.bookmarks.includes(postId);

  const postLikeHandler = (postId) => {};

  const postBookMarkHandler = (postId) => {};

  return (
    <li className="feedListItem">
      <div className="feedListItem_ImgContainer">
        <img src={profileImage} alt="profile" />
      </div>
      <div className="feedListItem_InfoContainer flex-column">
        <div className="feedListItem_InfoContainer-header">
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
            className="post_likeIcon"
            onClick={() => postLikeHandler(postId)}
          >
            <FavoriteBorderIcon />
          </span>
          <span className="post_commenIcon">
            <ChatBubbleOutlineIcon />
          </span>
          <span
            className="post_bookmarkIcon"
            onClick={() => postBookMarkHandler(postId)}
          >
            <BookmarkBorderIcon />
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
