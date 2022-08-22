import { PrimaryButtonStyle } from "../styles";

type Propriedades = {
  children?: string | JSX.Element | JSX.Element[];
  onClick?:any;
};

const PrimaryButton = (props: Propriedades) => {
  return <PrimaryButtonStyle onClick={props.onClick}>{props.children}</PrimaryButtonStyle>;
};

export default PrimaryButton;
