import {InputProps} from "./input.model";
import './input.scss';

const Input = (props: InputProps) => {
  return (
    <div className="custom-input">
      <input type={ props.type } placeholder={ props.placeholder }/>
    </div>
  );
}

export default Input;
