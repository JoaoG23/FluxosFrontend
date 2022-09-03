import styled from "styled-components";

export const Area = styled.div`

    border-radius: 1em;
    padding: 1em;   
    display: grid;
    grid-template-columns: auto;

    width: auto;
    height: 40vh;
    background-color: ${(props) => props.theme.color.light};
    box-shadow:1px 1px 4px ${(props) => props.theme.color.shadow};


`;
