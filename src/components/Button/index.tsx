import React from "react";
import { StyledButton } from "./style";

interface Props {
  children: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({ children, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
