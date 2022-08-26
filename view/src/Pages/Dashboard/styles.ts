import styled from "styled-components";

export const ContainerStyle = styled.main`
  padding: 10px;
  display: grid;
  gap: 10px;

`;

export const HeaderStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;

  @media screen and (max-width:769px) {
    grid-template-columns: auto;
  }
`;

export const BodyStyle = styled(HeaderStyle)`
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width:769px) {
    grid-template-columns: auto;
  }
`;

export const ChatsContainerStyle = styled(HeaderStyle)`
  box-shadow:1px 1px 4px ${(props) => props.theme.color.shadow};
  border-radius: 1em;
  gap: 1em;

  height: 30vh;
  padding: 1em;
  background-color: ${(props) => props.theme.color.light};

  animation: entradaSuave 0.5s forwards;
`;
