import styled from "styled-components";

export const SidebarStyle = styled.header`
  width: 20vw;
  position: fixed;
  display: ${(props) => (props.prefix ? "flex" : "none")};
  flex-direction: column;
  gap: 1em;

  z-index: -1;
  padding: 0.5em;

  justify-content: space-between;
  box-shadow: 1px 1px 2px ${(props) => props.theme.color.dark};

  background-color: ${(props) => props.theme.color.dark};
  height: 100vh;
  div {
    color: ${(props) => props.theme.color.light};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.light};
  }

  @media screen and (max-width: 769px) {
    display: none;

    padding: 0vw;
    width: 100vw;
  }
`;

export const BoxImg = styled.div`
  padding: 7px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.color.light};
`;

export const Logo = styled.img`
  width: 100px;
`;
export const Item = styled.li`
  list-style: none;
  padding: 0.5em;

  animation: entradaSuave 0.5s forwards;

  color: ${(props) => props.theme.color.light};
  :hover {
    transition: 0.2s ease-in-out;
    border-radius: 0.5em;
    background-color: #ffffff32;
  }
`;
