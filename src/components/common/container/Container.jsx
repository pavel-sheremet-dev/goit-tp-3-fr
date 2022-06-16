import { StyledContainer } from './Container.styled';
import PropTypes from 'prop-types';

const Container = ({ children, style }) => {
  return <StyledContainer style={style}>{children}</StyledContainer>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
