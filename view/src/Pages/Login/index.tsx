import { Form,Container, HiperLink, Title } from './styles'; 
import Input from '../../Components/Inputs/PrimaryInput';
import PrimaryButton from '../../Components/Buttons/ButtonDark';
import ContainerBottons from '../../Components/ContainerButtons';
import SecondaryButton from '../../Components/Buttons/PrimaryButton';
const Login = () => {

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);
  
    // useEffect(() => {
    //   fetch("https://api.example.com/items")
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         setIsLoaded(true);
    //         setItems(result);
    //       },
    //       (error) => {
    //         setIsLoaded(true);
    //         setError(error);
    //       }
    //     )
    // }, [])
  
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    //   return (
    //     <ul>
    //       {items.map(item => (
    //         <li key={item.id}>
    //           {item.name} {item.price}
    //         </li>
    //       ))}
    //     </ul>
    //   );
    // }
  

  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <Input type='text' descricaoPlaceholder={'Login'}/>
        <Input type='password' descricaoPlaceholder={'Senha'}/>
        <ContainerBottons>
          <PrimaryButton>Logar</PrimaryButton>
          <SecondaryButton>Registrar</SecondaryButton>
        </ContainerBottons>
          <HiperLink href='./senhaesquecida'>Esqueci minha senha </HiperLink>
        </Form>
    </Container>
  );
}

export default Login;
