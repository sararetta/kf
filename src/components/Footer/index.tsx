import React from "react";
import Button from "../Button";
import { StyledFooter } from "./styles";
type Props = {
  onClick: () => void;
};

const Footer = ({ onClick }: Props) => {
  return (
    <StyledFooter>
      <Button label="Add Group" color="#2f7bb5" onClick={onClick} />
    </StyledFooter>
  );
};

export default Footer;
