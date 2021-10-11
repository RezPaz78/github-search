import axios from "axios";

const REPOS_SORT = "updated:acs";

export const getUser = async (username) => {
  const resProfile = await axios.get(
    `https://api.github.com/users/${username}`
  );
  const resRepos = await axios.get(
    `https://api.github.com/users/${username}/repos?sort=${REPOS_SORT}`
  );
  const profile = resProfile.data;
  const repos = resRepos.data;

  return {
    profile,
    repos,
  };
};

// &client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}
