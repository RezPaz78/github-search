import axios from "axios";

const clientId = "b4c3b0878a5d68e6bc47";
const clientSecret = "20381654335b61b1ead866a98c92eed208a73d55";

export const getUser = async (username) => {
  const resProfile = await axios.get(
    `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`
  );
  const resRepos = await axios.get(
    `https://api.github.com/users/${username}/repos?client_id=${clientId}&client_secret=${clientSecret}`
  );
  const profile = resProfile.data;
  const repos = resRepos.data;

  return {
    profile,
    repos,
  };
};
