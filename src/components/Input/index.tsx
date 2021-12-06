import React, { InputHTMLAttributes, KeyboardEvent } from "react";
import { Input } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  value?: string;
  data(e: any): void;
  enter(e: KeyboardEvent): void;
  height: number;
  cyName?: string;
}

const InputComponent: React.FC<InputProps> = ({
  value,
  height,
  type,
  placeholder,
  data,
  enter,
  cyName,
}) => {
  return (
    <Input
      data-cy={cyName}
      value={value}
      height={height}
      type={type}
      placeholder={placeholder}
      onChange={(e: any) => data(e.target.value)}
      onKeyDown={(e) => enter(e)}
    />
  );
};
export default InputComponent;
