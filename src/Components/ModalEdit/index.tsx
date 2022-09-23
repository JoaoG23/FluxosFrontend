import React, { useState } from "react";
import { ModalStyle, ModalBackgroundStyle, Form, Input } from "./styles";
import { useForm } from "react-hook-form";
import urlBase from "../../services/UrlBase";
import DarkButton from "../Buttons/ButtonDark";
import PrimaryButton from "../Buttons/PrimaryButton";
import RedFont from "../RedFont";
import { useSelector } from "react-redux";
import { ModalStore } from "../../Redux/types/modalTypes";
import { setEsconderModal } from "../../Redux/actions/modalActions";
import { useDispatch } from "react-redux";
import GreenFont from "../GreenFont";


type Props = {
  children?: JSX.Element[] | JSX.Element;
  pathApi: string;
  nomeElemento:string;
};

const EditModal: React.FC<Props> = ({ pathApi, nomeElemento }) => {
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

  function desapareceModal() {
    dispatch(setEsconderModal());
  }

  const adicionar = async (body: object) => {
    setIsLoading(true);
    try {
      const respostaAdicionar = await urlBase.post(pathApi, body);
      setResponse(respostaAdicionar.data);
      desapareceModal();
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

export default EditModal;
