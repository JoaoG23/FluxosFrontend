import styled from "styled-components";


export const Form = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  color:${(props) => props.theme.color.light};

  width: 50vw;
  max-width: 50vw;

  font-size: small;
  height: 50vh;
  padding: 20px;
  gap: 0.3em;

  background-color: ${(props) => props.theme.color.dark};


  border-radius: 0.2em;
  box-shadow: 3px 3px 5px ${(props) => props.theme.color.shadow};

  @media only screen and (max-width: 769px) {
    width: 300px;
    max-width: 300px;
  }
`;

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  
  background-color:${props => props.theme.color.primary} ;
  position: fixed;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: center;
`;


export const HiperLink = styled.a`
    color:${props => props.theme.color.light};
    text-decoration:none;
    font-weight: 300;
`

export const Title = styled.h1`
color:${props => props.theme.color.light};
`