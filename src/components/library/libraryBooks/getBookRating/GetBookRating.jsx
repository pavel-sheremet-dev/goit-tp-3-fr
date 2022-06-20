import { Fragment } from 'react';
import { ReactComponent as EmptyStar } from 'assets/images/svg/star-empty.svg';
import { ReactComponent as FullStar } from 'assets/images/svg/star-full.svg';

const GetBookRating = ({ rating }) => {
  return (
    <>
      {new Array(5).fill(0).map((_, id) => {
        return (
          <Fragment key={id}>
            {rating > id ? <FullStar /> : <EmptyStar />}
          </Fragment>
        );
      })}
    </>
  );
};

export default GetBookRating;
