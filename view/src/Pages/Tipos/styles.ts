import styled from "styled-components";

export const ContainerStyle = styled.main`
  padding: 10px;
  display: grid;
  align-content:flex-start;
  gap: 10px;
  font-size: 0.8rem;
  margin: 2em;
  width: 75vw;
  border-radius: 1em;
  height: 70vh;
  grid-template-columns: auto auto auto;

  /* background-color: ${(props) => props.theme.color.light};
  box-shadow:1px 1px 4px ${(props) => props.theme.color.shadow}; */

  @media screen and (max-width: 769px) {
    grid-template-columns: auto;
    width: 90vw;
    margin-top: 1em;
  }
`;



