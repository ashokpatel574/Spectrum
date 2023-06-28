import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

import AvatarModal from "./AvatarModal";
import { useProfile } from "../../utils/helper";


const ProfileModal = () => {
  const {
    updatedProfileData,
    setUpdatedProfileData,
    profileDataError,
    isAvatarModalOpen,
    setIsAvatarModalOpen,
    profileDataChangeHandler,
    updateUserProfileHandler,
    closeProfileModalHandler,
    editUserImgHandler,
  } = useProfile();

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

        <span className="alternateImg" onClick={(e) => editUserImgHandler(e)}>
          <AddPhotoAlternateIcon />
        </span>
        {isAvatarModalOpen && (
          <AvatarModal
            isAvatarModalOpen={isAvatarModalOpen}
            setIsAvatarModalOpen={setIsAvatarModalOpen}
            setUpdatedProfileData={setUpdatedProfileData}
            updatedProfileData={updatedProfileData}
          />
        )}
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
        <span className="bioLength">
          {Number(100 - updatedProfileData.bio.length)}
        </span>
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
