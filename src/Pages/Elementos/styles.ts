import styled from "styled-components";

export const ContainerStyle = styled.main`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.8rem;
  margin: 2em;
  width: 75vw;
  border-radius: 1em;
  height: 70vh;
  @media screen and (max-width: 769px) {
    grid-template-columns: auto;
    width: 90vw;
    margin-top: 1em;
    justify-content: initial;
  }
`;
export const ContainerCards = styled.main`

display: grid;
gap: 10px;
grid-template-columns: auto auto;
  @media screen and (max-width: 769px) {
    grid-template-columns: auto;
    width: 90vw;
    margin-top: 1em;
    justify-content: initial;
  }
`;

export const Div = styled.div`
  display: grid;
  justify-content: center;

  @media screen and (max-width: 769px) {
    margin-top: 1em;
  }
`;



