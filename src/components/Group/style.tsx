import styled from "@emotion/styled";
export const StyledGroups = styled.div``;
export const StyledGroup = styled.div``;
export const StyledGroupHeader = styled.div`
  border-bottom: 1px solid yellow;
  display: flex;
  gap: 45px;
  padding: 14px 10px;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  p {
    font-weight: bold;
  }
  h4 {
    font-size: 15px;
  }
`;
export const StyledAction = styled.div`
  padding-top: 5px;
  border-top: 1px solid #ebebeb;
`;
export const StyledSlots = styled.div``;
export const StyledTitle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const StyledAddContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 50px;
  padding: 5px 10px;
  align-items: flex-start;
`;
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

