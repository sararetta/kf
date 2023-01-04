import React from "react";
import { StyledForm } from "./style";
type Props = {
  setValue: (value: string) => void;
  value?: string | undefined;
};

const Form = ({ setValue, value }: Props) => {
  return (
    <StyledForm>
      <input
        type="text"
        onChange={(e) => {
          setValue(String(e.target.value));
        }}
        value={value && value}
      />
    </StyledForm>
  );
};

export default Form;
