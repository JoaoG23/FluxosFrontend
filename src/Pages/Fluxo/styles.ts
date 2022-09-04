import styled from "styled-components";

export const ContainerStyle = styled.main`
  padding: 10px;
  display: grid;
  align-content:flex-start;
  gap: 10px;
  font-size: 0.8rem;
  margin: 2em;
  width: 75vw;
  border-radius: 1em;
  height: 70vh;
  a{
    text-decoration:none;
  }

  animation: entradaSuave 0.8s ease-out;
  background-color: ${(props) => props.theme.color.light};
  box-shadow:1px 1px 4px ${(props) => props.theme.color.shadow};

  @media screen and (max-width: 769px) {
    width: 90vw;
    margin-top: 1em;
  }
`;

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5vh;

`;

export const TableStyle = styled.table`
  display: block;

  width: auto;
  overflow-x: scroll;

  border-top-right-radius: 1em;
  border-top-left-radius: 1em;
  border-collapse: collapse;
  th {
    border: none;
    color: ${(props) => props.theme.color.light};
    background-color: ${(props) => props.theme.color.dark};
    padding: 0.5em;
  }
  tr:nth-child(odd){
    border-radius: 10px;
    background-color:${(props) => props.theme.color.fifth} ;
  }

  td{
    padding: 4px;
    text-align: center;
  }
`;
