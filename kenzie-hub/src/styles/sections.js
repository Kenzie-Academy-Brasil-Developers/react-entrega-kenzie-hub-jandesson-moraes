import styled from "styled-components";

export const StyleDashboardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  color: var(--Grey-0);
  font-family: "Inter", sans-serif;
  border: var(--Grey-1);
  border: 1px solid red;

  nav {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    height: 118px;
    width: 100%;
    border-top: 1px solid var(--Grey-3);
    border-bottom: 1px solid var(--Grey-3);
    div {
      width: 700px;
      p {
        color: var(--Grey-1);
      }
    }
  }

  div {
    width: 700px;
    display: flex;
    align-items: center;
    height: 118px;
    margin: 0 auto;
    justify-content: space-between;
  }

  section {
    display: flex;
    width: 100%;
    width: 700px;
    margin: 0 auto;
    flex-direction: column;

    div {
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33px;
        height: 33px;
        background-color: var(--Grey-3);
        border-radius: 4px;
        transition: 0.5s ease;

        :hover {
          background-color: var(--Grey-2);
        }
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      padding: 26px;
      background-color: var(--Grey-3);
      gap: 16px;
      border-radius: 4px;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 49px;
        padding: 0 22px;
        border-radius: 4px;
        background-color: var(--Grey-4);
        transition: 0.5s ease;

        p {
          font-size: 12.18px;
          color: var(--Grey-1);
        }

        :hover {
          background-color: var(--Grey-2);
        }
      }
    }
  }
`;
