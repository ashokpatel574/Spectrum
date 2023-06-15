import "./sugestionFeed.css";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";

const SuggestionFeed = () => {
  const {
    state: { posts, users },
  } = useData();
  const { currentUser } = useAuth();

  const currentUserFollowing = currentUser.following.map(
    ({ username }) => username
  );

  console.log(currentUserFollowing);

  const suggestProfile = users.filter(
    (user) =>
      !currentUserFollowing.includes(user.username) &&
      user.username !== currentUser.username
  );

  return (
    <section className="suggestion_container">
      <h3 className="suggestion_title">Suggestion</h3>
      {
        <ul>
          {suggestProfile?.map((profile) => (
            <li key={profile.username}>
              {profile.firstname + " " + profile.lastname}
            </li>
          ))}
        </ul>
      }
    </section>
  );
};

export default SuggestionFeed;
