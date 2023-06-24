import { addNewPostService } from "../services/postServices";
import { toast } from "react-toastify";

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

const addNewPostFunc = (newPostData, setNewPostData, token, dispatch) => {
  newPostData.message.length > 1 &&
    addNewPostService(token, newPostData, dispatch);

  setNewPostData({
    message: "",
    files: [],
  });
};

const deletePreviewFunc = (id, setNewPostData, newPostData) => {
  setNewPostData({
    ...newPostData,
    files: newPostData.files.filter((item, index) => index !== id),
  });
};

const postDataFunc = (e, setNewPostData, newPostData) => {
  e.stopPropagation();
  const { name, value, files } = e.target;
  const filesUrl =
    files && [...files]?.map((file) => URL.createObjectURL(file));

  setNewPostData({
    ...newPostData,
    [name]: name === "message" ? value : [...newPostData.files, filesUrl],
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

    case "ClearFilter": {
      return [...dataToBeFiltered];
    }

    default: {
      return [...dataToBeFiltered];
    }
  }
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
  validateEmail,
  validateNumber,
  validateOnlyString,
  validatePassword,
  getUserFollowingList,
  addNewPostFunc,
  deletePreviewFunc,
  postDataFunc,
  getfilterDataBySort,
};
