import styled from "styled-components";

export const ContainerStyle = styled.main`
  padding: 10px;
  display: grid;
  align-content: flex-start;
  gap: 10px;
  font-size: 0.8rem;
  margin: 2em;
  width: 23vw;

  border-radius: 1em;
  height: 70vh;
  background-color: ${(props) => props.theme.color.light};
  box-shadow: 1px 1px 4px ${(props) => props.theme.color.shadow};

  animation: entradaSuave 0.5s alternate forwards;
  div {
    display: flex;
    gap: 10px;
  }

  @media screen and (max-width: 1290px) {
    justify-content: center;
    width: 40vw;
    margin-top: 1em;
  }
  @media screen and (max-width: 769px) {
    justify-content: center;
    width: 90vw;
    margin-top: 1em;

    

    div {
      display: flex;
      flex-direction: column;
      gap: 0.3em;
    }
  }

  @keyframes entradaSuave {
    0% {
      transform: translateX(100vw);
      opacity: 0;
    }
    100% {
      transform: translateX(0vw);
      opacity: 1;
    }
  }
`;

export const PerfilStyle = styled.img`
  width: 6em;
`;

export const ContainerInputStyle = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`;
