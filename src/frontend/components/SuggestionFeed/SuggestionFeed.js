import "./sugestionFeed.css";
import { useData } from "../../context/DataContext";
import { getuserProfile, updateFollowList } from "../../services/dataServices";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SuggestionFeed = () => {
  const {
    state: { users, userProfile },
    dispatch,
  } = useData();

  const { token } = useAuth();

  const currentUserFollowing = userProfile?.following?.map(
    ({ username }) => username
  );

  const navigate = useNavigate();

  const suggestProfile = users?.filter(
    (user) =>
      !currentUserFollowing?.includes(user.username) &&
      user.username !== userProfile?.username
  );

  const profileHandler = (username) => {
    const getProfileId = users.find((user) => user.username === username)?._id;

    getuserProfile(getProfileId, dispatch);
    navigate(`/profile/${getProfileId}`);
  };

  const followHandler = (e, followUserId) => {
    e.stopPropagation();
    updateFollowList(followUserId, token, dispatch);
  };

  return (
    <section className="suggestion_container">
      <p className="suggestion_title">Who to follow?</p>
      <ul className="flex-column">
        {suggestProfile?.map((profile) => (
          <li
            key={profile.username}
            className="suggestionListItem"
            onClick={() => profileHandler(profile.username)}
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
                {" "}
                + Follow
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SuggestionFeed;
