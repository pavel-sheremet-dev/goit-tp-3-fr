import { ReactComponent as QuoteIcon } from '../../../images/svg/quotes-icon.svg';
import Section from '../../common/section/Section';
import { StyledQuote, StyledTitle } from './LoginQuote.styled';

export default function LoginQuote() {
  return (
    <Section>
      <QuoteIcon style={{ margin: '0 auto', marginBottom: '7px' }} />
      <StyledQuote>
        Книги — это корабли мысли, странствующие по волнам времени и бережно
        несущие свой драгоценный груз от поколения к поколению.
      </StyledQuote>
      <StyledTitle>Бэкон Ф.</StyledTitle>
    </Section>
  );
}
