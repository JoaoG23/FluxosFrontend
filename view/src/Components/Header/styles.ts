import styled from "styled-components";

export const StyleDefault = styled.header`
    width: 80vw;
    background-color:${props => props.theme.color.primary};
    height: 3.5em;
    display: flex;
    left: 20vw;
    position: relative;
    
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
        
        left: 0vw;
        padding: 0vw;
        width: 100vw;
    }
    
    `
export const BoxImg = styled.div`
    padding: 7px;
    border-radius: 10px;
    background-color:${props => props.theme.color.light};
`;