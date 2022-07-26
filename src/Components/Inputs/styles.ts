import styled from "styled-components";

export const PrimaryInputStyle = styled.input`
  border: none;
  padding: 4px;
  border-radius: 8px;
  font-weight: bold;

  box-shadow: 1px 1px 5px ${(props) => props.theme.color.shadow};

  background-color: ${(props) => props.theme.color.light};

`;

export const SecondaryInputStyle = styled(PrimaryInputStyle)`
    background-color: ${(props) => props.theme.color.fifth};
`;
