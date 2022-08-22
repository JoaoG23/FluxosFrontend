import styled from "styled-components";

export const PrimaryInputStyle = styled.input`
  border: none;
  padding: 5px;
  border-radius: 7px;
  font-weight: bold;
  border-bottom: 3px solid ${(props) => props.theme.color.fifth};
  border-right: 3px solid ${(props) => props.theme.color.fifth};

  box-shadow: 1px 1px 3px ${(props) => props.theme.color.shadow};

  background-color: ${(props) => props.theme.color.light};
`;

export const SecondaryInputStyle = styled(PrimaryInputStyle)`
    background-color: ${(props) => props.theme.color.fifth};
`;
