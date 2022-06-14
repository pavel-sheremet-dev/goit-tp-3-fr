import { useState } from 'react';
import { toast } from 'react-toastify';

import {
  StyledBox,
  StyledRatingBox,
  StyledRatingButtonBack,
  StyledRatingButtonSave,
  StyledRatingForm,
  StyledRatingLabel,
  StyledRatingResumeText,
  StyledRatingText,
  StyledRatingTextArea,
} from './RatingModal.styled';
import { Rating } from 'react-simple-star-rating';
import { SvgEmptyStar, SvgFullStar } from './RatingModal.styled';
import { useDispatch } from 'react-redux';
import { updateBookReview } from 'redux/books/books-operations';
import { useSelector } from 'react-redux';
import { booksSelectors } from 'redux/books';

const RatingModal = ({ onClose, index }) => {
  const books = useSelector(booksSelectors.getFinishedBooks);
  const book = books.find(book => book.id === index);
  const [review, setReview] = useState(() => book.review ?? '');
  const [rating, setRating] = useState(() => Number(book.rating * 20) || 0);

  const dispatch = useDispatch();

  const handleRating = rate => {
    console.log('first');
    setRating(rate / 20);
  };

  const handleChange = event => {
    console.log('handleChange', handleChange);
    setReview(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!review) {
      toast.info('Заповніть відгук');
      return;
    }
    if (!rating) {
      toast.info('Вкажіть рейтинг');
      return;
    }
    dispatch(updateBookReview({ index, body: { rating, review } }));
    onClose();
  };

  return (
    <StyledRatingBox>
      <StyledRatingForm onSubmit={handleSubmit}>
        <StyledRatingText>Обрати рейтинг книги</StyledRatingText>
        <Rating
          onClick={handleRating}
          ratingValue={rating}
          fullIcon={<SvgFullStar />}
          emptyIcon={<SvgEmptyStar />}
          allowHalfIcon={false}
        />

        <StyledRatingLabel>
          <StyledRatingResumeText>Резюме</StyledRatingResumeText>

          <StyledRatingTextArea
            value={review}
            onChange={handleChange}
          ></StyledRatingTextArea>
        </StyledRatingLabel>

        <StyledBox>
          <StyledRatingButtonBack onClick={onClose} marginRight="16px">
            Назад
          </StyledRatingButtonBack>
          <StyledRatingButtonSave>Зберегти</StyledRatingButtonSave>
        </StyledBox>
      </StyledRatingForm>
    </StyledRatingBox>
  );
};
export default RatingModal;
