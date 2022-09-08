import styled from "styled-components";

export const Horizontal = styled.div`
  border-radius: 1em;
  padding: 1em;
   height: 40vh;
   display: grid;
   /* width: 90%; */
  background-color: ${(props) => props.theme.color.light};
  box-shadow: 1px 1px 4px ${(props) => props.theme.color.shadow};

  @media screen and (max-width: 769px) {
    justify-content: center;
    width: 300px;
  }
  @media screen and (max-width: 1024px) {
    justify-content: center;
    width: 70vw;
  }
`;
