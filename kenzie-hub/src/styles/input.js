import styled from "styled-components";

export const StyleInput = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0px;

  label {
    font-size: 12.18;
    font-weight: 400;
  }

  input {
    width: 100%;
    padding: 0px, 22px, 0px, 22px;
    height: 48px;
    border-radius: 4.06px;
    box-sizing: border-box;
    font-size: 16.24px;
    padding-left: 16.4px;
    background-color: var(--Grey-2);
    color: var(--Grey-1);

  }
  p {
    padding: 0px;
    color: var(--Negative);
    font-size: 12px;
  }
`;
