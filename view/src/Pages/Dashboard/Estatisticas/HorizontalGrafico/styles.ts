import styled from "styled-components";

export const Horizontal = styled.div`
  border-radius: 1em;
  padding: 1em;
   height: 50vh;
  background-color: ${(props) => props.theme.color.light};
  box-shadow: 1px 1px 4px ${(props) => props.theme.color.shadow};
`;
