import styled from "styled-components";

export const DarkButtonStyle = styled.button`

    box-shadow: 1px 1px 2px ${props => props.theme.color.shadow};
    background-color:${props => props.theme.color.dark};
    color:${props => props.theme.color.light};
    border:none;
    font-size: medium;
    display: flex;
    align-items: center;
    border-radius: 10px;
    padding: 8px;

    @media screen and (max-width: 320px) {
        padding: 0.7em;
        
    }
    a{
        text-decoration: none;
        color:${props => props.theme.color.light};
    }
    a:hover{
        color:${props => props.theme.color.dark};
    }
    :hover{
        transition: 0.4s ease-in;
        background-color:${props => props.theme.color.dark};
        color:${props => props.theme.color.dark};
    }
`;

export const SecondaryButtonStyle = styled(DarkButtonStyle)`
    background-color:${props => props.theme.color.secondary};
    color:${props => props.theme.color.dark};
    :hover{
        transition: 0.5s ease-in;
        background-color:${props => props.theme.color.dark};
        color:${props => props.theme.color.background};
    }
`;
export const BackgroundButtonStyle = styled(DarkButtonStyle)`
    background-color:${props => props.theme.color.background};
    color:${props => props.theme.color.dark};
    :hover{
        transition: 0.5s ease-in;
        background-color:${props => props.theme.color.dark};
        color:${props => props.theme.color.background};
    }
`;

export const PrimaryButtonStyle = styled(DarkButtonStyle)`
    background:${props => props.theme.color.primary};
    color:${props => props.theme.color.light};
    :hover{
        transition: 0.5s ease-in;
        background-color:${props => props.theme.color.dark};
        color:${props => props.theme.color.background};
    }
`;
export const ButtonDefaultStyle = styled.button`

    background-color:transparent ;
    color:${props => props.theme.color.background} ;
    border: none;

    /* z-index: 2; */
    display: flex;
    gap: 1em;
    align-items: center;

    :hover{
        color: ${props => props.theme.color.background};
        /* animation: mudarCores 1s alternate forwards; */
    }

    /* @keyframes mudarCores {
    from {background-image: linear-gradient(${props => props.theme.color.dark}, ${props => props.theme.color.light});}
    to {background-image: linear-gradient(${props => props.theme.color.background}, ${props => props.theme.color.dark});}
    } */
`;




