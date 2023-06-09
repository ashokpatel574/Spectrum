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

  const currentUserProfile = users?.find(
    (user) => user?.username === userProfile?.username
  );

  const currentUserFollowing = getUserFollowingList(currentUserProfile);

  const suggestProfile = users?.filter(
    (user) =>
      !currentUserFollowing?.includes(user.username) &&
      user.username !== userProfile?.username
  );

  const profileHandler = (profileId) => {
    navigate(`/profile/${profileId}`);
  };

  const followHandler = (e, followUserId, userfirstname, userLastname) => {
    e.stopPropagation();
    followService(followUserId, token, dispatch, userfirstname, userLastname);
  };

  return (
    <>
      {suggestProfile?.length > 0 && (
        <section className="suggestion_container">
          <p className="suggestion_title">Suggested Users</p>
          <ul className="flex-column">
            {suggestProfile?.slice(0, 5)?.map((profile) => (
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
                    onClick={(e) =>
                      followHandler(
                        e,
                        profile._id,
                        profile?.firstname,
                        profile?.lastname
                      )
                    }
                  >
                    follow
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default SuggestionFeed;
