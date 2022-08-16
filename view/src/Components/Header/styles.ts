import styled from "styled-components";

export const StyleDefault = styled.header`
    /* width: 100vw; */
    background-color:${props => props.theme.color.primary};
    height: 3.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1vw;
    padding-right: 1vw;
    box-shadow: 1px 1px 10px var(--sombra);

    text-align: center;
    color:${props => props.theme.color.light};
    
    section{
        gap:10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    @media screen and (max-width:600px) {
        
        padding: 0vw;
        width: 98vw;
    }
    
    `
export const BoxImg = styled.div`
    padding: 1vw;
    border-radius: 1em;
    background-color:${props => props.theme.color.light};
`;