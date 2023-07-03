import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { timeAgo } from "../../utils/utils";
import { useClickedOutsideDropBox, usePost } from "../../utils/helper";
import { useRef, useState } from "react";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { shareButtonIcon } from "../../constant";

const Post = ({ post }) => {
  const [showSharePostModal, setShowSharePostModal] = useState(false);
  const {
    _id: postId,
    profileImage,
    username,
    createdAt,
    content,
    likes: { likeCount },
    comments,
  } = post;

  const postRef = useRef(null);
  const sharePostModalRef = useRef(null);

  const {
    userProfile,
    postEdit,
    setPostEdit,
    isPostLiked,
    isPostBookmarked,
    postLikeHandler,
    postBookMarkHandler,
    postEditHandler,
    postDeleteHandler,
    postCommentHandler,
    profileHandler,
  } = usePost(post);

  useClickedOutsideDropBox(postEdit, setPostEdit, postRef);
  useClickedOutsideDropBox(
    showSharePostModal,
    setShowSharePostModal,
    sharePostModalRef
  );

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
            <span className="postDate">{`${timeAgo(createdAt)}`}</span>
          </div>

          <div className="feedListItem_header-text-partTwo">
            <span className="username">@{username}</span>
          </div>
        </div>

        {userProfile.username === username && (
          <div className="feedListItem_header-text-partThree" ref={postRef}>
            <span onClick={() => setPostEdit(!postEdit)}>
              <MoreHorizIcon />
            </span>
            {postEdit && (
              <span className="post-settings flex-column">
                <span onClick={() => postEditHandler(postId, post)}>Edit</span>
                <span onClick={() => postDeleteHandler(postId)}>Delete</span>
              </span>
            )}
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
                <img src={image} alt={content} width="500px" height="500px" />
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
          <span
            className="post_shareIcon"
            onClick={() => setShowSharePostModal(true)}
          >
            <ShareIcon />
          </span>
        </div>
      </div>

      {showSharePostModal && (
        <div className="sharePost_modal-container" ref={sharePostModalRef}>
          <p className="sharePost_header">
            <span>Share Post</span>
            <span onClick={() => setShowSharePostModal(false)}>
              <HighlightOffIcon />
            </span>
          </p>

          <div className="sharePost_body">
            {shareButtonIcon?.map(({ Button, Icon }, id) => (
              <span className="post_shareIcon" key={id}>
                <Button url={window.location.href} via={userProfile?.username}>
                  <Icon size={34} round />
                </Button>
              </span>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};

export default Post;
