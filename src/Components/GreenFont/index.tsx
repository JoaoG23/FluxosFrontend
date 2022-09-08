
import { Green }  from './styles';
type GreenChildres = {
    children?:JSX.Element | JSX.Element[];
}
const GreenFont:React.FC<GreenChildres> = ({children}) => {
    return(<Green>{children}</Green>)
}

export default GreenFont;