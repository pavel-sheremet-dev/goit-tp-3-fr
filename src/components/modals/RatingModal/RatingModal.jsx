import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

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
import Rating from 'react-rating';
import { SvgEmptyStar, SvgFullStar } from './RatingModal.styled';
import { useDispatch } from 'react-redux';
import { updateBookReview } from 'redux/books/books-operations';
import { useSelector } from 'react-redux';
import { booksSelectors } from 'redux/books';

const RatingModal = ({ onClose, index }) => {
  const { t } = useTranslation();
  const books = useSelector(booksSelectors.getFinishedBooks);
  const book = books.find(book => book.id === index);
  const [review, setReview] = useState(() => book.review ?? '');
  const [rating, setRating] = useState(() => Number(book.rating) || 0);

  const saveBtnRef = useRef(null);

  const dispatch = useDispatch();

  const handleRating = rate => {
    if (saveBtnRef.current.disabled) {
      saveBtnRef.current.disabled = false;
    }
    setRating(rate);
  };

  const handleChange = event => {
    if (saveBtnRef.current.disabled) {
      saveBtnRef.current.disabled = false;
    }
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
        <StyledRatingText>{t('chooseRating')}</StyledRatingText>
        <Rating
          onClick={handleRating}
          initialRating={rating}
          fullSymbol={<SvgFullStar />}
          emptySymbol={<SvgEmptyStar />}
        />

        <StyledRatingLabel>
          <StyledRatingResumeText>{t('resume')}</StyledRatingResumeText>

          <StyledRatingTextArea
            value={review}
            onChange={handleChange}
          ></StyledRatingTextArea>
        </StyledRatingLabel>

        <StyledBox>
          <StyledRatingButtonBack onClick={onClose} marginRight="16px">
            {t('back')}
          </StyledRatingButtonBack>
          <StyledRatingButtonSave
            type="submit"
            ref={saveBtnRef}
            disabled={true}
          >
            {t('save')}
          </StyledRatingButtonSave>
        </StyledBox>
      </StyledRatingForm>
    </StyledRatingBox>
  );
};
export default RatingModal;
