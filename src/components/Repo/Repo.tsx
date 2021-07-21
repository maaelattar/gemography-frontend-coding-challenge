import React from "react";
import moment from "moment";
import PropTypes, { InferProps } from "prop-types";
import { RepoBadge } from "./RepoBadge";

export const RepoPropTypes = {
  repo: PropTypes.shape({
    owner: PropTypes.shape({
      avatar_url: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    watchers_count: PropTypes.number.isRequired,
    open_issues_count: PropTypes.number.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};
type RepoTypes = InferProps<typeof RepoPropTypes>;

export const Repo = ({ repo }: RepoTypes) => {
  return (
    <div className="py-4">
      <div className="grid justify-start grid-flow-col">
        <div className="h-40 pr-4 w-44">
          <img
            className="w-full h-full"
            src={repo.owner.avatar_url}
            alt="owner avatar"
          />
        </div>
        <div className="flex flex-col justify-evenly">
          <h4 className="text-2xl font-bold">{repo.name}</h4>
          <p className="text-lg leading-7 tracking-wide">{repo.description}</p>
          <div className="flex">
            <RepoBadge label="Stars" value={repo.watchers_count} />
            <RepoBadge label="Issues" value={repo.open_issues_count} />
            <p className="text-lg">
              Submitted {moment(repo.created_at, "YYYYMMDD").fromNow()} by{" "}
              {repo.owner.login}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
