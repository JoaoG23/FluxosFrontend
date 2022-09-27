import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// Services
import urlBase from "../../services/UrlBase";
// Components
import { ModalStyle, ModalBackgroundStyle, Form, Input } from "./styles";
import DarkButton from "../Buttons/ButtonDark";
import PrimaryButton from "../Buttons/PrimaryButton";
import GreenBadge from '../Badges/GreenBadge';
import RedBadge from '../Badges/RedBadge';

// Redux 
import { AddModalStore } from "../../Redux/types/modalTypes";
import { setEsconderAddModal } from "../../Redux/actions/modalActions/addModal";
import { useDispatch , useSelector} from "react-redux";



type Props = {
  children?: JSX.Element[] | JSX.Element;
  pathApi: string;
  nomeElemento: string;
};


const ModalAdd: React.FC<Props> = ({ pathApi, nomeElemento }) => {
  const modalState = useSelector((store: AddModalStore) => store?.addModal);
  const dispatch = useDispatch();
  const [error, setError] = useState<any | null>(null);
  const [response, setResponse] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const navigate = useNavigate();
  function desapareceModal() {
      dispatch(setEsconderAddModal());
  }
  

  const adicionar = async (body: object) => {
    setIsLoading(true);
    try {
      const respostaAdicionar = await urlBase.post(pathApi, body);
      setResponse(respostaAdicionar.data);
      setTimeout(() => {
        desapareceModal();
        navigate('/admin/dash');
      }, 2000);
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
            <h1>Adicionar</h1>
            <Form
              onSubmit={handleSubmit(
                async (data: object) => await adicionar(data)
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

export default ModalAdd;
