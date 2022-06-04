import { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';

import InActionBooks from 'components/booksLibrary/inActionBooks';
import InFinishBooks from 'components/booksLibrary/inFinishBooks';
import InMarkerBooks from 'components/booksLibrary/inMarkerBooks';
import Section from 'components/common/section/Section';

const LibraryPage = () => {
  const pageFormat = useContext(PageFormatContext);
  return (
    <Section title={'Библиотека'} titleLevel={'h2'} isHidden>
      <InFinishBooks pageFormat={pageFormat} format={format} />
      <InActionBooks pageFormat={pageFormat} format={format} />
      <InMarkerBooks pageFormat={pageFormat} format={format} />
    </Section>
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
