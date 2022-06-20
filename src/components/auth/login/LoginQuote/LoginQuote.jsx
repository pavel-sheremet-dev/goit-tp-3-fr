import { ReactComponent as QuoteIcon } from 'assets/images/svg/quotes-icon.svg';
import { useTranslation } from 'react-i18next';
import {
  StyledQuote,
  StyledTitle,
  SectionQuote,
  StyledIcon,
} from './LoginQuote.styled';

export default function LoginQuote() {
  const { t } = useTranslation();
  return (
    <SectionQuote>
      <StyledIcon>
        <QuoteIcon style={{ margin: '0 auto', marginBottom: '7px' }} />
      </StyledIcon>
      <StyledQuote>{t('quote')}</StyledQuote>
      <StyledTitle>{t('bacon')}</StyledTitle>
    </SectionQuote>
  );
}
