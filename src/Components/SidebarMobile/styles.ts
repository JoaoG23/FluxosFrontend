import styled from "styled-components";

export const SidebarStyle = styled.header`
  width: 20vw;
  position: fixed;
  display: none;
  flex-direction: column;
  gap: 1em;

  z-index: 0;
  padding: 0.5em;

  justify-content: space-between;
  box-shadow: 1px 1px 2px ${(props) => props.theme.color.dark};

  background-color: ${(props) => props.theme.color.dark};
  height: 100vh;
  div{
    color: ${(props) => props.theme.color.light}; ;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.light};
  }

  @media screen and (max-width: 769px) {
    display: flex;

    padding: 0vw;
    width: 100vw;
  }
  @media screen and (max-width: 500px) {
    height: 100%;
  }
`;

export const BoxImg = styled.div`
  padding: 7px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.light};
`;
export const BtnEsconder = styled.button`
  background: none;
  border: none;
  font-size: medium;
  justify-content: end;
  color: ${(props) => props.theme.color.light};
`;

export const Logo = styled.img`
  width: 100px;
`;
export const Item = styled.li`
  list-style: none;
  padding: 0.6em;
  font-size: medium;

  animation: entradaSuave 0.5s forwards;

  color: ${(props) => props.theme.color.light};
  :hover {
    transition: 0.2s ease-in-out;
    border-radius: 0.5em;
    background-color: #ffffff16;
  }
`;

export const ButtonExit = styled.button`
  list-style: none;
  padding: 0.5em;
  display: flex;

  border: none;

  animation: entradaSuave 0.5s forwards;
  border-radius: 0.6em;
  
  
  background-color: #ffffff32;
  color: ${(props) => props.theme.color.light};
  :hover {
    animation: entradaSuave 0.5s forwards;
    border-radius:3em;
    transition: 0.2s ease-in-out;
    background-color: none;
  }
`;
 
