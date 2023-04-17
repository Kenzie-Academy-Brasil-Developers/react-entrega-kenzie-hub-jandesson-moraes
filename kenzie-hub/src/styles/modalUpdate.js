import styled from "styled-components";

export const StyleModalUpdate = styled.div`
  height: 100vh;
  width: 100%;
  color: var(--Grey-0);
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;

  div {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background-color: var(--Grey-3);
    max-height: 100%;
    width: 100%;

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      background-color: var(--Grey-2);
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      padding: 0 12px;
      box-sizing: border-box;

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
      font-size: 12.18px;
      justify-content: space-evenly;
      padding-bottom: 2rem;
      padding: 0 12px;
      height: 275px;

      select {
        height: 48px;
        font-size: 16.24px;
        font-weight: 400;
        background-color: var(--Grey-2);
        color: var(--Grey-1);
        padding: 0 16.24px;
        border-radius: 4px;
        margin-bottom: 0.3rem;
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1.0994rem;

        .btn-1 {
          width: 12.75rem;
          padding: 0px, 22px, 0px, 22px;
          max-height: 48px;
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

          :hover {
            background-color: var(--Grey-1);
          }
        }
      }
    }
  }
  @media (min-width: 320px) {
    div {
      max-width: 300px;
    }
  }
  @media (min-width: 375px) {
    div {
      max-width: 349px;
    }
  }
  @media (min-width: 425px) {
    div {
      max-width: 369px;
    }
  }
`;
