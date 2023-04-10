import styled from "styled-components";

export const StyleSelect = styled.select`
  width: 329.93px;
  height: 48px;
  font-size: 16.24px;
  font-weight: 400;
  background-color: var(--Grey-2);
  color: var(--Grey-1);
  padding: 0 16.24px;
  border-radius: 4px;

  option {
    font-size: 16px;

    ::placeholder {
      font-size: 20px;
    }
  }
`;
