import "./sugestionFeed.css";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";

const SuggestionFeed = () => {
  const {
    state: { users },
  } = useData();
  const { currentUser } = useAuth();

  const currentUserFollowing = currentUser?.following.map(
    ({ username }) => username
  );

  const suggestProfile = users.filter(
    (user) =>
      !currentUserFollowing.includes(user.username) &&
      user.username !== currentUser.username
  );

  return (
    <section className="suggestion_container">
      <p className="suggestion_title">Who to follow?</p>
      <ul className="flex-column">
        {suggestProfile?.map((profile) => (
          <li key={profile.username} className="suggestionListItem">
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
              <button className="btn followBtn"> + Follow</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SuggestionFeed;
