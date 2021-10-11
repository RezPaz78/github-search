import Router from "next/router";
import { useState } from "react";

const SearchBox = () => {
  const [username, setUsername] = useState("");

  const inputHandler = (username) => {
    setUsername(username);
  };

  const submitHandler = () => {
    console.log(username);
  };

  return (
    <div className="searchBox">
      <h1 className="searchBox__title">Search Github Users</h1>
      <p className="searchBox__caption">
        Enter a username, then click `find` to fetch a user profile and repos
      </p>
      <div className="searchBox__form">
        <input type="text" onChange={(e) => inputHandler(e.target.value)} />
        <button onClick={submitHandler}>Find</button>
      </div>
    </div>
  );
};

export default SearchBox;
