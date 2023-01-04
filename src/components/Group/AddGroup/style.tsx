import styled from "@emotion/styled";

export const StyledAddgroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 20px;

  align-items: center;
  span {
    cursor: pointer;
    background: #dd524e;
    width: 38px;
    height: 38px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    border: 1px;

    svg {
      padding: 10px;
      * {
        fill: white;
        stroke: white;
      }
    }
  }
`;

