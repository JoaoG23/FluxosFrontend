import styled from "styled-components";

export const BodyStyle = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width:769px) {
    grid-template-columns: auto;
  }
`;

