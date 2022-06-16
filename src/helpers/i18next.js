import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'ua',
    resources: {
      ua: {
        translation: {
          login: 'Увійти',
          signup: 'Реєстрація',
          help: 'Допоможе вам',
          goal: 'Швидше сформулювати свою ціль і розпочати читати',
          timing: 'Пропорційно розподілити навантаження на кожний день',
          success: 'Відстежувати особистий успіх',
          youcan: 'Також ви зможете',
          opinion: 'Формувати особисту думку, незалежну від інших',
          qualities:
            'Підвищити свої професійні якості, опираючись на нові знання',
          interlocutor: 'Стати цікавим співрозмовником',
          title: 'Назва книги',
          author: 'Автор',
          year: 'Рік',
          pages: 'Стор.',
          email: 'Електронна адреса',
          password: 'Пароль',
          quote:
            'Книги - кораблі думки, що мандрують хвилями часу і дбайливо несуть свій дорогоцінний вантаж від покоління до покоління.',
          bacon: 'Бейкон Ф.',
          start: 'Почати тренування',
          training: 'Моє тренування',
          redirect: 'Ви будете автоматично перенаправлені через',
          sec: 'сек.',
          redirection: 'Перенаправлення...',
          days: 'ДН',
          hrs: 'ГОД',
          mins: 'ХВ',
          secs: 'СЕК',
          yearsCountdown: 'До закінчення року залишилось',
          goalsCountdown: 'До досягнення мети залишилось',
          amountPages: 'Кількість сторінок / день',
          remains: 'Залишилось прочитати сторінок',
          completed: 'Ви успішно виконали тренування',
          time: 'час',
        },
      },
      en: {
        translation: {
          login: 'Login',
          signup: 'Register',
          help: 'Will help you to',
          goal: 'Create your goal faster and proceed to read',
          timing: 'Divide process proportionally for each day',
          success: 'Track your success',
          youcan: 'You may also',
          opinion: 'Pose your own independent point of view',
          qualities:
            'Improve your professional skills according to new knowledge',
          interlocutor: 'Become an interesting interlocutor',
          title: 'Book title',
          author: 'Author',
          year: 'Year',
          pages: 'Pages',
          email: 'Email',
          password: 'Password',
          quote:
            'Books are the ships of thoughts, wandering through the waves of time.',
          bacon: 'Francis Bacon',
          start: 'Start traning',
          training: 'My training',
          redirect: 'You will be automatically redirected after',
          sec: 'seconds',
          redirection: 'Redirection...',
          days: 'DAYS',
          hrs: 'HRS',
          mins: 'MINS',
          secs: 'SECS',
          yearsCountdown: 'Years countdown',
          goalsCountdown: 'Goals countdown',
          amountPages: 'AMONT OF PAGES / DAY',
          remains: 'It remains to read pages',
          completed: 'You have successfully completed the training',
          time: 'TIME',
        },
      },
    },
  });
