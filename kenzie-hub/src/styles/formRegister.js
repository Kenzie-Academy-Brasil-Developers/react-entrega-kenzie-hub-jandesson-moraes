import styled from "styled-components";

export const StyleFormRegister = styled.div`
  display: flex;
  flex-direction: column;
  width: 370px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  background-color: var(--Grey-3);
  color: var(--Grey-0);
  align-items: center;
  padding: 32.5px 0 10px 0;
  gap: 1.5rem;
  margin-bottom: 5rem;
  border-radius: 4px;

  h4 {
    color: var(--Grey-1);
    font-size: 12px;
    font-weight: 400;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1.375rem;
    gap: 1.2rem;
    color: var(--Grey-0);

    input {
      color: var(--Grey-0);
    }

    label {
      font-size: 14px;
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    button {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 1rem;
    }
  }
`;
