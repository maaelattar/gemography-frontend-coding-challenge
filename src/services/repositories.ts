import axios from "axios";
import moment from "moment";

export const fetchRepositories = ({ pageParam: page = 1 }) => {
  const startDate = moment().subtract(30, "days").format("YYYY-MM-DD");

  return axios
    .get("https://api.github.com/search/repositories", {
      params: {
        q: `created:>${startDate}`,
        sort: "stars",
        order: "desc",
        page,
      },
    })
    .then((res) => res.data);
};
