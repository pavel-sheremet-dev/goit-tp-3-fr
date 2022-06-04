import data from 'data';
import styled from 'styled-components';
import DefTitle from 'components/common/title/DefTitle';
import DefText from 'components/common/text/DefText';
import LibContainer from 'components/booksLibrary/bookLibContainer';
import { ReactComponent as ExampleIcon } from 'images/svg/example-svg.svg';
import starIconCalculator from 'helpers/starIconCalculator';
import { nanoid } from '@reduxjs/toolkit';

const inFinishBooks = ({ pageFormat, format }) => {
  const { response, mobile, tablet, desktop } = format;
  const isResponse = pageFormat === response;
  const isMobile = pageFormat === mobile;
  const isTablet = pageFormat === tablet;
  const isDesktop = pageFormat === desktop;

  const options = [
    data.booksLibData[Math.floor(Math.random() * 4) + 0],
  ]; /*Эмитация get запроса на бек (array)*/

  return (
    <>
      <div style={{ padding: '0 0 20px 0' }}>
        <DefTitle titleLevel="h3" style={{ padding: '0 0 20px 0' }}>
          Прочитано
        </DefTitle>
        {options.map(
          ({ _id, book, author, summary, release, pages, rating }) => {
            return (
              (isResponse || isMobile) && (
                <LibContainer key={nanoid()}>
                  <div
                    style={{
                      display: 'flex',
                    }}
                  >
                    <span
                      style={{
                        margin: '0 12px 0 0',
                        width: '22px',
                        height: '22px',
                      }}
                    >
                      <ExampleIcon />
                    </span>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '0 0 24px 0',
                      }}
                    >
                      <DefText
                        style={{
                          color: '#242A37',
                          fontSize: '12px',
                          lineHeight: '15px',
                          margin: '0 0 12px 0',
                        }}
                      >
                        {book}
                      </DefText>
                      <ul>
                        <TextSentence>
                          Автор:
                          <DefText
                            style={{
                              color: '#242A37',
                              fontSize: '12px',
                              lineHeight: '15px',
                              margin: '0 20px 0 auto',
                              padding: '0 0 0 10px',
                            }}
                          >
                            {author}
                          </DefText>
                        </TextSentence>
                        <TextSentence>
                          Рік:
                          <DefText
                            style={{
                              color: '#242A37',
                              fontSize: '12px',
                              lineHeight: '15px',
                              margin: '0 20px 0 auto',
                              padding: '0 0 0 10px',
                            }}
                          >
                            {release}
                          </DefText>
                        </TextSentence>
                        <TextSentence>
                          Стор.:
                          <DefText
                            style={{
                              color: '#242A37',
                              fontSize: '12px',
                              lineHeight: '15px',
                              margin: '0 20px 0 auto',
                              padding: '0 0 0 10px',
                            }}
                          >
                            {pages}
                          </DefText>
                        </TextSentence>
                        <TextSentence>
                          Рейтинг:
                          <span
                            style={{
                              display: 'flex',
                              margin: '0 20px 0 auto',
                              padding: '0 0 0 10px',
                            }}
                          >
                            {starIconCalculator(rating)}
                          </span>
                        </TextSentence>
                      </ul>
                    </div>
                  </div>
                  <Button type="button">Резюме</Button>
                </LibContainer>
              )
            );
          },
        )}
      </div>
      {isTablet && <div>Desktop</div>}
      {isDesktop && <div>Desktop</div>}
    </>
  );
};

export default inFinishBooks;

export const TextSentence = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #898f9f;
  list-style: none;
  display: flex;
  margin: 0 0 12px 0;
  &:last-child {
    margin: 0;
    align-items: center;
  }
`;

export const Button = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;
  background: #6d7a8d;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  padding: 12px 34px;
  display: inherit;
  margin: 0 auto;
`;
