import {ButtonProps} from "./button.model";
import './button.scss';

const Button = ({
  click = () => undefined,
  disabled = false,
  children = null,
}: ButtonProps) => {
  const handleClick = () => {
    if (!disabled) {
      click();
    }
  };

  return (
    <button
      className="custom-button"
      disabled={ disabled }
      onClick={ handleClick }>
      { children }
    </button>
  );
}

export default Button;
