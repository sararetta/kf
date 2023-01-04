import styled from "@emotion/styled";
type StyledButtonPro = {
  col: string;
};
export const StyledButton = styled.button<StyledButtonPro>`
  background-color: ${({ col }: StyledButtonPro) => col};
  padding: 5px 15px;
  color: white;
  text-transform: capitalize;
  border: none;
  outline: none;
  cursor: pointer;
`;
