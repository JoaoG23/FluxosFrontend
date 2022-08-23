import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 80vw;
    background-color:${props => props.theme.color.primary};
    height: 3.5em;
    display: flex;
    left: 20vw;
    position: fixed;
    z-index: -1;
    
    justify-content: space-between;
    align-items: center;
    padding-left: 1vw;
    padding-right: 1vw;
    box-shadow: 1px 1px 3px ${props => props.theme.color.shadow};
    
    text-align: center;
    color:${props => props.theme.color.light};

    
    section{
        gap:10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        text-decoration:none;
        color:${props => props.theme.color.light} ;
    }

    section:hover{
        border-radius: 4px;
        background-color:${props => props.theme.color.dark} ;
        color:${props => props.theme.color.light} ;
    }
    
    @media screen and (max-width:769px) {
        
        left: 0vw;
        gap:1em;
        padding: 0vw;
        width: 100vw;
    }
    
    
    `
export const BoxImg = styled.div`
    padding: 7px;
    border-radius: 10px;
    background-color:${props => props.theme.color.light};
    `;

export const MenuMobileStyle = styled.img`
    display: none;
    @media screen and (max-width:769px) {
        display: flex;
    }
`;

export const ContainerRightStyle = styled.div`
 display: flex;
 /* gap: 0.6em; */
 `;