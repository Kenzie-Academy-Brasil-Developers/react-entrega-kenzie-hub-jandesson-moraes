import styled from "styled-components";

export const StyleInput = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0px;

  label {
    font-size: 12.18;
    font-weight: 400;
  }

  input {
    padding: 0px, 22px, 0px, 22px;
    height: 38.37;
    border-radius: 4.06px;
    font-size: 16.24px;
    background-color: var(--Grey-2);
    color: var(--Grey-1);
    height: 48px;
  }

  p {
    padding: 0px;
    color: var(--Negative);
    font-size: 12px;
  }
`;
