import { ButtonDefaultStyle } from "../styles";

type Propriedades = {
  children?: string | JSX.Element | JSX.Element[];
  onClick?:any;
};

const ButtonDefault = (props: Propriedades) => {
  return <ButtonDefaultStyle onClick={props.onClick}>{props.children}</ButtonDefaultStyle>;
};

export default ButtonDefault;
