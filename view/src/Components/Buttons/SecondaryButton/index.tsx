import { SecondaryButtonStyle } from "../styles";

type Propriedades = {
  children: string;
};

const SecondaryButton = (props: Propriedades) => {
  return <SecondaryButtonStyle>{props.children}</SecondaryButtonStyle>;
};

export default SecondaryButton;
