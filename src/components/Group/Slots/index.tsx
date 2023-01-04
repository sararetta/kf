import React, { useState } from "react";
import { AddIcon, RemoveIcon } from "../../../assets/icons";
import { groupsProps } from "../../../shared/types";
import Button from "../../Button";
import Slot from "../Slot";

import { StyledAction, StyledSlots } from "./style";

type Props = {
  index: number;
  slotes: string[];
  groups: groupsProps[];
  setGroups: React.Dispatch<React.SetStateAction<groupsProps[]>>;
};

const Slots = ({ slotes, groups, setGroups, index }: Props) => {
  const [slotValue, setValue] = useState("");
  const [addSlot, setAddSlot] = useState(false);
  return (
    <StyledSlots>
      {slotes.map((slot, ind) => {
        return (
          <Slot
            icon={<RemoveIcon />}
            setValue={setValue}
            value={slot}
            onClick={() => {
              let temp = [...groups];
              temp[index].slots.splice(ind, 1);
              setGroups(temp);
            }}
          />
        );
      })}
      {addSlot && (
        <Slot
          icon={<AddIcon />}
          setValue={setValue}
          value={slotValue}
          onClick={() => {
            let temp = [...groups];
            temp[index].slots.push(slotValue);
            setGroups(temp);
            setValue("");
            setAddSlot(false);
          }}
        />
      )}
      <StyledAction>
        <Button
          label="Add Slot"
          color="#54c4e9"
          onClick={() => {
            setAddSlot(true);
          }}
        />
      </StyledAction>
    </StyledSlots>
  );
};

export default Slots;
