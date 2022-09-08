
import { Red }  from './styles';
type RedChildres = {
    children?:any;
}
const RedFont:React.FC<RedChildres> = ({ children }) => {
    return(<Red>{children}</Red>)
}

export default RedFont;