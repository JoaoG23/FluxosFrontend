import styled from "styled-components";

export const DarkButtonStyle = styled.button`

    background-color:${props => props.theme.color.dark};
    color:${props => props.theme.color.light};
    border:none;
    font-weight: bold;
    border-radius: 8px;
    padding: 7px;
    width:auto;
    a{
        text-decoration: none;
        color:${props => props.theme.color.light};
    }
    a:hover{
        color:${props => props.theme.color.dark};
    }
    :hover{
        transition: 0.4s ease-in;
        background-color:${props => props.theme.color.background};
        color:${props => props.theme.color.dark};
    }
`;

export const SecondaryButtonStyle = styled(DarkButtonStyle)`
    background:${props => props.theme.color.background};
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




