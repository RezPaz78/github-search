import styles from "../styles/SearchBox.module.scss";

const SearchBox = () => {
  return (
    <div className={styles.searchBox}>
      <h1>Search Github Users</h1>
      <p>
        Enter a username, then click `find` to fetch a user profile and repos
      </p>
      <div>
        <input type="text" />
        <button>Find</button>
      </div>
    </div>
  );
};

export default SearchBox;
