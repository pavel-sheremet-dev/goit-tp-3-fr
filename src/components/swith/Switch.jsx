import { StyledSwitch } from './Switch.styled';

const Switch = ({ width = 50, title, click, checked }) => {
  const handleClick = e => {
    const value = e.target.checked;
    click(value);
  };

  return (
    <StyledSwitch className="custom-checkbox" width={width}>
      {title && <p>{title}</p>}
      <div>
        <input
          onClick={handleClick}
          defaultChecked={checked}
          className="isHidden"
          type="checkbox"
          name="switcher"
          value="true"
          required
        ></input>
        <div className="switchHolder">
          <div className="switcher"></div>
        </div>
      </div>
    </StyledSwitch>
  );
};

export default Switch;
