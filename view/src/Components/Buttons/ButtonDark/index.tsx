import { DarkButtonStyle } from "../styles";

type Propriedades = {
    children: string;
  };


const DarkButton = (props:Propriedades ) => {

    return(<DarkButtonStyle>{props.children}</DarkButtonStyle>)
}

export default DarkButton;
