import { useData } from "../../context/DataContext";
import { getUserFollowingList, getfilterDataBySort } from "../../utils/utils";
import AddPost from "../../components/AddPost/AddPost";
import PostList from "../../components/PostList/PostList";
import Loader from "../../components/loader/Loader";

const HomePage = () => {
  const {
    state: { posts, userProfile, sortFeedTypeHome },
    isLoadingData,
  } = useData();

  const currentUserFollowingList = getUserFollowingList(userProfile);

  const homeFeedPost = posts?.filter((post) => {
    return (
      currentUserFollowingList?.some(
        (listItem) => listItem === post?.username
      ) || post?.username === userProfile?.username
    );
  });

  const filteredFeedBySort = getfilterDataBySort(
    homeFeedPost,
    sortFeedTypeHome
  );

  return (
    <>
      {isLoadingData ? (
        <Loader />
      ) : (
        <section className="postFeed_container">
          <AddPost />
          <PostList
            postListData={filteredFeedBySort}
            headerState={"Home"}
            sortFeedType={sortFeedTypeHome}
          />
        </section>
      )}
    </>
  );
};

export default HomePage;
