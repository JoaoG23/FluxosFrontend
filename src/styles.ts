import styled from "styled-components";


export const Body = styled.div`
  position: absolute;
  display: flex;
  z-index: -2;
  overflow-x: hidden;
  justify-content: center;
  
  top:15vh;
  width:77vw;
  left:20vw;
  @media screen and (max-width:769px) {
    left:0vw;
    right:0vw;
    width: 95vw;
    margin: auto;
    justify-content: center;
  }

`