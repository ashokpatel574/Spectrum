import { useData } from "../../context/DataContext";
import PostList from "../../components/PostList/PostList";
import { getfilterDataBySort } from "../../utils/utils";
import PostListHeader from "../../components/PostListHeader/PostListHeader";

const LikedPostPage = () => {
  const {
    state: { posts, userProfile, sortFeedTypeLiked },
  } = useData();

  const likedPostlist = posts.filter((post) => {
    return post.likes.likedBy.some((likedList) => {
      return likedList.username === userProfile.username;
    });
  });

  const filteredFeedBySort =
    posts && getfilterDataBySort(likedPostlist, sortFeedTypeLiked);

  return (
    <section className="postFeed_container">
      {likedPostlist.length > 0 ? (
        <>
          <PostListHeader
            postListData={filteredFeedBySort}
            headerState={"Liked Posts"}
            sortFeedType={sortFeedTypeLiked}
          />
          <PostList postListData={filteredFeedBySort} />
        </>
      ) : (
        <p className="emptyFeed">You don't have any liked posts!</p>
      )}
    </section>
  );
};

export default LikedPostPage;
