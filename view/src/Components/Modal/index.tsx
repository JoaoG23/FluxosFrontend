import React from "react";
import { ModalStyle, ModalBackgroundStyle } from "./styles";

type Iinfo = {
    children?: string;
    prefix?:string ;
  }
  
// const [estado, setEstado] = useState();

const Modal :React.FC<Iinfo> = ({
    children,
    prefix
}) => (
        <ModalBackgroundStyle prefix={prefix}>
            <ModalStyle>
                <img alt="iconsinfo" src="./assets/infoicon.svg"></img>
                <h2>{children}</h2>
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default Modal;