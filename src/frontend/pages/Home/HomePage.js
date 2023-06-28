import { useData } from "../../context/DataContext";
import { getUserFollowingList } from "../../utils/utils";
import AddPost from "../../components/AddPost/AddPost";
import PostList from "../../components/PostList/PostList";

const HomePage = () => {
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

export default HomePage;
