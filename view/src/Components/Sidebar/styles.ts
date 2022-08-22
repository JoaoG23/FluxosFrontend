import styled from "styled-components";

export const SidebarStyle = styled.header`
    width: 20vw;
    position: fixed;
    display:flex;
    flex-direction: column;
    gap: 1em;
    padding: 0.5em;

    background-color:${props => props.theme.color.dark};
    height: 100vh;

    @media screen and (max-width:769px) {

        display: none;
        
        padding: 0vw;
        width: 100vw;
    }
    
    `

export const BoxImg = styled.div`
    padding: 7px;
    border-radius: 10px;
    background-color:${props => props.theme.color.light};
`;

export const Logo = styled.img`
    width: 100px;
    `
export const Item = styled.li`
    list-style: none;
    padding: 0.6em;
    color:${props => props.theme.color.light};
    :hover{
        transition: 0.2s ease-in-out;
        border-radius: 0.5em;
        background-color: #88c2b933;
    }
`
