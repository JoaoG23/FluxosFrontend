import React from "react";
import { CardStyle } from "./styles";

type ChildrensCard = {
    children?: string | JSX.Element | JSX.Element[];
  }
  

const Card :React.FC<ChildrensCard> = ({
    children,
}) => {
    return(<CardStyle>
        { children }
    </CardStyle>)
};

export default Card;