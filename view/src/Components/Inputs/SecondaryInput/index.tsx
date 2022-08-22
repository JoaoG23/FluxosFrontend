import React from "react";
import { SecondaryInputStyle } from "../styles";

interface Iinput {
  descricaoPlaceholder?: string;
  type: string;
}
const InputSecondary = (props: Iinput) => {
  return (
    <SecondaryInputStyle
      placeholder={props.descricaoPlaceholder}
      type={props.type}
    ></SecondaryInputStyle>
  );
};

export default InputSecondary;
