import { useState } from 'react';
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

const RatingModal = ({ onClose }) => {
  const [textarea, setTextarea] = useState('');
  const [rating, setRating] = useState(0);
  const handleRating = rate => {
    setRating(rate);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTextarea('');
    setRating(0);
  };
  const handleChange = event => {
    setTextarea(event.target.value);
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
            value={textarea}
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
