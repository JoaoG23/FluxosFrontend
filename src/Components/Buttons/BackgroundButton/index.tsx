import { BackgroundButtonStyle } from "../styles";

type Propriedades = {
  children?: string | JSX.Element | JSX.Element[];
  onClick?:any;
};


const ButtonBackGround = (props: Propriedades) => {
  return <BackgroundButtonStyle>{props.children}</BackgroundButtonStyle>;
};

export default ButtonBackGround;
