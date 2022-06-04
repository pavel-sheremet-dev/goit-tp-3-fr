import PropTypes from 'prop-types';
import { ReactComponent as StarIcon } from 'images/svg/star.svg';
import { ReactComponent as OpStarIcon } from 'images/svg/op-star.svg';

const starIconCalculator = rating => {
  switch (rating) {
    case (rating = 5): {
      return (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </>
      );
    }
    case (rating = 4): {
      return (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <OpStarIcon />
        </>
      );
    }
    case (rating = 3): {
      return (
        <>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <OpStarIcon />
          <OpStarIcon />
        </>
      );
    }
    case (rating = 2): {
      return (
        <>
          <StarIcon />
          <StarIcon />
          <OpStarIcon />
          <OpStarIcon />
          <OpStarIcon />
        </>
      );
    }
    case (rating = 1): {
      return (
        <>
          <StarIcon />
          <OpStarIcon />
          <OpStarIcon />
          <OpStarIcon />
          <OpStarIcon />
        </>
      );
    }
    default: {
      return (
        <>
          <OpStarIcon />
          <OpStarIcon />
          <OpStarIcon />
          <OpStarIcon />
          <OpStarIcon />
        </>
      );
    }
  }
};

export default starIconCalculator;

starIconCalculator.propTypes = {
  rating: PropTypes.number.isRequired,
};
