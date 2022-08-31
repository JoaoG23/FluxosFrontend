import styled from "styled-components";

export const AlertaStyle = styled.div`

  box-shadow:1px 1px 2px ${(props) => props.theme.color.shadow};
  border-radius:8px;
  gap:1em;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  color: ${(props) => props.theme.color.dark};
  background-color: ${(props) => props.theme.color.light};
  animation: pelaLateral 0.5s ease-in-out forwards;


  @keyframes pelaLateral {
    0% {
      transform: translateX(0%);
      opacity: 0;
    }
    100% {
      transform: translateX(40%);
      opacity: 1;
    }
  }
`;



export const DangerStyle = styled(AlertaStyle)`
 background-color: ${(props) => props.theme.color.light};
 color: red;
 `
export const SuccessStyle = styled(DangerStyle)`
 color: green;
`