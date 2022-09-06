import {InputProps} from "components/inputs/input/input.model";

export interface InputAutocompleteProps extends InputProps {
  autocomplete?: any[];
  onAutocompleteValuePicked?: (item: any) => any;
  bindPath?: string;
}
