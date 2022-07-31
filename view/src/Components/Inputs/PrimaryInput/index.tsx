import React from "react";
import { PrimaryInputStyle } from "../styles";

interface Iinput {
  descricaoPlaceholder: string;
  type: string;
}
const Input = (props: Iinput) => {
  return (
    <PrimaryInputStyle
      placeholder={props.descricaoPlaceholder}
      type={props.type}
    ></PrimaryInputStyle>
  );
};

export default Input;
