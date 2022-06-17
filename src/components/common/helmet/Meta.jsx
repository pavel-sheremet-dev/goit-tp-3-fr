import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const serverUrl = process.env.REACT_APP_API_BASE_URL;
const Meta = () => {
  const { t } = useTranslation();
  const { language } = i18next.use(LanguageDetector);

  const metatext = t('metatags', { returnObjects: true });

  return (
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {t('redirect')}
      <meta name="twitter:description" content={metatext.description} />
      <meta name="twitter:title" content={metatext.title} />
      <meta name="twitter:creator" content={metatext.team} />
      <meta name="twitter:card" content="summary" />
      <meta property="og:image" content={`${serverUrl}/static/og-image.jpg`} />
      <meta property="og:type" content={metatext.website} />
      <meta property="og:description" content={metatext.description} />
      <meta property="og:title" content={metatext.title} />
      <meta name="description" content={metatext.description} />
      <meta name="generator" content="React 17.0.2" />

      <link
        rel="canonical"
        href="https://spv-goit-tp3-br.netlify.app/"
        hreflang={language}
      />
      <link rel="alternate" href="https://spv-goit-tp3-br.netlify.app/" />
      <title>{metatext.title}</title>
    </Helmet>
  );
};

export default Meta;
