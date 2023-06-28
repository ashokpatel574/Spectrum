import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { AVATAR_IMGS } from "../../constant";

const AvatarModal = ({
  isAvatarModalOpen,
  setIsAvatarModalOpen,
  updatedProfileData,
  setUpdatedProfileData,
}) => {
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);

  const avatarSelectHandler = (e) => {
    e.stopPropagation();
    setShowAvatarOptions(!showAvatarOptions);
  };

  const avatarOptionsSelectHandler = (e, item) => {
    e.stopPropagation();
    setUpdatedProfileData({ ...updatedProfileData, profileImage: item });
    setShowAvatarOptions(!showAvatarOptions);
    setIsAvatarModalOpen(!isAvatarModalOpen);
  };

  const closeAvatarOptionsModalHandler = (e) => {
    e.stopPropagation();
    if (
      e.target.className === "avatarModal_chooseOverlay" ||
      e.target.nodeName === "svg"
    ) {
      setShowAvatarOptions(!showAvatarOptions);
      setIsAvatarModalOpen(!isAvatarModalOpen);
    }
  };

  const alternateUserImageHandler = (e) => {
    e.stopPropagation();
    const { files } = e.target;
    const filesUrl =
      files && [...files]?.map((file) => URL.createObjectURL(file));

    setUpdatedProfileData({
      ...updatedProfileData,
      profileImage: filesUrl?.at(0),
    });
    setIsAvatarModalOpen(!isAvatarModalOpen);
  };

  return (
    <div className="avatarModal_container">
      <div className="avatarModal_choose-container">
        <div
          className="avatarModal_choose"
          onClick={(e) => avatarSelectHandler(e)}
        >
          <span className="avatarModal_chooseIcon">
            <AccountCircleIcon />
          </span>
          <span className="avatarModal_chooseText">Choose Avatar</span>
        </div>
        {showAvatarOptions && (
          <div
            className="avatarModal_chooseOverlay"
            onClick={(e) => {
              closeAvatarOptionsModalHandler(e);
            }}
          >
            <div className="avatarOptions-container">
              <div className="avatarOptions-Text">
                <span>Choose Avatar</span>
                <span onClick={(e) => closeAvatarOptionsModalHandler(e)}>
                  <HighlightOffIcon />
                </span>
              </div>
              <div className="avatarOptions-Imgcontainer">
                {AVATAR_IMGS.map((item, id) => (
                  <div
                    key={id}
                    onClick={(e) => {
                      avatarOptionsSelectHandler(e, item);
                    }}
                    className="avatarOptions-Img"
                  >
                    <img src={item} alt={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="avatarModal_upload-container">
        <label htmlFor="alternateProfileFile">
          <span className="avatarModal_upload">
            <span className="avatarModal_uploadIcon">
              <FileUploadIcon />
            </span>
            <span className="avatarModal_uploadText">Upload</span>
          </span>
        </label>
        <input
          type="file"
          id="alternateProfileFile"
          accept="image/*"
          name="profileImageFiles"
          className="uploadProfileImage"
          onChange={alternateUserImageHandler}
        />
      </div>
    </div>
  );
};

export default AvatarModal;
