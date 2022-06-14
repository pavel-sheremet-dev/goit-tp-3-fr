import {
  //   StyledItem,
  StyledList,
  //   StyledDescriptionText,
  StyledStepText,
  //   StyledCreateText,
  StyledLibButton,
  StyledNameBook,
  StyledBox,
  //   StyledWrap,
} from './EmtpyLibraryText.styled';
import { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { ReactComponent as ArrowIcon } from 'images/svg/arrow.svg';
import { ReactComponent as BookIcon } from 'images/svg/icon-book.svg';
import { ReactComponent as FlagIcon } from 'images/svg/flag.svg';

export default function EmtpyLibraryText({ isEmptyLibrary, onClick, style }) {
  const pageFormat = useContext(PageFormatContext);
  const isResponse = pageFormat === format.response;
  const isMobile = pageFormat === format.mobile;

  return (
    <>
      {!isEmptyLibrary && (
        <StyledBox style={style}>
          {(isResponse || isMobile) && (
            <StyledNameBook>Назва книги</StyledNameBook>
          )}
          <StyledList>
            <li>
              <StyledStepText>Крок 1.</StyledStepText>
              <p className="step-text">
                <span>
                  <BookIcon />
                </span>
                Створіть особисту бібліотеку
              </p>

              <p className="sup-step-text">
                <span>
                  <ArrowIcon width={10} height={12} />
                </span>
                Додайте до неї книжки, які маєте намір прочитати.
              </p>
            </li>
            <li>
              <StyledStepText>Крок 2. </StyledStepText>
              <p className="step-text">
                <span>
                  <FlagIcon />
                </span>
                Сформуйте своє перше тренування
              </p>

              <p className="sup-step-text">
                <span>
                  <ArrowIcon width={10} height={12} />
                </span>
                Визначте ціль, оберіть період, розпочинайте тренування.
              </p>
            </li>
          </StyledList>
          {(isMobile || isResponse) && (
            <StyledLibButton type="button" onClick={() => onClick(true)}>
              Ок
            </StyledLibButton>
          )}
        </StyledBox>
      )}
    </>
  );
}
