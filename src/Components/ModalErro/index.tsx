import React from "react";
import { ModalStyle, ModalBackgroundStyle } from "./styles";

type Iinfo = {
    children?: JSX.Element[] | JSX.Element;
  }
  
// const [estado, setEstado] = useState();

const ModalErro :React.FC<Iinfo> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                <img src="./assets/erro.svg"></img>
                <h4>Houve algum erro na operação </h4>
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default ModalErro;