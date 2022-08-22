import styled from "styled-components";

export const ContainerStyle = styled.main`
  padding: 10px;
  display: grid;
  align-content:flex-start;
  gap: 10px;
  font-size: 0.8rem;
  margin: 2em;
  width: 20vw;

  border-radius: 1em;
  height: 60vh;
  background-color: ${(props) => props.theme.color.light};
  box-shadow:1px 1px 4px ${(props) => props.theme.color.shadow};


  div{
    display: flex;
    gap: 10px;
  }

  @media screen and (max-width: 769px) {
    width: 90vw;
    margin-top: 1em;
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
`

export const ContainerInputStyle = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
`

