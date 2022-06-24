import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { routes } from 'routes/config';

import AdvBlock from './AdvBlock';
import ButtonBlock from 'components/reusableComponents/buttonBlock/ButtonBlock';
import { AdvSection } from './Advantages.styled';
import { AdvContainer } from 'components/common/container/Container.styled';

const { response, mobile } = format;

const Advantages = ({ handleClick }) => {
  const pf = useContext(PageFormatContext);
  const { t } = useTranslation();

  const isMobile = pf === response || pf === mobile;

  const data = t('advanteges', { returnObjects: true });
  const buttons = t('buttons', { returnObjects: true });

  return (
    <AdvSection>
      <AdvContainer>
        <h1>{data.title}</h1>
        <AdvBlock title={data.block1.title} listData={data.block1.list} />
        <AdvBlock title={data.block2.title} listData={data.block2.list} />
        {isMobile && (
          <ButtonBlock
            title1={buttons.signin}
            title2={buttons.signup}
            onFirstBtnTo={routes.login.path}
            onSecondBtnClick={() => handleClick(false)}
            fullWidth
          />
        )}
      </AdvContainer>
    </AdvSection>
  );
};

export default Advantages;
