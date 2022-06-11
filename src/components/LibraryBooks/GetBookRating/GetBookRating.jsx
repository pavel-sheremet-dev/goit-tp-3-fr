import { nanoid } from '@reduxjs/toolkit';
import { ReactComponent as EmptyStar } from 'images/svg/star-empty.svg';
import { ReactComponent as FullStar } from 'images/svg/star-full.svg';
import { Fragment } from 'react';

const GetBookRating = ({ rating }) => {
  return (
    <>
      {new Array(5).fill(0).map((_, id) => {
        return (
          <Fragment key={nanoid()}>
            {rating > id ? <FullStar /> : <EmptyStar />}
          </Fragment>
        );
      })}
    </>
  );
};

export default GetBookRating;
