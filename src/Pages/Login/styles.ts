import styled from "styled-components";


export const Form = styled.form`
  display: flex;
  flex-direction: column;

  justify-content: center;

  width: 17em;
  max-width: 17em;
  height: 50vh;
  padding: 20px;
  gap: 10px;

  background-color: ${(props) => props.theme.color.primary};

  text-align: center;
  font-weight: 700;

  border-radius: 15px;
  box-shadow: 3px 3px 5px ${(props) => props.theme.color.secondary};

  a{
    text-decoration: none;
    color:${(props) => props.theme.color.dark};
  }
  
  a:hover{
    text-decoration: none;
    color:${(props) => props.theme.color.light};
  }

  animation: entradaSuave 1s alternate forwards;

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
  @media only screen and (max-width: 600px) {
    width: 300px;
    max-width: 300px;
  }
`;

export const Container = styled.main`
  height: 100vh;
  width: 100vw;


  
  background-color:${props => props.theme.color.dark} ;
  position: fixed;
  display: flex;
  top: 0;
  z-index: 0;
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