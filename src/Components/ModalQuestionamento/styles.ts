import styled from "styled-components";

export const ModalBackgroundStyle = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.shadowdark};

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
  box-shadow: 2px 2px 5px ${(props) => props.theme.color.shadow};

  div{
    display: flex;
    gap: 1em;
  }

  @media screen and (max-width:769px) {
    width:90vw;
  }
`;
