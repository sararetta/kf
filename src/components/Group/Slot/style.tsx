import styled from "@emotion/styled";


export const Styledslot = styled.div`
  padding: 0px 10px;
  border-top: 1px solid #ebebeb;
`;
export const StyledAddslot = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-column-gap: 20px;
  align-items: flex-start;
  padding: 10px 0px 20px;

  span {
    cursor: pointer;
    background: #dd524e;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: white;
    svg {
      padding: 5px;
      * {
        fill: white;
        stroke: white;
      }
    }
  }
`;
