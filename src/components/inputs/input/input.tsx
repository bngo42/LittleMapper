import {InputProps, InputType} from "./input.model";
import './input.scss';

const Input = ({
 type = InputType.Text,
 placeholder = '',
 onInputValueChange = () => {},
 value = '',
 ...rest
}: InputProps) => {
  return (
    <div className="custom-input" {...rest}>
      <input
        value={ value }
        type={ type }
        placeholder={ placeholder }
        onChange={ e => onInputValueChange(e.target.value) }/>
    </div>
  );
}

export default Input;
