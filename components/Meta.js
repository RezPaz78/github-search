import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Github Finder",
  keywords: "github, finder, search, next, react",
  description: "A github search app using next js",
};

export default Meta;
