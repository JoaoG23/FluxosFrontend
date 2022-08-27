import styled from "styled-components";


export const Body = styled.div`
  position: absolute;
  display: flex;
  z-index: -2;
  overflow-x: hidden;
  
  top:15vh;
  width: 80vw;
  left:20vw;
  @media screen and (max-width:769px) {
    left:0vw;
    right:0vw;
    width: 98vw;
    margin: auto;
    justify-content: center;
  }

`