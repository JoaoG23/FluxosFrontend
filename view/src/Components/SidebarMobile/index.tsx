import React from "react";
import { Link, useNavigate } from "react-router-dom";
import listaItensMenu from "./data/listaMenu";
import { SidebarStyle, Item, BtnEsconder } from "./styles";
import DarkButton from "../Buttons/ButtonDark";
import { useSelector } from "react-redux";
import { setEsconder } from "../../Redux/actions/menuMobileAction";
import { useDispatch } from "react-redux";

const SidebarMobile: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const exitEndLogout = () => {
    navigate('/');
    localStorage.clear();
  };

  function esconderSidebar() {
    dispatch(setEsconder())
  }
  const menuMobile = useSelector((store: any) => store?.menuMobile);
  return (
    <>
      {menuMobile && (
        <SidebarStyle>
          <div>
            <BtnEsconder onClick={() => esconderSidebar()}>X</BtnEsconder>
            <ul>
              {listaItensMenu.map((item) => (
                <Item key={item.id}>
                  <Link to={item.path}>{item.descricao}</Link>
                </Item>
              ))}
            </ul>
          </div>
          <DarkButton onClick={exitEndLogout}>Sair</DarkButton>
        </SidebarStyle>
      )}
    </>
  );
};

export default SidebarMobile;
