import React from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { DangerStyle } from "../styles";

type ChildrensCard = {
    children?: string | JSX.Element | JSX.Element[];
    onClick?:(e:React.MouseEvent<HTMLElement>) => void;
  }
  

const AlertaDanger :React.FC<ChildrensCard> = ({
    children,
    onClick
}) => {
    return(<DangerStyle>
        <img src='./assets/erro.svg' alt="error"></img>
        { children }
        <PrimaryButton onClick={onClick}>X</PrimaryButton>
    </DangerStyle>)
};

export default AlertaDanger;