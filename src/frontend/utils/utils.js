import { toast } from "react-toastify";
import { ActionType } from "../constant";

const validateNumber = (input) => {
  return /^[0-9]+$/.test(input);
};

const validateOnlyString = (input) => {
  return /^[a-z A-Z]+$/.test(input);
};

const validateEmail = (input) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    input.toLowerCase()
  );
};

const validatePassword = (input) => {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/gm.test(input);
};

const getUserFollowingList = (currentUser) => {
  return currentUser?.following?.map((item) => item?.username);
};

const deletePreviewFunc = (id, data, setData) => {
  setData({
    ...data,
    files: data.files.filter((item, index) => index !== id),
  });
};

const postDataFunc = (e, data, setData) => {
  e.stopPropagation();
  const { name, value, files } = e.target;
  const filesUrl =
    files && [...files]?.map((file) => URL.createObjectURL(file));

  setData({
    ...data,
    [name]: name === "message" ? value : [...data.files, filesUrl],
  });
};

const getfilterDataBySort = (dataToBeFiltered, sortOptions) => {
  switch (sortOptions) {
    case "Trending": {
      return [...dataToBeFiltered]?.sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );
    }

    case "Latest": {
      return [...dataToBeFiltered]?.sort((a, b) => {
        return Date.parse(b.createdAt) - Date.parse(a.createdAt);
      });
    }

    case "Oldest": {
      return [...dataToBeFiltered]?.sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
      );
    }

    default: {
      return [...dataToBeFiltered];
    }
  }
};

export const getFiltertypeState = (header) => {
  switch (header) {
    case "Home": {
      return ActionType.FilterFeedHome;
    }

    case "Liked Posts": {
      return ActionType.FilterFeedLiked;
    }

    case "Bookmark": {
      return ActionType.FilterFeedBookmark;
    }

    case "Explore": {
      return ActionType.FilterFeed;
    }

    default: {
      return ActionType.FilterFeed;
    }
  }
};

const timeAgo = (date) => {
  let currentDate = new Date();
  let yearDiff = currentDate.getFullYear() - new Date(date).getFullYear();

  if (yearDiff > 0) return `${yearDiff} year${yearDiff === 1 ? "" : "s"} ago`;

  let monthDiff = currentDate.getMonth() - new Date(date).getMonth();
  if (monthDiff > 0)
    return `${monthDiff} month${monthDiff === 1 ? "" : "s"} ago`;

  let dateDiff = currentDate.getDate() - new Date(date).getDate();
  if (dateDiff > 0) return `${dateDiff} day${dateDiff === 1 ? "" : "s"} ago`;

  let hourDiff = currentDate.getHours() - new Date(date).getHours();
  if (hourDiff > 0) return `${hourDiff} hour${hourDiff === 1 ? "" : "s"} ago`;

  let minuteDiff = currentDate.getMinutes() - new Date(date).getMinutes();
  if (minuteDiff > 0)
    return `${minuteDiff} minute${minuteDiff === 1 ? "" : "s"} ago`;
  return `a few seconds ago`;
};

export const ToastType = {
  Warn: "warn",
  Success: "success",
  Info: "info",
  Error: "error",
};

export const ToastHandler = (type, message) => {
  const toastConfigObj = {
    position: "top-right",
    autoClose: 1000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: `${"light"}`,
  };
  if (type === "error") {
    toast.error(message, toastConfigObj);
  } else if (type === "warn") {
    toast.warn(message, toastConfigObj);
  } else if (type === "success") {
    toast.success(message, toastConfigObj);
  } else if (type === "info") {
    toast.info(message, toastConfigObj);
  }
};

export {
  timeAgo,
  validateEmail,
  validateNumber,
  validateOnlyString,
  validatePassword,
  getUserFollowingList,
  deletePreviewFunc,
  postDataFunc,
  getfilterDataBySort,
};
