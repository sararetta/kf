import React from "react";
import { StyledForm } from "./style";
type Props = {
  onchange?: (value: any) => void
  setValue: (value: string) => void;
  value?: string | undefined;
};

const Form = ({ setValue, value ,onchange}: Props) => {
  return (
    <StyledForm>
      <input
        type="text"
        onChange={(e) => {
          onchange?onchange(String(e.target.value)):setValue(String(e.target.value));
        }}
        value={value && value}
      />
    </StyledForm>
  );
};

export default Form;
