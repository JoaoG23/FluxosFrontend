import React from "react";
import { PrimaryInputStyle } from "../styles";



type InputData = {
  descricaoPlaceholder?:React.HTMLInputTypeAttribute;
  type:React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
}

const InputPrimary:React.FC<InputData> = ({onChange,type,descricaoPlaceholder}) => {
  return(<PrimaryInputStyle onChange={onChange} type={type} placeholder={descricaoPlaceholder}>
  </PrimaryInputStyle>)
}

export default InputPrimary;
