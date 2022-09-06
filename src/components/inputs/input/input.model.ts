export enum InputType {
  Text = 'text'
}

export interface InputProps {
  type?: InputType;
  placeholder?: string;
  onInputValueChange?: (val: any) => any;
  value?: any;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
}
