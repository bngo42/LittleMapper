export enum InputType {
  Text = 'text'
}

export interface InputProps {
  type: InputType;
  placeholder?: string;
}
