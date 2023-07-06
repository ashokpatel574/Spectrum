import { useData } from "../../context/DataContext";
import PostList from "../../components/PostList/PostList";
import { getfilterDataBySort } from "../../utils/utils";
import PostListHeader from "../../components/PostListHeader/PostListHeader";

const ExplorePage = () => {
  const {
    state: { posts, sortFeedTypeDefault },
  } = useData();

  const filteredFeedBySort =
    posts && getfilterDataBySort(posts, sortFeedTypeDefault);

  return (
    <section className="postFeed_container">
      <PostListHeader
        postListData={filteredFeedBySort}
        headerState={"Explore"}
        sortFeedType={sortFeedTypeDefault}
      />
      <PostList postListData={filteredFeedBySort} />
    </section>
  );
};

export default ExplorePage;
