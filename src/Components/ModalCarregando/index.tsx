import React from "react";
import { ModalStyle, ModalBackgroundStyle } from "./styles";

type Iinfo = {
    children?: JSX.Element[] | JSX.Element;
  }
  
// const [estado, setEstado] = useState();

const ModalCarregando :React.FC<Iinfo> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                {/* <img src="./assets/erro.svg"></img> */}
                <h1>Carregando .... </h1>
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default ModalCarregando;