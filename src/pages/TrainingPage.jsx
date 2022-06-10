import Section from 'components/common/section/Section';
import Dashboard from 'components/dashboard/Dashboard';
import Countdown from '../components/Countdown';
import { useContext } from 'react';
import { StyledCountdownContainer } from './TrainingPage.styled';
import { PageFormatContext, format } from 'context/pageFormatContext';
import {
  ContainerSection,
  Goal,
  BoxCountdown,
  BoxGoal,
  Library,
  BoxLibrary,
  CountDown,
  DashBoard,
  Results,
  BoxResults,
  BoxDasboard,
  UnderGolMyTranny,
  BoxUnderGolMyTranny,
} from './styleSection/stylePosition';

const nextYear = new Date().getFullYear() + 1;



const responce = {
  status: 'failed',
  startDate: '2022-06-01',
  deadlineDate: '2022-06-10',
  totalPages: 200,
  readedPages: 130,
  results: [
    {
      date: '2022-06-01',
      pointResult: 0,
    },
    {
      date: '2022-06-02',
      pointResult: 0,
    },
    {
      date: '2022-06-03',
      pointResult: 50,
    },
    {
      date: '2022-06-05',
      pointResult: 50,
    },
    {
      date: '2022-06-10',
      pointResult: 0,
    },
  ],
};

export const TrainingPage = () => {
  const pageFormat = useContext(PageFormatContext);
  const isResponse = pageFormat === format.response;
  const isMobile = pageFormat === format.mobile;
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;

  return (
    <>
      {/* Оббертка для компонента есть Box, внутри которого будет замена   */}
      {isResponse && <div>Response</div>}
      {isMobile && (
        <div>
          <Section title="Статистика" titleLevel="h2" isHidden>
            <ContainerSection>
              <BoxCountdown>
                <CountDown>Countdown</CountDown>
                {/* <StyledCountdownContainer>
          <Countdown
            deadline={new Date(nextYear, 0, 1)}
            title="До закінчення року залишилось"
          />
          <Countdown
            deadline={new Date(2022, 7, 1)}
            title="До досягнення мети залишилось"
          />
        </StyledCountdownContainer> */}
              </BoxCountdown>

              <BoxResults>
                <Results>Results</Results>
              </BoxResults>

              <BoxGoal>
                <Goal>My Goal</Goal>
              </BoxGoal>

              <BoxLibrary>
                <Library>Library</Library>
              </BoxLibrary>
              <BoxDasboard>
                <DashBoard>
                  Dashboard{/* <Dashboard responce={responce} />  */}
                </DashBoard>
              </BoxDasboard>
            </ContainerSection>
          </Section>
        </div>
      )}
      {isTablet && (
        <div>
          {' '}
          <Section title="Статистика" titleLevel="h2" isHidden>
            <ContainerSection>
              <BoxCountdown>
                <CountDown>Countdown</CountDown>
                {/* <StyledCountdownContainer>
          <Countdown
            deadline={new Date(nextYear, 0, 1)}
            title="До закінчення року залишилось"
          />
          <Countdown
            deadline={new Date(2022, 7, 1)}
            title="До досягнення мети залишилось"
          />
        </StyledCountdownContainer> */}
              </BoxCountdown>

              <BoxGoal>
                <Goal>My Goal</Goal>
              </BoxGoal>
              <BoxUnderGolMyTranny>
                <UnderGolMyTranny>UnderGolMyTranny</UnderGolMyTranny>
              </BoxUnderGolMyTranny>

              <BoxLibrary>
                <Library>Library</Library>
              </BoxLibrary>
              <BoxDasboard>
                <DashBoard>
                  Dashboard{/* <Dashboard responce={responce} />  */}
                </DashBoard>
              </BoxDasboard>

              <BoxResults>
                <Results>Results</Results>
              </BoxResults>
            </ContainerSection>
          </Section>
        </div>
      )}
      {isDesktop && (
        <div>
          <Section title="Статистика" titleLevel="h2" isHidden>
            <ContainerSection>
              <div>
                <BoxCountdown>
                  <CountDown>Countdown</CountDown>
                  {/* <StyledCountdownContainer>
          <Countdown
            deadline={new Date(nextYear, 0, 1)}
            title="До закінчення року залишилось"
          />
          <Countdown
            deadline={new Date(2022, 7, 1)}
            title="До досягнення мети залишилось"
          />
        </StyledCountdownContainer> */}
                </BoxCountdown>
                <BoxLibrary>
                  <Library>Library</Library>
                </BoxLibrary>
                <BoxDasboard>
                  <DashBoard>
                    Dashboard{/* <Dashboard responce={responce} />  */}
                  </DashBoard>
                </BoxDasboard>
              </div>
              <div>
                <BoxGoal>
                  <Goal>My Goal</Goal>
                </BoxGoal>

                <BoxResults>
                  <Results>Results</Results>
                </BoxResults>
              </div>
            </ContainerSection>
          </Section>
        </div>
      )}
    </>


// это только основные моменты.

// При нажатии на "моє тренування" или иконку в хедере будет открываться эта страница.
// 1. если есть активная треннировка (запрос на бек) то 1.1 (это бекенд логика)
// 1.1 показываем всю статистику + добавление результатов
// 2. просроченная тренировка -- модальное окно / статистика / возможность добаления результатов не рендерим
// 3. нет треннировки:
// 3.1 Запрос на наличие библиотеки, если нет библиотеки, показываем шаги (условно модальное окно).
// 3.2 если библиотека книг есть (со статусом, непрочитанные), то открываем форму для добавления книги в лист
// кнопка + добавляет дополнительный книги.
// Кнопку "почати тренування" показываем только в случае, если есть хотя бы одна добавленная книга.

// Модалку про потерю данных можно показывать, когда есть добавленные книги, но не начата тренировка.
// Также, когда в результатах указано кол-во страниц, но нажата кнопка "Додати результат

// Скорее всего будет коллекция тренировок, в которой будет статус тренировки ['успешно пройденная', 'активная', 'неуспешная']
// 1.1 При загрузке страницы с треннировкой - идёт запрос на бек, бек смотрит есть ли в базе треннировка со статусом - активная - сравнивает текущее время, если время ушло, обновляет статус, возвращает треннировку, неуспешній статус будет означать показ модального окна. В таком случае рендерить формочку с добавлением результатов, думаю, что не стоит, только результирующую статистику.

export default TrainingPage;
