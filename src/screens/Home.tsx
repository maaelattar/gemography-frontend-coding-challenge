import React from "react";
import { useInfiniteQuery } from "react-query";
import { LoadingSkeleton, Repositories } from "../components";
import { useIntersectionObserver } from "../hooks";
import { fetchRepositories } from "../services";

export const Home = () => {
  const {
    isLoading,
    data: repositoriesData,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery("repositories", fetchRepositories, {
    refetchOnWindowFocus: false,

    getNextPageParam: (_, pages) => pages.length + 1,
  });

  const [loader] = useIntersectionObserver(fetchNextPage);

  if (isError && error instanceof Error) return <p>{error.message}</p>;

  const renderResult = () =>
    isLoading ? (
      <LoadingSkeleton number={8} />
    ) : (
      repositoriesData && <Repositories repositoriesData={repositoriesData} />
    );

  const renderLoadingMore = () =>
    hasNextPage && (
      <div className="loading-more" ref={loader}>
        {isFetchingNextPage && <h2>Loading More...</h2>}
      </div>
    );

  return (
    <div className="py-24">
      {renderResult()}
      {renderLoadingMore()}
    </div>
  );
};
