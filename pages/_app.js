import Layout from "../components/Layout";
import ErrorBoundary from "../components/ErrorBoundary";

// styles
import "../styles/index.scss";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ErrorBoundary {...pageProps}>
        <Component />
      </ErrorBoundary>
    </Layout>
  );
}

export default MyApp;
