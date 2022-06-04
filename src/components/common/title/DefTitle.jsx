import PropTypes from 'prop-types';
import { StyledDefTitle } from './DefTitle.styled';
const DefTitle = ({ children, titleLevel, style = {} }) => {
  return (
    <StyledDefTitle as={titleLevel} style={style}>
      {children}
    </StyledDefTitle>
  );
};

export default DefTitle;

DefTitle.propTypes = {
  children: PropTypes.node,
  titleLevel: PropTypes.string.isRequired,
};
