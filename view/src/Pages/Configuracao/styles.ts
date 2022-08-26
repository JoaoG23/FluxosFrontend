import styled from "styled-components";

export const ContainerStyle = styled.main`
  padding: 1em;
  display: grid;
  grid-template-columns: auto auto auto auto;
  align-content:flex-start;
  gap: 1em;
  font-size: 0.8rem;
  margin:0.5em;
  width: 75vw;
  height: 80vh;

  @media screen and (max-width: 769px) {
    width: 80vw;
    margin-top: 1em;
  }

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

export const GroupBtnStyle = styled.div`
  display: flex;
  gap: 3px;
`



