import React from "react";
import { Profiler } from "react/cjs/react.production.min";
import Repo from "./Repo";

const Repos = ({ repos }) => {
  return (
    <div className="profile__repos">
      <h2 className="profile__repos_title">Repos:</h2>
      <div className="profile__repos_container">
        {repos.map((repo) => (
          <Repo
            key={repo.id}
            name={repo.name}
            lang={repo.language}
            visibility={repo.visibility}
            url={repo.html_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Repos;
