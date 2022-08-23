import React from "react";
import { ModalStyle, ModalBackgroundStyle } from "./styles";

type Iinfo = {
    children?: JSX.Element[] | JSX.Element;
  }
  
// const [estado, setEstado] = useState();

const Modal :React.FC<Iinfo> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                {/* <img alt="iconsinfo" src="./assets/infoicon.svg"></img> */}
                {children}
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default Modal;