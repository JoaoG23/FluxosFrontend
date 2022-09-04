import React from "react";
import { SelectStyle } from "./styles";

type Childrens = {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => any;
    value?:number
  children?: string | JSX.Element | JSX.Element[];
};

const SelectPrimary: React.FC<Childrens> = ({ value,children,onChange }) => {
  return <SelectStyle  onChange={onChange} value={value}>{children}</SelectStyle>;
};
export default SelectPrimary;
