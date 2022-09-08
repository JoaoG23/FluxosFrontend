
import { Green }  from './styles';
type GreenChildres = {
    children?:any;
}
const GreenFont:React.FC<GreenChildres> = ({children}) => {
    return(<Green>{children}</Green>)
}

export default GreenFont;