import PropTypes from 'prop-types';
import Container from 'components/common/container/Container';
import { Title } from './Section.styled';

const Section = ({
  title,
  children,
  titleLevel,
  isHidden = false,
  style = {},
}) => {
  return (
    <section style={style}>
      <Container>
        {title && (
          <Title as={titleLevel} isHidden={isHidden}>
            {title}
          </Title>
        )}

        {children}
      </Container>
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  titleLevel: PropTypes.string.isRequired,
  isHidden: PropTypes.bool,
};
