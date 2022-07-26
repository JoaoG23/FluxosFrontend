import styled from "styled-components";

export const BodyStyle = styled.div`
  display: grid;
  gap: 1.5em;
  grid-template-columns: 1fr 1fr;
  /* justify-content:center; */
  /* align-items: center; */
  
  @media screen and (max-width:769px) {
    grid-template-columns: auto;
  }
  
  @media screen and (max-width:1270px) {
    justify-content:center;
    grid-template-columns: auto auto;
    width: 100%;
  }
  @media screen and (max-width:1391px) {
    justify-content:center;
    grid-template-columns: auto;
    width: 100%;
  }
`;

