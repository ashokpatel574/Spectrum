import { addNewPostService } from "../services/postServices";

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

export {
  validateEmail,
  validateNumber,
  validateOnlyString,
  validatePassword,
  getUserFollowingList,
  addNewPostFunc,
  deletePreviewFunc,
  postDataFunc,
};
