import styled from "styled-components";

export const Horizontal = styled.div`
  border-radius: 1em;
  padding: 1em;
   height: 40vh;
   display: flex;
   width: auto;
  background-color: ${(props) => props.theme.color.light};
  box-shadow: 1px 1px 4px ${(props) => props.theme.color.shadow};

  @media screen and (max-width: 769px) {
    width: 300px;
  }
  @media screen and (max-width: 1231px) {
    width: 100%;
  }
`;
