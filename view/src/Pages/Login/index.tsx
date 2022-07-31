import { Form,Container, HiperLink, Title } from './styles'; 
import Input from '../../Components/Input';
import PrimaryButton from '../../Components/Buttons/ButtonDark';
import ContainerBottons from '../../Components/ContainerButtons';
import SecondaryButton from '../../Components/Buttons/PrimaryButton';
const Login = () => {
  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <Input descricaoPlaceholder={'Login'}/>
        <Input descricaoPlaceholder={'Senha'}/>
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
