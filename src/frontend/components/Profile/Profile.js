import React from "react";
import { useAuth } from "../../context/AuthContext";
import LinkIcon from "@mui/icons-material/Link";
import "./profile.css";

const Profile = () => {
  const { currentUser } = useAuth();
  return (
    <div className="profile_container">
      <div className="profile_ImgContainer">
        <img src={currentUser?.profileImage} alt="profile" />
      </div>
      <div className="profile_detailsContainer flex-column">
        <div className="profile_details-partOne ">
          <div className="flex-column">
            <span className="fullname">
              {currentUser?.firstname} {currentUser?.lastname}
            </span>
            <span className="username">@{currentUser?.username}</span>
          </div>

          <div>
            <span className="profile-edit">Edit</span>
          </div>
        </div>

        <div className="profile_details-partTwo">
          <span>
            {currentUser?.content} Dream big, work hard, and make it happen.
            #Motivation Every day is a new opportunity to make a positive
            change. #NewDay #Inspiration
          </span>
        </div>
        <div className="profile_details-partThree">
          <span>00 Posts</span>
          <span> 00 Followers</span>
          <span> 00 Following</span>
        </div>
        <div className="profile_details-partFour">
          <span>
            <LinkIcon />
            https
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
