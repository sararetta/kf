import React, { useState } from "react";
import { AddIcon, RemoveIcon } from "../../assets/icons";
import { groupsProps } from "../../shared/types";
import Button from "../Button";
import AddGroup from "./AddGroup";
import Slots from "./Slots";

import {
  StyledGroups,
  StyledGroup,
  StyledGroupHeader,
  StyledTitle,
  StyledAddContainer,
  StyledAction,
  StyledSlots,
} from "./style";

type Props = {
  groups: groupsProps[];
  setGroups: React.Dispatch<React.SetStateAction<groupsProps[]>>;
  addGroup: boolean;
  setAddGroup: React.Dispatch<React.SetStateAction<boolean>>;
};

const Group = ({ groups, setGroups, addGroup, setAddGroup }: Props) => {
  console.log(groups);
  return (
    <StyledGroups>
      {groups.length > 0
        ? groups?.map((gro, index) => {
            return (
              <StyledGroup>
                <GroupHeader />
                <StyledAddContainer>
                  <AddGroup
                    AddIcon={AddIcon}
                    RemoveIcon={RemoveIcon}
                    group={gro}
                    OnClick={() => {
                      let temp = [...groups];
                      temp.splice(index, 1);
                      setGroups([...temp]);
                    }}
                  />
                  <Slots
                    index={index}
                    slots={gro.slots}
                    groups={groups}
                    setGroups={setGroups}
                  />
                </StyledAddContainer>
              </StyledGroup>
            );
          })
        : null}
      {addGroup && (
        <StyledGroup>
          <GroupHeader />
          <StyledAddContainer>
            <AddGroup
              AddIcon={AddIcon}
              RemoveIcon={RemoveIcon}
              OnClick={(value) => {
                setGroups((preGro: any) => {
                  return [...preGro, { groupName: value, slots: [] }];
                });
                setAddGroup(false);
              }}
            />
            <StyledSlots>
              <StyledAction>
                <Button label="Add Slot" color="#54c4e9" onClick={() => {}} />
              </StyledAction>
            </StyledSlots>
          </StyledAddContainer>
        </StyledGroup>
      )}
    </StyledGroups>
  );
};
const GroupHeader = () => {
  return (
    <StyledGroupHeader>
      <p>#</p>
      <StyledTitle>
        <h4>Group</h4>
        <h4>Slot</h4>
      </StyledTitle>
    </StyledGroupHeader>
  );
};

export default Group;
