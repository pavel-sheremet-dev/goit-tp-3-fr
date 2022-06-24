import { AdvList } from './Advantages.styled';
import { ReactComponent as ListIcon } from 'assets/images/svg/icon-list.svg';

const AdvBlock = ({ title, listData = [] }) => {
  return (
    <>
      <p>{title}</p>
      {!!listData.length && (
        <AdvList>
          {listData.map((item, id) => (
            <li key={id}>
              <span>
                <ListIcon />
              </span>
              {item}
            </li>
          ))}
        </AdvList>
      )}
    </>
  );
};

export default AdvBlock;
