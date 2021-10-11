import axios from "axios";

const REPOS_SORT = "updated:acs";
// const CLIENT_ID = "b4c3b0878a5d68e6bc47";
// const CLIENT_SECRET = "77da679b0efc6c3291296495cea14632c02b84a4";

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
