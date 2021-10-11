import Image from "next/image";

const Info = ({ profile }) => {
  const { avatar_url, name, login, bio, followers, following, location, blog } =
    profile;

  return (
    <div className="profile__info">
      <Image
        className="profile__info-avatar"
        alt="avatar"
        src={avatar_url}
        width="300"
        height="300"
      />
      <h2 className="profile__info-name">{name}</h2>
      <h3 className="profile__info-username">{login}</h3>
      {bio && <p className="profile__info-bio">{bio}</p>}
      <div className="profile__info-follow">
        <span>{followers} followers, </span>
        <span>{following} following</span>
      </div>
      {location && (
        <p className="profile__info-location">
          <span>Location:</span> {location}
        </p>
      )}
      {blog && (
        <p className="profile__info-blog">
          <span>Website:</span> {blog}
        </p>
      )}
    </div>
  );
};

export default Info;
