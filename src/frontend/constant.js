import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  PinterestShareButton,
  PinterestIcon,
} from "react-share";

export const AVATAR_IMGS = [
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-2_xbo2oi.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-1_up9sv8.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-7_azvwnb.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-4_tlvldl.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-5_gktqna.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-5_gktqna.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-3_d5wmgo.png",
  "https://res.cloudinary.com/dz0snqho8/image/upload/v1687781047/shippr/Avatar/avatar-6_wmrhem.png",
];

export const ActionType = {
  InitialServerFetch: "INITIAL_SERVER_DATA",
  AllPosts: "ALL_POSTS",
  AllUsers: "ALL_USERS",
  UserBookmarkFetch: "USER_BOOKMARK_FETCH",
  SetBookmarkData: "SET_BOOKMARK_DATA",
  TogglePostLike: "TOGGLE_POST_LIKE",
  AddPost: "ADD_POST",
  DeletePost: "DELETE_POST",
  UpdatePost: "UPDATE_POST",
  OpenPostModal: "OPEN_POST_MODAL",
  ClosePostModal: "CLOSE_POST_MODAL",
  UpdateUserFollowerList: "UPDATE_USER_FOLLOWER_LIST",
  OpenProfileModal: "OPEN_PROFILE_MODAL",
  CloseProfileModal: "CLOSE_PROFILE_MODAL",
  UpdateProfile: "UPDATE_PROFILE",
  LogOut: "LOG_OUT",
  FilterFeed: "FILTER_FEED",
  FilterFeedHome: "FILTER_FEED_HOME",
  FilterFeedLiked: "FILTER_FEED_LIKED",
  FilterFeedBookmark: "FILTER_FEED_BOOKMARK",
  FilterFeedProfile: "FILTER_FEED_PROFILE",
};

export const ToastType = {
  Warn: "warn",
  Success: "success",
  Info: "info",
  Error: "error",
};

export const shareButtonIcon = [
  { Button: FacebookShareButton, Icon: FacebookIcon },
  {
    Button: RedditShareButton,
    Icon: RedditIcon,
  },
  {
    Button: TelegramShareButton,
    Icon: TelegramIcon,
  },
  { Button: TwitterShareButton, Icon: TwitterIcon },
  {
    Button: WhatsappShareButton,
    Icon: WhatsappIcon,
  },
  {
    Button: LinkedinShareButton,
    Icon: LinkedinIcon,
  },
  {
    Button: FacebookMessengerShareButton,
    Icon: FacebookMessengerIcon,
  },
  { Button: PinterestShareButton, Icon: PinterestIcon },
];
