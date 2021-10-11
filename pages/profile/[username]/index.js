import axios from "axios";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import { getUser } from "../../../utils/userFinder";
import Error from "../../../components/Error";
import Profile from "../../../components/Profile";

const User = ({ profile, repos, message }) => {
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

// export const getStaticPaths = async () => {
//   const res = await axios.get(`https://api.github.com/users`);

//   const users = res.data;

//   const usernames = users.map((user) => user.login);

//   const paths = usernames.map((username) => ({
//     params: { username: username },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const res = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = res.data;

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = res.data;

//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default User;
