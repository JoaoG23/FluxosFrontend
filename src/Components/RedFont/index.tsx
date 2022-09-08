
import { Red }  from './styles';
type RedChildres = {
    children?:JSX.Element | JSX.Element[];
}
const RedFont:React.FC<RedChildres> = ({ children }) => {
    return(<Red>{children}</Red>)
}

export default RedFont;