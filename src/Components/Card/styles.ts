import styled from "styled-components";

export const CardStyle = styled.div`
  box-shadow: 1px 1px 3px ${(props) => props.theme.color.shadow};
  border-radius: 1em;
  gap: 1em;

  display: flex;
  justify-content: space-between;
  font-weight: 500;

  align-items: center;
  padding: 1em;
  background-color: ${(props) => props.theme.color.light};
  color: ${(props) => props.theme.color.dark};
  animation: entradaSuave 0.6s ease-out;

  section {
    display: flex;
    gap: 0.2em;
  }

  @media screen and (max-width: 320px) {
    font-size: medium;
    border-radius: 1.5em;

    div{
      flex-direction: column;
      gap: 0.2em;
    }
    section {
      /* display: block; */
      flex-direction: column;
      gap: 0.2em;
    }
  }
  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
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
