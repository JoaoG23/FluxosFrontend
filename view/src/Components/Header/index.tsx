
import { MdArrowBack, MdAccountCircle } from "react-icons/md";
import React from "react"
import { HeaderStyle } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderStyle>
        <MdArrowBack size={50}></MdArrowBack>
      <div>
        <h4>Nome Usuario</h4>
        <MdAccountCircle size={50}></MdAccountCircle>
        <details></details>
      </div>
      
    </HeaderStyle>
  );
};

export default Header;
