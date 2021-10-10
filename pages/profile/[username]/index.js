import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Meta from "../../../components/Meta";

const Article = ({ article }) => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <>
      <Meta title={username} />
      <Link href="/">Go Back</Link>
    </>
  );
};

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

export default Article;
