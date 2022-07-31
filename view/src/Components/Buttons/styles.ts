import styled from "styled-components";

export const DarkButtonStyle = styled.button`

    background-color:${props => props.theme.color.dark};
    color:${props => props.theme.color.light};
    border:none;
    font-weight: bold;
    border-radius: 8px;
    padding: 7px;
    width:50%;
    :hover{
        transition: 1s;
        background-color:${props => props.theme.color.background};
        color:${props => props.theme.color.dark};
    }
`;

export const SecondaryButtonStyle = styled(DarkButtonStyle)`
    background:${props => props.theme.color.background};
    color:${props => props.theme.color.dark};
    :hover{
        transition: 1s;
        background-color:${props => props.theme.color.dark};
        color:${props => props.theme.color.background};
    }
`;




