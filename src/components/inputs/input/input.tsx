import {InputProps, InputType} from "./input.model";
import './input.scss';

const Input = ({
 type = InputType.Text,
 placeholder = '',
 onValueChange = () => {}
}: InputProps) => {
  return (
    <div className="custom-input">
      <input
        type={ type }
        placeholder={ placeholder }
        onChange={ e => onValueChange(e.target.value) }/>
    </div>
  );
}

export default Input;
