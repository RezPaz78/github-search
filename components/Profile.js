import Info from "./Profile/Info";
import Repos from "./Profile/Repos";

const Profile = ({ profile, repos }) => {
  return (
    <section className="profile">
      <Info profile={profile} />
      <Repos repos={repos} />
    </section>
  );
};

export default Profile;
