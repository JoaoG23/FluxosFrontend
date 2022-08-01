import React from "react";
import { PrimaryInputStyle } from "../styles";

interface Iinput {
  descricaoPlaceholder: string;
  type: string;
  onChange:any;
}
const Input = (props: Iinput) => {
  return (
    <PrimaryInputStyle
      onChange={props.onChange}
      placeholder={props.descricaoPlaceholder}
      type={props.type}
    ></PrimaryInputStyle>
  );
};

export default Input;
