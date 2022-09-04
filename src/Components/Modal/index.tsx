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
                {children}
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default Modal;