import { useData } from "../../context/DataContext";
import PostList from "../../components/PostList/PostList";
import { getfilterDataBySort } from "../../utils/utils";
import PostListHeader from "../../components/PostListHeader/PostListHeader";

const BookmarkPage = () => {
  const {
    state: { userProfile, sortFeedTypeBookmark, users },
  } = useData();

  const currentUserProfile = users?.find(
    (userItem) => userItem?.username === userProfile?.username
  );

  const bookmarksData = currentUserProfile?.bookmarks;
  const filteredFeedBySort =
    currentUserProfile &&
    getfilterDataBySort(bookmarksData, sortFeedTypeBookmark);

  return (
    <section className="postFeed_container">
      {bookmarksData?.length > 0 ? (
        <>
          <PostListHeader
            postListData={filteredFeedBySort}
            headerState={"Bookmark"}
            sortFeedType={sortFeedTypeBookmark}
          />
          <PostList postListData={filteredFeedBySort} />
        </>
      ) : (
        <p className="emptyFeed">You don't have any posts bookmarked!</p>
      )}
    </section>
  );
};

export default BookmarkPage;
