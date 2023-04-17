import styled from "styled-components";

export const StyleLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 369px;
  margin: 0 auto;
  gap: 2rem;
  padding: 32px 20px 20px 20px;
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  background-color: var(--Grey-3);
  color: var(--Grey-0);
  margin-bottom: 5rem;

  h1 {
    padding: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 22px;
    width: 100%;

    input {
      color: var(--Grey-0);
      padding: 0 12px;
    }

    label {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    button {
      width: 329.93px;
      margin-top: 0.5rem;
      font-size: 16px;
      font-weight: 600;
      width: 100%;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    justify-content: space-around;

    span {
      font-size: 12px;
      color: var(--Grey-1);
      font-weight: 600;
      padding: 0;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 329.93px;
      height: 48px;
      border-radius: 4.06px;
      background-color: var(--Grey-1);
      font-size: 16px;
      font-weight: 600;
      color: var(--Grey-0);
      text-decoration: none;
      transition: 0.5s ease;
      width: 100%;
      cursor: pointer;

      :hover {
        background-color: var(--Grey-2);
      }
    }
  }

  @media (min-width: 320px) {
    width: 80%;
  }

  @media (min-width: 375px) {
    max-width: 319px;
  }
`;
