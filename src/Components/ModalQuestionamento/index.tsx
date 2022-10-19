import React from "react";
import { ModalStyle, ModalBackgroundStyle } from "./styles";

type Iinfo = {
    children?: JSX.Element[] | JSX.Element;
  }
  

const ModalQuestionamento :React.FC<Iinfo> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                <img src="./assets/question.svg"></img>
                <h3>Tem certeza que deseja fazer isso</h3>
                { children }
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default ModalQuestionamento;