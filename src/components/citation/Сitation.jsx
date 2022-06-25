import { QuoteContainer } from 'components/common/container/Container.styled';
import { useTranslation } from 'react-i18next';
import { AuthorQuoteSection } from './Сitation.styled';

const AuthorQuote = () => {
  const { t } = useTranslation();
  return (
    <AuthorQuoteSection>
      <QuoteContainer>
        <h2 className="isHidden">Мотивація</h2>
        <span>“</span>
        <p className="text">{t('quote')}</p>
        <div className="hr"></div>
        <p className="author">{t('bacon')}</p>
      </QuoteContainer>
    </AuthorQuoteSection>
  );
};

export default AuthorQuote;
