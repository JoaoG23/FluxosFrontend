import styled from "styled-components";


export const HeaderStyle = styled.div`

    display: flex;
    justify-content: space-between;
    padding: 0.3em;
  background-color: ${(props) => props.theme.color.primary};
  /* box-shadow: 3px 3px 5px ${(props) => props.theme.color.secondary}; */

  div{
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  @media only screen and (max-width: 760px) {

    h4{
        display: none;
    }
  }
  @media only screen and (max-width: 300px) {
    /* width: 300px;
    max-width: 300px; */
  }
`;


