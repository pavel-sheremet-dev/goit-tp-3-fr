import Info from 'components/Info/Info';
import RegistrationPageContent from 'components/Registration/RegistrationPageContent/RegistrationPageContent';
import { Container } from './RegistrationPage.styled';
import SignUpForm from 'components/auth/SignUpForm';
const RegistrationPage = () => {
  return (
    <Container>
      <RegistrationPageContent />
      <Info />
    </Container>



// const RegistrationPage = () => {
//   return (
//     <>
//       <SignUpForm />
//     </>
  );
};

// 1.1 Форма регистрации
// 1.2 Приветствие (в мобильной версии в случае если клиент не регистрировался - состояние)
// При сабмите во время регистрации можно в Локальное Хранилие статус, При рендеринге страницы стягивать статус
// и рендерить или нет

export default RegistrationPage;
