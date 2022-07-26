import React from "react";
import { Link, useNavigate } from "react-router-dom";
import adminListaRotas, { comumListaRotas, classificacaoes } from "../Sidebar/data/listaMenu";
// Components
import { SidebarStyle, Item, BtnEsconder, ButtonExit } from "./styles";
import DarkButton from "../Buttons/ButtonDark";

// Services
import { getDataSession } from "../../services/getDataSession";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setEsconder } from "../../Redux/actions/menuMobileAction";

const SidebarMobile: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const exitEndLogout = () => {
    navigate("/");
    localStorage.clear();
  };

  function esconderSidebar() {
    dispatch(setEsconder());
  }

  function esconderQuandoTrocaPagina(elem: any) {
    let isClicked = elem.target as HTMLElement | null;
    if (isClicked) {
      esconderSidebar();
    }
  }

  const { isAdmin } = getDataSession();

  let itemDoSidebar = adminListaRotas;

  if (!isAdmin) {
    itemDoSidebar = comumListaRotas;
  }

  const menuMobile = useSelector((store: any) => store?.menuMobile);
  return (
    <>
      {menuMobile && (
        <SidebarStyle onClick={esconderQuandoTrocaPagina}>
          <div>
            <BtnEsconder onClick={() => esconderSidebar()}>
              <img alt="sairMenu" src="./assets/fecharMobile.svg"></img>
            </BtnEsconder>
            <ul>
              {itemDoSidebar.map((item) => (
                <Item key={item.id}>
                  <Link to={item.path}>{item.descricao}</Link>
                </Item>
              ))}
            </ul>
                <p>Classificações</p>
                <hr/> 
              <ul>
                {classificacaoes.map((item) => (
                  <Item key={item.id}>
                    <Link to={item.path}>{item.descricao}</Link>
                  </Item>
                ))}
              </ul>
          </div>
          <ButtonExit onClick={exitEndLogout}>Sair</ButtonExit>
        </SidebarStyle>
      )}
    </>
  );
};

export default SidebarMobile;
