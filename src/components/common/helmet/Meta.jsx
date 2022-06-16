import { Helmet } from 'react-helmet';

const serverUrl = process.env.REACT_APP_API_BASE_URL;

const Meta = () => {
  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="twitter:description"
        content="Найкращій Сeрвіс - Book Reading"
      />
      <meta name="twitter:title" content="Book Reading" />
      <meta name="twitter:creator" content="localhost3000" />
      <meta name="twitter:card" content="summary" />
      <meta property="og:image" content={`${serverUrl}/static/og-image.jpg`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Найкращій Сeрвіс - Book Reading"
      />
      <meta property="og:title" content="Book Reading" />
      <meta name="description" content="Найкращій Сeрвіс - Book Reading" />
      <meta name="generator" content="React 17.0.2" />

      <link
        rel="canonical"
        href="https://spv-goit-tp3-br.netlify.app/"
        hreflang="uk"
      />
      <link rel="alternate" href="https://spv-goit-tp3-br.netlify.app/" />
      <title>Book Reading</title>
    </Helmet>
  );
};

export default Meta;
