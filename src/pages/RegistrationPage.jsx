
import SignUpForm from 'components/auth/SignUpForm';

const RegistrationPage = () => {
  return (
    <>
      <SignUpForm />
    </>
  );
};

// 1.1 Форма регистрации
// 1.2 Приветствие (в мобильной версии в случае если клиент не регистрировался - состояние)
// При сабмите во время регистрации можно в Локальное Хранилие статус, При рендеринге страницы стягивать статус
// и рендерить или нет

export default RegistrationPage;
