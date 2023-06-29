import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { followService } from "../../services/userServices";
import { getUserFollowingList } from "../../utils/utils";

const SuggestionFeed = () => {
  const {
    state: { users, userProfile },
    dispatch,
  } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();

  const currentUserFollowing = getUserFollowingList(userProfile);
  const suggestProfile = users?.filter(
    (user) =>
      !currentUserFollowing?.includes(user.username) &&
      user.username !== userProfile?.username
  );

  const profileHandler = (profileId) => {
    navigate(`/profile/${profileId}`);
  };

  const followHandler = (e, followUserId) => {
    e.stopPropagation();
    followService(followUserId, token, dispatch);
  };

  return (
    <section className="suggestion_container">
      <p className="suggestion_title">Who to follow?</p>
      <ul className="flex-column">
        {suggestProfile.slice(0, 5)?.map((profile) => (
          <li
            key={profile.username}
            className="suggestionListItem"
            onClick={() => profileHandler(profile._id)}
          >
            <div className="suggestionListItem_ImgContainer">
              <img src={profile.profileImage} alt="profile" />
            </div>

            <div className="suggestionListItem_textContainer flex-column">
              <span className="fullname">
                {profile?.firstname} {profile?.lastname}
              </span>
              <span className="username">@{profile.username}</span>
            </div>

            <div className="suggestionListItem_BtnContainer">
              <button
                className="btn followBtn"
                onClick={(e) => followHandler(e, profile._id)}
              >
                follow
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SuggestionFeed;
