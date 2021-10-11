import Router from "next/router";
import { useState } from "react";
import { getUser } from "../utils/userFinder";
import { toast } from "react-toastify";

const SearchBox = () => {
  const [username, setUsername] = useState("");

  const inputHandler = (username) => {
    setUsername(username);
  };

  const submitHandler = async () => {
    try {
      const { profile } = await getUser(username);
      if (profile) {
        Router.push(`/profile/${username}`);
      }
    } catch {
      toast.error(`This profile does not exist!`);
    }
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
