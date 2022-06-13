import PropTypes from 'prop-types';

const validationWordLength = (number = 0, text = '') => {
  if (text?.length <= number) {
    return text;
  }
  return text.slice(0, number - 3) + '...';
};

export default validationWordLength;

validationWordLength.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
