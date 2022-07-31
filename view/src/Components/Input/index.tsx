import React from "react";
import { InputStyle } from "./styles";

interface Iinput {
  descricaoPlaceholder: string;
}
const Input = (props:Iinput) => {
  return (
      <InputStyle placeholder={props.descricaoPlaceholder} type='text' ></InputStyle>
  );
}

export default Input;
