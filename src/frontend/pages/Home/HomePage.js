import AddPost from "../../components/AddPost/AddPost";
import PostList from "../../components/PostList/PostList";
import PostListHeader from "../../components/PostListHeader/PostListHeader";
import Loader from "../../components/loader/Loader";

import { useData } from "../../context/DataContext";
import { getUserFollowingList, getfilterDataBySort } from "../../utils/utils";

const HomePage = () => {
  const {
    state: { posts, userProfile, sortFeedTypeHome },
    isLoadingData,
  } = useData();

  const currentUserFollowingList =
    userProfile && getUserFollowingList(userProfile);

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
          <PostListHeader
            postListData={filteredFeedBySort}
            headerState={"Home"}
            sortFeedType={sortFeedTypeHome}
          />
          <PostList postListData={filteredFeedBySort} />
        </section>
      )}
    </>
  );
};

export default HomePage;
