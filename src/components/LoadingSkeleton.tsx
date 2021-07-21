import React, { useCallback } from "react";
import ContentLoader from "react-content-loader";
import PropTypes, { InferProps } from "prop-types";

const LoadingSkeletonPropTypes = {
  number: PropTypes.number.isRequired,
};
type RepoTypes = InferProps<typeof LoadingSkeletonPropTypes>;

export const LoadingSkeleton = ({ number }: RepoTypes) => {
  const renderContent = useCallback(() => {
    const loaders = [];
    for (let i = 1; i < number; i++) {
      loaders.push(
        <ContentLoader
          viewBox={`0 0 ${1060} ${100}`}
          height={100}
          width={1060}
          key={`loader_${i}`}
        >
          <rect x="20" y="20" rx="5" ry="5" width="64" height="63" />
          <rect x="105" y="20" rx="5" ry="5" width="250" height="12" />
          <rect x="105" y="40" rx="5" ry="5" width="700" height="12" />
          <rect x="105" y="60" rx="5" ry="5" width="400" height="12" />
        </ContentLoader>
      );
    }
    return loaders;
  }, [number]);

  return <> {renderContent()}</>;
};
