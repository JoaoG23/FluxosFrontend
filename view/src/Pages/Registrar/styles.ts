import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  color: ${(props) => props.theme.color.light};

  width: 30vw;
  max-width: 32vw;

  font-size: small;
  height: 60vh;
  padding: 2em;
  gap: 0.5em;
  animation: entradaSuave 1s alternate forwards;

  div{
    display: flex;
    gap: 1em;
    justify-content: center;
  }
  
  background-color: ${(props) => props.theme.color.dark};
  
  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.dark};
  }
  
  a:hover {
    text-decoration: none;
    color: ${(props) => props.theme.color.light};
  }
  
  border-radius: 0.2em;
  box-shadow: 3px 3px 5px ${(props) => props.theme.color.shadow};
  
  @media only screen and (max-width: 769px) {
    width: 90vw;
    max-width: 90vw;
    height: auto;
    div{
      display: grid;
      gap: 0.4em;
      justify-content:stretch;
    }
  }
`;

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.color.primary};
  position: fixed;
  display: flex;
  top: 0;

  align-items: center;
  justify-content: center;
`;

export const HiperLink = styled.a`
  color: ${(props) => props.theme.color.light};
  text-decoration: none;
  font-weight: 300;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.light};
`;
