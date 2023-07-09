import { useState, useEffect } from "react";

export const useInfiniteScroll = (posts, lastElementInListRef) => {
  const [pageNumber, setPageNumber] = useState(1);

  const TotalPosts = posts?.length;
  const hasMorePost = Boolean(pageNumber <= Math.ceil(TotalPosts / 4));
  const [postLoading, setPostLoading] = useState(false);

  let interval;

  const observerFunc = (entries) => {
    const entry = entries[0];

    if (entry.isIntersecting && hasMorePost) {
      setPostLoading(true);
      interval = setTimeout(() => {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
        setPostLoading(false);
      }, 400);
    }
  };

  const observerOpts = {
    threshold: 0.6,
  };

  useEffect(() => {
    const referenceElement = lastElementInListRef.current;
    const infiniteScrollObserver = new IntersectionObserver(
      observerFunc,
      observerOpts
    );

    if (referenceElement) {
      infiniteScrollObserver.observe(referenceElement);
    }

    return () => {
      if (referenceElement) {
        infiniteScrollObserver.unobserve(referenceElement);
      }

      if (interval) {
        clearTimeout(interval);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMorePost, observerFunc]);

  return {
    pageNumber,
    lastElementInListRef,
    hasMorePost,
    postLoading,
    interval,
  };
};
