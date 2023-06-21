import "./homeFeed.css";
import { useData } from "../../context/DataContext";
import AddPost from "../AddPost/AddPost";
import { getUserFollowingList } from "../../utils/utils";
import PostList from "../PostList/PostList";

const HomeFeed = () => {
  const {
    state: { posts, userProfile },
  } = useData();

  const currentUserFollowingList = getUserFollowingList(userProfile);

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
      <PostList postListData={homeFeedPost} headerState={"Home"} />
    </section>
  );
};

export default HomeFeed;
