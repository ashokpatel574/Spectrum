import { useData } from "../../context/DataContext";
import PostList from "../../components/PostList/PostList";
import { getfilterDataBySort } from "../../utils/utils";

const BookmarkPage = () => {
  const {
    state: { userProfile, sortFeedTypeBookmark },
  } = useData();

  const bookmarksData = userProfile?.bookmarks;

  const filteredFeedBySort =
    userProfile && getfilterDataBySort(bookmarksData, sortFeedTypeBookmark);

  return (
    <section className="postFeed_container">
      {bookmarksData?.length > 0 ? (
        <PostList
          postListData={filteredFeedBySort}
          headerState={"Bookmark"}
          sortFeedType={sortFeedTypeBookmark}
        />
      ) : (
        <p className="emptyFeed">You don't have any posts bookmarked!</p>
      )}
    </section>
  );
};

export default BookmarkPage;
