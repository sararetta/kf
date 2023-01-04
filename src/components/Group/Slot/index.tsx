import Form from "../../Form";
import { StyledAddslot, Styledslot } from "./style";

type Props = {
  OnChange?: (value:any) => void
  icon: JSX.Element;
  onClick: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
const Slot = ({ onClick, setValue, value, icon ,OnChange}: Props) => {
  return (
    <Styledslot>
      <StyledAddslot>
        <Form setValue={setValue} value={value} onchange={OnChange} />
        <span onClick={onClick}>{icon}</span>
      </StyledAddslot>
    </Styledslot>
  );
};

export default Slot;
