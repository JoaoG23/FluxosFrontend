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
  box-shadow: ${(props) => props.theme.color.shadow};
  border-radius: 1em;
  gap: 1em;

  height: 30vh;
  padding: 1em;
  background-color: ${(props) => props.theme.color.light};

  animation: entradaSuave 0.5s forwards;

  @keyframes entradaSuave {
    0% {
      transform: translateY(100vh);
      opacity: 0;
    }
    100% {
      transform: translateY(0vh);
      opacity: 1;
    }
  }
`;
