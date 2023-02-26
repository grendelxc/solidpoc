import { createSignal } from 'solid-js';

export interface InputFieldProps {
  label: string;
  value: string;
  setValue(v: string): void;
}

export function InputField(props: InputFieldProps) {
  return (
    <div class='InputField'>
      <label>{props.label}</label>
      <input value={props.value} onInput={(event) => props.setValue(event.currentTarget.value)} />
    </div>
  )
}