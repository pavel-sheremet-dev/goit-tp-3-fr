import { ReactComponent as QuoteIcon } from '../../../images/svg/quotes-icon.svg';
import {
  StyledQuote,
  StyledTitle,
  SectionQuote,
  StyledIcon,
} from './LoginQuote.styled';

export default function LoginQuote() {
  return (
    <SectionQuote>
      <StyledIcon>
        <QuoteIcon style={{ margin: '0 auto', marginBottom: '7px' }} />
      </StyledIcon>
      <StyledQuote>
        Книги — это корабли мысли, странствующие по волнам времени и бережно
        несущие свой драгоценный груз от поколения к поколению.
      </StyledQuote>
      <StyledTitle>Бэкон Ф.</StyledTitle>
    </SectionQuote>
  );
}
