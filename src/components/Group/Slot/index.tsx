import Form from "../../Form";
import { StyledAddslot, Styledslot } from "./style";

type Props = {
  icon: JSX.Element;
  onClick: () => void;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
const Slot = ({ onClick, setValue, value, icon }: Props) => {
  return (
    <Styledslot>
      <StyledAddslot>
        <Form setValue={setValue} value={value} />
        <span onClick={onClick}>{icon}</span>
      </StyledAddslot>
    </Styledslot>
  );
};

export default Slot;
