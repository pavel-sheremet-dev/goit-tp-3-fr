import { useTranslation } from 'react-i18next';
import { LngSwitcherStyled, Button } from './LngSwitcher.styled';

const lngs = {
  en: { nativeName: 'EN' },
  uk: { nativeName: 'UA' },
};

const LngSwitcher = ({ style }) => {
  const { i18n } = useTranslation();
  return (
    <LngSwitcherStyled style={style}>
      {Object.keys(lngs).map(lng => (
        <Button
          type="submit"
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lngs[lng].nativeName}
        </Button>
      ))}
    </LngSwitcherStyled>
  );
};

export default LngSwitcher;
