import "./homeFeed.css";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import Post from "../Post/Post";
import AddPost from "../AddPost/AddPost";

const HomeFeed = () => {
  const {
    state: { posts },
  } = useData();
  const { currentUser } = useAuth();

  const currentUserFollowingList = currentUser.following.map(
    (item) => item.username
  );

  const homeFeedPost = posts.filter((post) => {
    return (
      currentUserFollowingList.some((listItem) => listItem === post.username) ||
      post.username === currentUser.username
    );
  });

  return (
    <section className="postFeed_container">
      <h3 className="postFeed_container-header">Home</h3>
      <AddPost />
      <ul>
        {homeFeedPost?.map((post, id) => {
          return <Post key={id} post={post} />;
        })}
      </ul>
    </section>
  );
};

export default HomeFeed;
