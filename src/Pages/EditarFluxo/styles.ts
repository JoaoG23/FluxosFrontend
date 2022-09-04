import styled from "styled-components";

export const ContainerStyle = styled.main`
  padding: 10px;
  display: grid;
  gap: 10px;
  font-size: 0.9rem;
  margin: 2em;
  width: 30vw;
  border-radius: 1em;
  height: 75vh;

  animation: entradaSuave 0.8s ease-out;
  background-color: ${(props) => props.theme.color.light};
  color: ${(props) => props.theme.color.dark};
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
export const IconModal = styled.img`
  width: 200px;
  opacity: 0.6;

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
