import SearchBox from "../components/SearchBox";

const Home = () => {
  return (
    <>
      <SearchBox />
    </>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   const res = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = res.data;

//   return {
//     props: {
//       articles,
//     },
//   };
// };
