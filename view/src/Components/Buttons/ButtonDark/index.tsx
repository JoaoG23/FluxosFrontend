import { DarkButtonStyle } from "../styles";

type Propriedades = {
  children?: string;
  onClick?:any;
};

const DarkButton = (props: Propriedades) => {
  return <DarkButtonStyle onClick={props.onClick}>{props.children}</DarkButtonStyle>;
};

export default DarkButton;
