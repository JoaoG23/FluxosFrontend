import React, { useState } from "react";
import { useForm } from "react-hook-form";
// Components
import DarkButton from "../Buttons/ButtonDark";
import PrimaryButton from "../Buttons/PrimaryButton";
import GreenBadge from '../Badges/GreenBadge';
import RedBadge from '../Badges/RedBadge';
import { ModalStyle, ModalBackgroundStyle, Form, Input } from "./styles";

// Services
import urlBase from "../../services/UrlBase";

// Redux
import { useDispatch , useSelector } from "react-redux";
import { EditModalStore } from "../../Redux/types/modalTypes";
import { setEsconderEditModal } from "../../Redux/actions/modalActions/editModal";
import { useNavigate } from "react-router-dom";


type Props = {
  children?: JSX.Element[] | JSX.Element;
  pathApi: string;
  nomeElemento:string;
};

const EditModal: React.FC<Props> = ({ pathApi, nomeElemento }) => {
  const modalState = useSelector((store: EditModalStore) => store?.editModal);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState<any | null>(null);
  const [response, setResponse] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function desapareceModal() {
    dispatch(setEsconderEditModal());
  }

  const editar = async (body: object) => {
    setIsLoading(true);
    try {
      const editando = await urlBase.put(pathApi, body);
      setResponse(editando.data);
      setTimeout(() => {
        desapareceModal();
        navigate('/admin/dash');
      },2000)
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {modalState && (
        <ModalBackgroundStyle>
          <ModalStyle>
            <h1>Editar</h1>
            <Form
              onSubmit={handleSubmit(
                async (data: object) => await editar(data)
              )}
            >
              <b>Descrição</b>
              <Input placeholder="Digite aqui o nome da sua classificação"
                type="text"
                {...register(nomeElemento, { required: true })}
              />
              {errors.nome_elementos?.type === "required" && (
                <RedBadge>Campo vazio. Por gentileza prencher-o!</RedBadge>
              )}
              <DarkButton>Salvar</DarkButton>
            </Form>
            {response && <GreenBadge>{response?.msg}</GreenBadge>}
            {isLoading && <h3>Carregando ...</h3>}
            {error && <RedBadge>{error?.response?.data?.msg}</RedBadge>}
            <PrimaryButton onClick={desapareceModal}> &#10006; </PrimaryButton>
          </ModalStyle>
        </ModalBackgroundStyle>
      )}
    </>
  );
};

export default EditModal;
