import styled from "styled-components";

export const StyleFormRegister = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 370px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  background-color: var(--Grey-3);
  color: var(--Grey-0);
  align-items: center;
  padding: 32.5px 0 10px 0;
  gap: 2rem;
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
    padding: 0 16px;
    gap: 2rem;
    color: var(--Grey-0);

    p {
      color: var(--Negative);
      font-size: 12px;
      align-self: flex-start;
    }

    input {
      color: var(--Grey-0);
      width: 100%;
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

    select {
      width: 100%;
      max-width: 329.93px;
      height: 48px;
      font-size: 16.24px;
      font-weight: 400;
      background-color: var(--Grey-2);
      color: var(--Grey-1);
      padding: 0 16.24px;
      border-radius: 4px;
    }

    option {
      font-size: 16px;

      ::placeholder {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 320px) {
    width: 90%;
  }

  @media (min-width: 375px) {
    /* max-width: 319px; */
  }
`;
