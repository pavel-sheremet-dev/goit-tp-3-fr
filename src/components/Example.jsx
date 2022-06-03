import { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import Section from 'components/common/section/Section';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { ReactComponent as ExampleIcon } from 'images/svg/example-svg.svg';
import IconButton from './common/button/IconButton';

const Example = () => {
  const pageFormat = useContext(PageFormatContext);

  const dispatch = useDispatch();

  const onClick = () => {
    const credentials = {
      name: 'pasha',
      email: 'mail@mail.con',
      password: 'qwery',
    };
    dispatch(authOperations.signUp(credentials));
  };

  const isResponse = pageFormat === format.response;
  const isMobile = pageFormat === format.mobile;
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;

  return (
    <Section
      title={'BR'}
      titleLevel={'h2'}
      style={{ paddingTop: '20px', paddingBotton: '20px' }}
    >
      {isResponse && <div>Response</div>}
      {isMobile && <div>Mobile</div>}
      {isTablet && <div>Tablet</div>}
      {isDesktop && <div>Desktop</div>}
      <div>ALL FORMAT</div>
      <button type="button" onClick={onClick}>
        SIGN UP
      </button>
      <ExampleIcon style={{ fill: 'green' }} className={'someClass'} />
      <IconButton IconComponent={ExampleIcon} />
    </Section>
  );
};

export default Example;
