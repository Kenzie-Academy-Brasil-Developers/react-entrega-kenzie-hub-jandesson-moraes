import styled from "styled-components";

export const StyleDashboardSection = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  color: var(--Grey-0);

  .section1 {
    width: 100%;
    border-top: 1px solid var(--Grey-2);
    border-bottom: 1px solid var(--Grey-2);

    div {
      width: 700px;
      display: flex;
      align-items: center;
      height: 118px;
      margin: 0 auto;
    }
  }

  .section2 {
    width: 100%;

    div {
      width: 700px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 118px;
      margin: 0 auto;
    }
  }
`;
