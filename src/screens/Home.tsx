import React from "react";
import { useInfiniteQuery } from "react-query";
import { LoadingSkeleton, Repositories } from "../components";
import { fetchRepositories } from "../services";

export const Home = () => {
  const {
    isLoading,
    data: repositoriesData,
    isError,
    error,
  } = useInfiniteQuery("repositories", fetchRepositories, {
    refetchOnWindowFocus: false,

    getNextPageParam: (_, pages) => pages.length + 1,
  });

  if (isError && error instanceof Error) return <p>{error.message}</p>;

  const renderResult = () =>
    isLoading ? (
      <LoadingSkeleton number={8} />
    ) : (
      repositoriesData && <Repositories repositoriesData={repositoriesData} />
    );

  return <div className="py-24">{renderResult()}</div>;
};
