import styled from "styled-components";

export const PrimaryInputStyle = styled.input`
  border: none;
  padding: 4px;
  border-radius: 8px;
  font-weight: bold;

  box-shadow: 3px 3px 10px ${(props) => props.theme.color.shadowlight};

  background-color: ${(props) => props.theme.color.light};

`;

export const SecondaryInputStyle = styled(PrimaryInputStyle)`
    background-color: ${(props) => props.theme.color.fifth};
`;
