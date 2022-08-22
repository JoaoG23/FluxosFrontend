import styled from "styled-components";

export const CardStyle = styled.div`

  box-shadow:1px 1px 3px ${(props) => props.theme.color.shadow};
  border-radius: 1em;
  gap:1em;

  display: flex;
  justify-content: space-between;

  align-items: center;
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

