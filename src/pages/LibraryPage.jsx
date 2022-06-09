import Section from 'components/common/section/Section';
import EmtpyLibraryText from 'components/emtpyLibraryText/EmtpyLibraryText';
import LibraryForm from 'components/LibraryForm/LibraryForm';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useContext } from 'react';
import { styleFlex } from 'styles/vars';

const LibraryPage = () => {
  const pageFormat = useContext(PageFormatContext);
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;
  
  
  
  return (
    <>
      
      <Section title={'Моя пуста бібліотека'} titleLevel={'h1'} isHidden styleContainer = {styleFlex} >
      <EmtpyLibraryText/>
      </Section> 
    
      
    </>
  );
};

// При отсутвии библиотеки рендерить модальное окно с шагами, по сути это не модальное окно
// а обычный компонент внутри страницы. Мы его условно называем модальным окном, по макету это не так.

// Т.е. при рендериге Страницы мы делаем запрос на бек - если он не возвращает библиотеку, то показываем
// модалку

// Если есть Библиотека - рендерим её (по категориям в зависимости от статуса книги)
// Кнопка + открывает форму добавления книги
// кнопку "моє тренування" дисейблим или вообще не показываем, если нет ниодной книги.
// 3.1 и 3.2 обьединяем

export default LibraryPage;
