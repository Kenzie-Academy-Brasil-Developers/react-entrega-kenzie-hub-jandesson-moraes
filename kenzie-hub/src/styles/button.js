import styled from "styled-components";


export const StyleButton = styled.button`
  width: 100%;
  padding: 0px, 22px, 0px, 22px;
  height: 48px;
  border-radius: 4.06px;
  background-color: var(--Color-primary);
  color: var(--Grey-0);
  transition: 0.5s ease;
  cursor: pointer;

  :hover {
    background-color: var(--Color-primary-Focus);
  }
`;
