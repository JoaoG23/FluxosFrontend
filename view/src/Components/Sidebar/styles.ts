import styled from "styled-components";

export const StyleDefault = styled.header`
    /* width: 10vw; */
    display:flex;
    flex-direction: column;
    gap: 1em;
    padding: 0.5em;

    background-color:${props => props.theme.color.dark};
    height: 100vh;

    @media screen and (max-width:600px) {
        
        padding: 0vw;
        width: 98vw;
    }
    
    `

export const Logo = styled.img`
    width: 100px;
    `
export const Item = styled.li`
    list-style: none;
    padding: 0.6em;
    color:${props => props.theme.color.light};
    :hover{
        transition: 0.5s ease-in-out;
        border-radius: 0.5em;
        background-color: ${props => props.theme.color.light};
        /* opacity: 0.1; */
    }
`
