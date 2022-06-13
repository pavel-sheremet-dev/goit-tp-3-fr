import { H3, Ul, H4, Div, Li, Div1, Img } from './BooksReading.styled';
import im from './Vector.svg';

const BooksReadng = () => {
  return (
    <Div>
      <H3>Books Reading</H3>
      <Div1>
        <H4>Will help you to</H4>
        <Ul>
          <Li>
            {' '}
            <Img src={im} /> Create your goal faster and proceed to read
          </Li>
          <Li> Divide process proportionally for each day</Li>
          <Li>Track your success</Li>
        </Ul>
        <H4>You may also</H4>
        <Ul>
          <Li>Pose your own independent point of view</Li>
          <Li>Improve your professional skills according to new knowledge</Li>
          <Li>Become an interesting interlocutor</Li>
        </Ul>
      </Div1>
    </Div>
  );
};

export default BooksReadng;
