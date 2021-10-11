import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/favicon.ico"></link>
          <link href="/logo192.png" rel="icon" type="image/png" sizes="16x16" />
          <link href="/logo512.png" rel="icon" type="image/png" sizes="32x32" />
          <meta name="theme-color" content="#0d1117" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
