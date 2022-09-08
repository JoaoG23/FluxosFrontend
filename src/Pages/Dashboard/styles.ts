import styled from "styled-components";

export const ContainerStyle = styled.main`
  padding: 10px;
  display: grid;
  gap: 10px;
  animation: entradaSuave 0.8s;

`;

export const HeaderStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
  
  @media screen and (max-width:769px) {
    margin: auto;
    grid-template-columns: auto;
    justify-content: center;
  }
  @media screen and (max-width:1024px) {
    /* justify-content: center; */
    justify-content: center;
    grid-template-columns: 70vw;
  }
`;


