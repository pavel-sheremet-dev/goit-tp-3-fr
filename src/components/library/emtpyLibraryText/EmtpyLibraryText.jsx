import {
  StyledList,
  StyledStepText,
  StyledLibButton,
  StyledNameBook,
  StyledBox,
} from './EmtpyLibraryText.styled';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { ReactComponent as ArrowIcon } from 'assets/images/svg/arrow.svg';
import { ReactComponent as BookIcon } from 'assets/images/svg/icon-book.svg';
import { ReactComponent as FlagIcon } from 'assets/images/svg/flag.svg';

export default function EmtpyLibraryText({ isEmptyLibrary, onClick, style }) {
  const { t } = useTranslation();
  const pageFormat = useContext(PageFormatContext);
  const isResponse = pageFormat === format.response;
  const isMobile = pageFormat === format.mobile;

  return (
    <>
      {!isEmptyLibrary && (
        <StyledBox style={style}>
          {(isResponse || isMobile) && (
            <StyledNameBook>{t('title')}</StyledNameBook>
          )}
          <StyledList>
            <li>
              <StyledStepText>{t('step')} 1.</StyledStepText>
              <p className="step-text">
                <span>
                  <BookIcon />
                </span>
                {t('library')}
              </p>

              <p className="sup-step-text">
                <span>
                  <ArrowIcon width={10} height={12} />
                </span>
                {t('add')}
              </p>
            </li>
            <li>
              <StyledStepText>{t('step')} 2.</StyledStepText>
              <p className="step-text">
                <span>
                  <FlagIcon />
                </span>
                {t('firstTraining')}
              </p>

              <p className="sup-step-text">
                <span>
                  <ArrowIcon width={10} height={12} />
                </span>
                {t('setGoal')}
              </p>
            </li>
          </StyledList>
          {(isMobile || isResponse) && (
            <StyledLibButton type="button" onClick={() => onClick(true)}>
              {t('ok')}
            </StyledLibButton>
          )}
        </StyledBox>
      )}
    </>
  );
}
