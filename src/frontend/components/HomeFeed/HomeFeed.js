import "./homeFeed.css";
import { useData } from "../../context/DataContext";
import Post from "../Post/Post";
import AddPost from "../AddPost/AddPost";
import FeedHeader from "../FeedHeader/FeedHeader";

const HomeFeed = () => {
  const {
    state: { posts, userProfile },
  } = useData();

  const currentUserFollowingList = userProfile?.following?.map(
    (item) => item?.username
  );

  const homeFeedPost = posts?.filter((post) => {
    return (
      currentUserFollowingList?.some(
        (listItem) => listItem === post?.username
      ) || post?.username === userProfile?.username
    );
  });

  return (
    <section className="postFeed_container">
      <AddPost />
      <FeedHeader headerState={"Home"} />
      <ul className="flex-column">
        {homeFeedPost?.map((post, id) => {
          return <Post key={id} post={post} />;
        })}
      </ul>
    </section>
  );
};

export default HomeFeed;
