import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components

import DarkButton from "../../../Components/Buttons/ButtonDark";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import Card from "../../../Components/Card";
import { ContainerStyle, GroupBtnStyle } from "../styles";
import AlertaDanger from "../../../Components/Alerta/AlertaDanger";
import AlertaSuccess from "../../../Components/Alerta/AlertaSuccess";
// Services
import urlBase from "../../../services/UrlBase";

// Redux
import { setIsCarregado } from "../../../Redux/actions/carregadorActions";
import { Carregador } from "../../../Redux/types/carregadorTypes";

// Types of the Component Main
import { RespostaServidor } from "../../../Types/RespostaServidor";
import { Usuario } from "../../../Types/UsuariosTipos/Usuario";

const ListaTodos: React.FC = () => {
  const isCarregado = useSelector((store: Carregador) => store?.carregador);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const toEdit = (id: number | string) => {
    navigate(`/admin/usuarios/${id}`);
  };

  const [respostaServer, setRespostaServer] = useState<RespostaServidor>({});
  const [showModalserver, setShowModalserver] = useState<boolean>(false);

  const [usuarios, setUsuario] = useState<Usuario[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const buscaTodosUsuarios = async () => {
      try {
        const todosUsuarios = await urlBase.get("/admin/usuario");
        dispatch(setIsCarregado());
        console.info(todosUsuarios.data);
        setUsuario(todosUsuarios.data);
      } catch (error) {
        setError(error as Error);
        console.error(error);
      }
    };
    buscaTodosUsuarios();
  }, []);

  const mostrarModalServer = (time: number) => {
    setShowModalserver(true);
    setTimeout(() => {
      setShowModalserver(false);
    }, time);
  };

  const deleteItemById = async (usuario: Usuario) => {
    let idEncontrado = usuario.id_login;
    const resposta = await urlBase.delete(`/admin/usuario/${idEncontrado}`);
    setRespostaServer(resposta.data);
    mostrarModalServer(2000);

    const filterUsuarios: any = usuarios?.filter(
      // Eliminar do frontend
      (dado: Usuario) => dado.id_login !== usuario.id_login
    );
    setUsuario(filterUsuarios);
  };

  return (
    <ContainerStyle>
      {isCarregado && <p>Carregando ...</p>}
      <div>
        <DarkButton>
          <Link to={"/admin/adicionarusuario"}>+ Adicionar</Link>
        </DarkButton>
      </div>

      {usuarios?.map((usuario: Usuario) => (
        <Card key={usuario.id_login}>
            <img  src="./assets/perfil.svg" alt="perfil"></img>
          <h4>{usuario.nome_login}</h4>
          <p>Administador : {usuario.isadmin_login ? "Sim" : "Não"}</p>
          <GroupBtnStyle>
            <PrimaryButton onClick={() => toEdit(usuario.id_login as number)}>
              <img src="./assets/editar.svg" alt="editar"></img>
            </PrimaryButton>
            <DarkButton
              onClick={() => {
                deleteItemById(usuario);
              }}
            >
              <img src="./assets/remover.svg" alt="remover"></img>
            </DarkButton>
          </GroupBtnStyle>
        </Card>
      ))}
      {showModalserver && (
        <AlertaSuccess>
          <h3>{respostaServer?.msg}</h3>
        </AlertaSuccess>
      )}

      {error && <AlertaDanger>{error?.message}</AlertaDanger>}
    </ContainerStyle>
  );
};
export default ListaTodos;
