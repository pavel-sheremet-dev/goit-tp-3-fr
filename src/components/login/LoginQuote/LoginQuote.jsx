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
        Книги - кораблі думки, що мандрують хвилями часу і дбайливо несуть свій
        дорогоцінний вантаж від покоління до покоління.
      </StyledQuote>
      <StyledTitle>Бейкон Ф.</StyledTitle>
    </SectionQuote>
  );
}
