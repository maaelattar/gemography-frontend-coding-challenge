import React, { useCallback } from "react";
import PropTypes, { InferProps } from "prop-types";
import { Repo, RepoPropTypes } from "./Repo/Repo";

const RepositoriesPropTypes = {
  repositoriesData: PropTypes.shape({
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape(RepoPropTypes).isRequired)
          .isRequired,
      })
    ).isRequired,
  }).isRequired,
};
type RepositoriesTypes = InferProps<typeof RepositoriesPropTypes>;

export const Repositories = ({ repositoriesData }: RepositoriesTypes) => {
  const renderRepositories = useCallback(() => {
    return repositoriesData?.pages.map((page: any) => {
      return page.items.map((repo: any) => {
        return <Repo repo={repo} key={repo.id} />;
      });
    });
  }, [repositoriesData]);

  return <>{renderRepositories()}</>;
};
