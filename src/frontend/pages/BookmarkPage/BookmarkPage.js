import { useData } from "../../context/DataContext";
import PostList from "../../components/PostList/PostList";

const BookmarkPage = () => {
  const {
    state: { userProfile },
  } = useData();

  const bookmarksData = userProfile?.bookmarks;

  return (
    <section className="postFeed_container">
      {bookmarksData?.length > 0 ? (
        <PostList postListData={bookmarksData} headerState={"Bookmark"} />
      ) : (
        <p className="emptyFeed">You don't have any posts bookmarked!</p>
      )}
    </section>
  );
};

export default BookmarkPage;
