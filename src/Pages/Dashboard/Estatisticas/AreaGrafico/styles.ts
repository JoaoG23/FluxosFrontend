import styled from "styled-components";

export const Area = styled.div`
  border-radius: 1em;
  margin-top: 20px;
  padding: 1em;
  display: grid;
  grid-template-columns: auto;

  width: auto;
  height: 40vh;
  background-color: ${(props) => props.theme.color.light};
  box-shadow: 1px 1px 4px ${(props) => props.theme.color.shadow};

  @media screen and (max-width: 769px) {
    width: 300px;
  }
  @media screen and (max-width: 1024px) {
    justify-content: center;
    width: 70vw;
  }
`;
