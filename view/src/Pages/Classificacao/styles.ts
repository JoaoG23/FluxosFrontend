import styled from "styled-components";

export const ContainerStyle = styled.main`
  padding: 1em;
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-content:flex-start;
  gap: 1em;
  font-size: 0.8rem;
  margin:0.5em;
  width: 75vw;
  height: 80vh;
  a{
    text-decoration: none;
    color:${(props) => props.theme.color.primary};
  }

  @media screen and (max-width: 769px) {
    width: 90vw;
    margin-top: 1em;

    grid-template-columns: auto ;
  }


`;




