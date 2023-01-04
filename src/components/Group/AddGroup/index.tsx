import React, { useState } from "react";
import { AddIcon, RemoveIcon } from "../../../assets/icons";
import { groupsProps } from "../../../shared/types";

import Form from "../../Form";

import { StyledAddgroup } from "./style";
type Props = {
  AddIcon: () => JSX.Element;
  RemoveIcon: () => JSX.Element;
  OnClick: (value: string) => void;
  group?: groupsProps;
};
const AddGroup = ({ group, OnClick, AddIcon, RemoveIcon }: Props) => {
  const [value, setValue] = useState("");
  return (
    <StyledAddgroup>
      <span
        onClick={() => {
          OnClick(value);
        }}
      >
        {group?.groupName ? <RemoveIcon /> : <AddIcon />}
      </span>
      <Form setValue={setValue} value={group?.groupName} />
    </StyledAddgroup>
  );
};

export default AddGroup;
