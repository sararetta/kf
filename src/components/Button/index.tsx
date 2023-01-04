import React from "react";
import { StyledButton } from "./style";

type Props = {
  label: string;
  color: string;
  onClick: () => void;
};

const Button = ({ label, color, onClick }: Props) => {
  return (
    <StyledButton col={color} onClick={onClick}>
      + {label}
    </StyledButton>
  );
};

export default Button;
