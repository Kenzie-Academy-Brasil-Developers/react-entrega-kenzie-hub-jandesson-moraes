import styled from "styled-components";

export const StyleHeader = styled.header`
  width: 370px;
  display: flex;
  border: 1px solid red;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  color: var(--Grey-0);
`;

export const StyleHeaderLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 1.0831rem;
  color: var(--Grey-0);
`;

export const StyleHeaderRegister = styled.header`
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 370px;
  padding: 50px;
  margin: 0 auto;
  color: var(--Grey-0);

  img {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 12px;
    font-weight: 600;
    width: 67.49px;
    height: 40.11px;
    background-color: var(--Grey-3);
    color: var(--Grey-0);
    border-radius: 4px;
    transition: 0.5s ease;

    :hover {
      background-color: var(--Grey-2);
    }
  }

  @media(min-width:320px) {
    padding: 50px 18px;
  }

`;

export const StyleHeaderDashobard = styled.header`
  display: flex;
  align-items: center;
  max-width: 100%;
  height: 72px;
  margin: 0 auto;
  color: var(--Grey-0);
  padding: 0 13px;

  div {
    width: 700px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  button {
    width: 55.49px;
    height: 32px;
    background-color: var(--Grey-3);
    color: var(--Grey-0);
    border-radius: 4px;
    transition: 0.5s ease;

    :hover {
      background-color: var(--Grey-2);
    }
  }

  img {
    align-self: flex-start;
  }
`;
