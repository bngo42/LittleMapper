import {InputAutocompleteProps} from "./input-autocomplete.model";

import Input from "components/inputs/input/input";
import {InputType} from "components/inputs/input/input.model";

import './input-autocomplete.scss';
import {useEffect, useRef, useState} from "react";

const InputAutocomplete = ({
  type = InputType.Text,
  placeholder = '',
  onInputValueChange = () => {},
  autocomplete = [],
  onAutocompleteValuePicked = (item: any) => {}
}: InputAutocompleteProps) => {
  const listRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const handleState = (e: any,state: boolean) => {
    if (e.relatedTarget?.parentElement !== listRef.current) {
      setIsOpen(state);
    }
  };

  const selectItem = (item: any) => {
    onAutocompleteValuePicked(item);
    setCurrentValue(item);
    setIsOpen(false);
  };

  const handleInputValueChange = (value: string) => {
    setCurrentValue(value);
    onInputValueChange(value);
  };

  useEffect(() => setIsOpen(!!autocomplete.length), [autocomplete]);

  return (
    <div className="input-autocomplete">
      <Input
        value={ currentValue }
        type={ type }
        placeholder={ placeholder }
        onInputValueChange={ handleInputValueChange }
        onFocus={ (e: any) => handleState(e, true) }
        onBlur={ (e: any) => handleState(e, false) }/>
      {
        isOpen &&
        <div className="autocomplete-list" ref={ listRef }>
          {
            autocomplete.map((item, key) => (
            <button
                key={key}
                className="autocomplete-list-item"
                onClick={ () => selectItem(item) }>
                {item}
            </button>
            ))
          }
        </div>
      }
    </div>
  );
}

export default InputAutocomplete;
