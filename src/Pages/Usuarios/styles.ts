import styled from "styled-components";

export const ContainerStyle = styled.main`
  padding: 10px;
  display: grid;
  align-content:flex-start;
  gap: 10px;
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


