import React, { useState, useMemo } from "react";
import Repo from "./Repo";
import Pagination from "../Pagination";

const PageSize = 6;

const Repos = ({ repos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return repos.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, repos]);

  return (
    <div className="profile__repos">
      <h2 className="profile__repos_title">Repos:</h2>
      <div className="profile__repos_container">
        {currentTableData.map((repo) => (
          <Repo
            key={repo.id}
            name={repo.name}
            lang={repo.language}
            visibility={repo.visibility}
            url={repo.html_url}
          />
        ))}
        <Pagination
          className="pagination-bar"
          onPageChange={(page) => setCurrentPage(page)}
          pageSize={PageSize}
          totalCount={repos.length}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Repos;
