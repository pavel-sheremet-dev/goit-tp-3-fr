import data from 'data';
import styled from 'styled-components';
import DefTitle from 'components/common/title/DefTitle';
import DefText from 'components/common/text/DefText';
import LibContainer from 'components/booksLibrary/bookLibContainer';
import { ReactComponent as PlusIcon } from 'images/svg/plus.svg';
import { ReactComponent as ExampleIcon } from 'images/svg/example-svg.svg';

const inMarkerBooks = ({ pageFormat, format }) => {
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
      <div>
        <DefTitle titleLevel="h3" style={{ padding: '0 0 20px 0' }}>
          Маю намір прочитати
        </DefTitle>
        <LibContainer>
          {options.map(({ _id, book, author, release, pages }) => {
            return (
              (isResponse || isMobile) && (
                <div key={_id}>
                  <div>
                    <ExampleIcon />
                    <DefText
                      style={{
                        color: '#242A37',
                        fontSize: '12px',
                        lineHeight: '15px',
                      }}
                    >
                      {book}
                    </DefText>
                  </div>
                  <TextSentence>
                    Автор:
                    <DefText
                      style={{
                        color: '#242A37',
                        fontSize: '12px',
                        lineHeight: '15px',
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
                      }}
                    >
                      {pages}
                    </DefText>
                  </TextSentence>
                </div>
              )
            );
          })}
          <IconButton
            type="button"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translate(-50%, 0%)',
            }}
          >
            <PlusIcon style={{ margin: 'auto' }} />
          </IconButton>
        </LibContainer>
      </div>
      {isTablet && <div>Desktop</div>}
      {isDesktop && <div>Desktop</div>}
    </>
  );
};

export default inMarkerBooks;

export const TextSentence = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #898f9f;
`;

export const IconButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  color: #ffffff;
  background: #ff6b08;
`;
