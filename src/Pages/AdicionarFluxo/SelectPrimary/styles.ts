import styled from "styled-components";

export const SelectStyle = styled.select`
    display: grid;
    
    border:none;
    padding: 0.3em;
    align-content:center;
    
    background-color: ${(props) => props.theme.color.fifth};
    color:${(props) => props.theme.color.dark};
    box-shadow:1px 1px 3px ${(props) => props.theme.color.shadow};
    font-variant: small-caps;
    
    option{
        font-variant: small-caps;
    }

    border-radius: 0.6em;
`;