import PropTypes from 'prop-types';
import { StyledDefText } from './DefText.styled';
const DefText = ({ children, style = {} }) => {
  return <StyledDefText style={style}>{children}</StyledDefText>;
};

export default DefText;

DefText.propTypes = {
  children: PropTypes.node,
};
