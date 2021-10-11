import axios from "axios";

const REPOS_COUNT = 6;
const REPOS_SORT = "updated:acs";

export const getUser = async (username) => {
  const resProfile = await axios.get(
    `https://api.github.com/users/${username}`
  );
  const resRepos = await axios.get(
    `https://api.github.com/users/${username}/repos?per_page=${REPOS_COUNT}&sort=${REPOS_SORT}`
  );
  const profile = resProfile.data;
  const repos = resRepos.data;

  return {
    profile,
    repos,
  };
};
