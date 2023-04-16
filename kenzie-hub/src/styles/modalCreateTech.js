import styled from "styled-components";

export const StyleModalCreate = styled.div`
  height: 100vh;
  width: 100vw;
  color: var(--Grey-0);
  font-family: "Inter", sans-serif;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0;

  div {
    display: flex;
    flex-direction: column;
    width: 369px;
    border-radius: 4px;
    margin: 0 auto;
    background-color: var(--Grey-3);
    padding: 0;

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      background-color: var(--Grey-2);
      padding: 0 16.24px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;

      button {
        color: var(--Grey-1);
        transition: 0.5s ease;

        :hover {
          color: var(--Grey-0);
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      padding: 20px;
      gap: 1.8rem;
      font-size: 12.18px;

      input {
        padding: 0 16.24px;
      }

      select {
        height: 48px;
        margin: 0;
        font-size: 16.24px;
        font-weight: 400;
        background-color: var(--Grey-2);
        color: var(--Grey-1);
        padding: 0 16.24px;
        border-radius: 4px;
        margin-bottom: 1rem;
      }

      div {
        max-width: 100%;
        height: 100%;
      }
    }
  }
`;
