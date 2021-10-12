import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import { getUser } from "../../../utils/userFinder";
import Profile from "../../../components/Profile";

const User = ({ profile, repos }) => {
  const router = useRouter();
  const { username } = router.query;
  
  return (
    <>
      <Meta title={username} />
      <Profile profile={profile} repos={repos} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const { profile, repos } = await getUser(context.params.username);

    return {
      props: {
        profile,
        repos,
      },
    };
  } catch {
    return {
      props: {
        message: "This profile does not exist!",
      },
    };
  }
};

export default User;
