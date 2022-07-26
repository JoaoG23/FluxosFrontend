import { SecondaryButtonStyle } from "../styles";

type Propriedades = {
  children?: string | JSX.Element | JSX.Element[];
  onClick?:any;
};


const SecondaryButton = (props: Propriedades) => {
  return <SecondaryButtonStyle>{props.children}</SecondaryButtonStyle>;
};

export default SecondaryButton;
