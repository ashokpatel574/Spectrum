import React, { useEffect, useState } from "react";
import { useData } from "../../context/DataContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import "./profileModal.css";
import { updateUserProfileService } from "../../services/userServices";
import { useAuth } from "../../context/AuthContext";

const ProfileModal = () => {
  const [updatedProfileData, setUpdatedProfileData] = useState({
    profileImage: "",
    firstname: "",
    lastname: "",
    email: "",
    bio: "",
    link: "",
  });

  const [profileDataError, setProfileDataError] = useState({
    profileImage: "",
    firstname: "",
    lastname: "",
    email: "",
    bio: "",
  });

  const { token } = useAuth();

  const {
    dispatch,
    state: { profileModalDetails },
  } = useData();

  const profileDataChangeHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedProfileData({
      ...updatedProfileData,
      [name]: value,
    });
  };

  const alternateUserImageHandler = (e) => {
    e.stopPropagation();
    const { files } = e.target;
    const filesUrl =
      files && [...files]?.map((file) => URL.createObjectURL(file));

    setUpdatedProfileData({
      ...updatedProfileData,
      profileImage: filesUrl.at(0),
    });
  };

  const updateUserProfileHandler = () => {
    updateUserProfileService(token, updatedProfileData, dispatch);
    setUpdatedProfileData({
      profileImage: "",
      firstname: "",
      lastname: "",
      email: "",
      bio: "",
      link: "",
    });
  };

  const closeProfileModalHandler = () => {
    dispatch({
      type: "closeProfileModal",
    });
    setUpdatedProfileData({
      profileImage: "",
      firstname: "",
      lastname: "",
      email: "",
      bio: "",
      link: "",
    });
  };

  useEffect(() => {
    if (profileModalDetails) {
      setUpdatedProfileData({
        ...updatedProfileData,
        profileImage: profileModalDetails?.profileImage,
        firstname: profileModalDetails?.firstname,
        lastname: profileModalDetails?.lastname,
        email: profileModalDetails?.email,
        bio: profileModalDetails?.bio,
        link: profileModalDetails?.website,
      });
    }
  }, []);

  return (
    <div className="profileModal_container flex-column">
      <div className="profileModal_container-header">
        <span className="title">Edit Profile</span>
        <span onClick={closeProfileModalHandler} className="closeModal">
          <HighlightOffIcon />
        </span>
      </div>
      <div className="profileModal_ImgContainer">
        <img src={updatedProfileData?.profileImage} alt="profile" />
        <span className="alternateImg">
          <label className="uploadImageLabel" htmlFor="alternateProfileFile">
            <AddPhotoAlternateIcon />
          </label>
          <input
            type="file"
            id="alternateProfileFile"
            accept="image/*"
            name="profileImageFiles"
            className="uploadProfileImage"
            onChange={alternateUserImageHandler}
          />
        </span>
      </div>

      <div className="profileModal_section type-1">
        <div className="profileModal_section-one">
          <label htmlFor="profileModalfirstname">First Name</label>
          <input
            id="profileModalfirstname"
            placeholder="Firstname"
            type="text"
            name="firstname"
            className="profileModal_firstname"
            value={updatedProfileData.firstname}
            onChange={profileDataChangeHandler}
          />
          <span>{profileDataError.firstname}</span>
        </div>
        <div className="profileModal_section-one">
          <label htmlFor="profileModallastname">Last Name</label>
          <input
            id="profileModallastname"
            placeholder="Lastname"
            type="text"
            name="lastname"
            className="profileModal_lastname"
            value={updatedProfileData.lastname}
            onChange={profileDataChangeHandler}
          />
          <span>{profileDataError.lastname}</span>
        </div>
      </div>

      <div className="profileModal_section type-2">
        <label htmlFor="profileModalemail">Email</label>
        <input
          id="profileModalemail"
          placeholder="Email"
          type="email"
          name="email"
          className="profileModal_email"
          value={updatedProfileData.email}
          onChange={profileDataChangeHandler}
        />
        <span>{profileDataError.email}</span>
      </div>

      <div className="profileModal_section type-2">
        <label htmlFor="profileModallink">Link</label>
        <input
          id="profileModallink"
          type="text"
          name="link"
          className="profileModal_link"
          value={updatedProfileData.link}
          onChange={profileDataChangeHandler}
        />
      </div>

      <div className="profileModal_section type-2">
        <label htmlFor="profileModalbio">Bio</label>
        <textarea
          id="profileModalbio"
          placeholder="Bio"
          className="profileModal_bio"
          maxLength={100}
          name="bio"
          value={updatedProfileData.bio}
          onChange={profileDataChangeHandler}
        ></textarea>
        <span>{profileDataError.bio}</span>
      </div>

      <button
        onClick={updateUserProfileHandler}
        className="btn updateProfileBtn"
      >
        Update
      </button>
    </div>
  );
};

export default ProfileModal;
