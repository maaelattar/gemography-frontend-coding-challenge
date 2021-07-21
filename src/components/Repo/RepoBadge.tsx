import React from "react";
import PropTypes, { InferProps } from "prop-types";

const RepoBadgePropTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
type RepoTypes = InferProps<typeof RepoBadgePropTypes>;

export const RepoBadge = ({ label, value }: RepoTypes) => {
  return (
    <div className="h-6 mr-3 text-center bg-gray-200 w-28 rounded-3xl">
      <span>{label}: </span>
      <strong>{value}</strong>
    </div>
  );
};
