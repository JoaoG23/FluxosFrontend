import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// Services
import urlBase from "../../services/UrlBase";
// Components
import { ModalStyle, ModalBackgroundStyle, Form, Input } from "./styles";
import DarkButton from "../Buttons/ButtonDark";
import PrimaryButton from "../Buttons/PrimaryButton";
import RedFont from "../RedFont";
import GreenFont from "../GreenFont";

// Redux 
import { ModalStore } from "../../Redux/types/modalTypes";
import { setEsconderModal } from "../../Redux/actions/modalActions";
import { useDispatch , useSelector} from "react-redux";



type Props = {
  children?: JSX.Element[] | JSX.Element;
  pathApi: string;
  nomeElemento: string;
};


const ModalAdd: React.FC<Props> = ({ pathApi, nomeElemento }) => {
  const modalState = useSelector((store: ModalStore) => store?.modal);
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
      dispatch(setEsconderModal());
  }
  

  const adicionar = async (body: object) => {
    setIsLoading(true);
    try {
      const respostaAdicionar = await urlBase.post(pathApi, body);
      setResponse(respostaAdicionar.data);
      setTimeout(() => {
        desapareceModal();
        navigate('/admin/dash')
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
            <Form
              onSubmit={handleSubmit(
                async (data: object) => await adicionar(data)
              )}
            >
              <b>Descricao</b>
              <Input
                type="text"
                {...register(nomeElemento, { required: true })}
              />
              {errors.nome_elementos?.type === "required" && (
                <RedFont>Campo vazio. Por gentileza prencher-o!</RedFont>
              )}
              <DarkButton>Salvar</DarkButton>
            </Form>
            {response && <GreenFont>{response?.msg}</GreenFont>}
            {isLoading && <h3>Carregando ...</h3>}
            {error && <RedFont>{error?.response?.data?.msg}</RedFont>}
            <PrimaryButton onClick={desapareceModal}>❌</PrimaryButton>
          </ModalStyle>
        </ModalBackgroundStyle>
      )}
    </>
  );
};

export default ModalAdd;
