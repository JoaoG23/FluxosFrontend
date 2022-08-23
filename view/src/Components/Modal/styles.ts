import styled from "styled-components";

export const ModalBackgroundStyle = styled.div`
  /* display: ${props => (props.prefix ? 'flex':'none')}; */
  display: flex;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* background-color: green; */
  background-color: ${(props) => props.theme.color.shadow};

  align-items: center;
  justify-content: center;

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

export const ModalStyle = styled.div`
  width:40vw;
  height: auto;

  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  padding: 1em;

  background-color: ${(props) => props.theme.color.light};
  color: ${(props) => props.theme.color.dark};

  border: none;
  border-radius: 25px;

  box-shadow: 3px 3px 10px ${(props) => props.theme.color.secondary};
`;
