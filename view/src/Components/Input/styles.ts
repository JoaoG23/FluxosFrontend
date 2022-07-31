import styled from "styled-components";

export const InputStyle = styled.input`
  border: none;
  padding: 4px;
  border-radius: 5px;
  font-weight: bold;

  background-color: ${(props) => props.theme.color.light};
  :focus {
    animation: evidente 4s ease-in 0s infinite forwards alternate;
  }

  @keyframes evidente {
    from {
      background-color: whitesmoke;
      color: #000;
    }
    to {
      background-color: #b4bec9;
      color: #159a9c;
    }
  }
`;
