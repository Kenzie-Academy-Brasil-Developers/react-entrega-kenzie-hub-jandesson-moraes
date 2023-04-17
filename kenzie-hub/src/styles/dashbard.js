import styled from "styled-components";

export const StyleDashboardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  color: var(--Grey-0);
  font-family: "Inter", sans-serif;
  border: var(--Grey-1);

  nav {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;
    height: 118px;
    width: 100%;
    border-top: 1px solid var(--Grey-3);

    div {
      padding: 0 13px;
      width: 700px;
      width: 100%;
      margin: 0 auto;
      p {
        color: var(--Grey-1);
      }
    }
  }

  div {
    border-bottom: 1px solid var(--Grey-3);
    display: flex;
    align-items: center;
    height: 118px;
    margin: 0 auto;
    justify-content: space-between;
    max-width: 700px;
    width: 100%;
    padding: 0 13px;
    margin: 0;
    box-sizing: border-box;
  }

  section {
    display: flex;
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    flex-direction: column;
    /* padding: 0 12px; */
    
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
      padding: 26px 12px;
      margin: 0 12px;
      background-color: var(--Grey-3);
      gap: 16px;
      border-radius: 4px;

      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 49px;
        padding: 0 13px;
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

  @media (min-width: 320px) {
    nav {
      div {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
      }
    }
  }

  @media (min-width: 768px) {
    nav {
      div {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
    section {
      ul {
        margin: 0;
      }
    }
  }
`;
