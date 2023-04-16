import styled from "styled-components";

export const StyleModalUpdate = styled.div`
  height: 100vh;
  width: 100vw;
  color: var(--Grey-0);
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  padding: 0;

  div {
    display: flex;
    flex-direction: column;
    width: 369px;
    max-height: 100%;
    border-radius: 4px;
    background-color: var(--Grey-3);

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
      gap: 1.5rem;
      font-size: 12.18px;
      padding: 5px 20px;
      padding-bottom: 1rem;

      fieldset {
        gap: 1.8rem;
      }

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
        display: flex;
        flex-direction: row;
        max-width: 100%;
        height: 100%;
        justify-content: space-between;
        padding-bottom: 2rem;

        .btn-1 {
          width: 204px;
          padding: 0px, 22px, 0px, 22px;
          height: 48px;
          border-radius: 4.06px;
          background-color: var(--color-primary-Disable);
          color: var(--Grey-0);
          transition: 0.5s ease;

          :hover {
            background-color: var(--Color-primary-Focus);
          }
        }

        .btn-2 {
          width: 98px;
          padding: 0px, 22px, 0px, 22px;
          height: 48px;
          border-radius: 4.06px;
          background-color: var(--Grey-2);
          color: var(--Grey-0);
          transition: 0.5s ease;
          cursor: pointer;

          :hover {
            background-color: var(--Grey-1);
          }
        }
      }
    }
  }
`;
