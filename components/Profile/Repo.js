import Link from "next/link";

const Repo = ({ name, lang, visibility, url }) => {
  return (
    <div className="profile__repos_repo">
      <div className="profile__repos_repo-info">
        <Link href={url}>{name}</Link>
        <span>{visibility}</span>
      </div>
      <p className="profile__repos_repo-lang">{lang}</p>
    </div>
  );
};

export default Repo;
