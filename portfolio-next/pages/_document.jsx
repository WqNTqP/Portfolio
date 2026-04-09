import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="Kim Charles A. Emping - Professional Portfolio. Bachelor of Science in Information Technology student with expertise in PHP, JavaScript, Python, and MySQL." />
          <meta name="keywords" content="portfolio, developer, technology, Philippines, web development, software engineer" />
          <meta name="author" content="Kim Charles A. Emping" />
          <meta property="og:title" content="Kim Charles A. Emping - Professional Portfolio" />
          <meta property="og:description" content="Discover my projects, skills, and experience in software development." />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
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
