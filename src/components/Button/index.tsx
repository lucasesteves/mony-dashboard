import React, { ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  height: number;
  width?: number;
  block: boolean;
  color: string;
  children: any;
  onClick(): void;
  cyName?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  height,
  width,
  color,
  block,
  children,
  onClick,
  cyName,
}) => {
  return (
    <Button
      data-cy={cyName}
      height={height}
      color={color}
      width={width}
      block={block}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
export default ButtonComponent;
