import react, { useState } from "react";
import { useForm } from "react-hook-form";
// Components
import DarkButton from "../../Components/Buttons/ButtonDark";
import RedBadge from "../../Components/Badges/RedBadge";
import GreenBadge from "../../Components/Badges/GreenBadge";
import { ContainerStyle, Form, Input } from "./styles";
import Card from "../../Components/Card";

// Services
import urlBase from "../../services/UrlBase";
import Title from "../../Components/Title";

// Redux
import { InfoElementos } from "../../Redux/types/elementosTypes";
import { useDispatch, useSelector } from "react-redux";
import { Carregador } from "../../Redux/types/carregadorTypes";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import React from "react";
import ModalCarregando from "../../Components/ModalCarregando";

const AdicionarSublementos:React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<any | null>(null);
  const [response, setResponse] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const adicionar = async (body: object) => {
    setIsLoading(true);
    try {
      const respostaAdicionar = await urlBase.post("/admin/subelementos", body);
      setResponse(respostaAdicionar.data.inserirRegistro);
      setTimeout(() => {
        navigate("/admin/dash");
      }, 2000);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const isCarregado = useSelector((store: Carregador) => store?.carregador);

  return (
    <ContainerStyle>
      <Card>
        <Title>
          <>Adicionar Subelementos</>
        </Title>
      </Card>
      <Card>
        <Form

          onSubmit={handleSubmit(async (data: object) => await adicionar(data))}
        >
          <h2>Descrição</h2>
          <Input
            placeholder="Digite aqui o nome da sua classificação"
            type="text"
            {...register("nome_subelemento", { required: true })}
          />
          {errors.nome_subelemento?.type === "required" && (
            <RedBadge>Campo vazio. Por gentileza prencher-o!</RedBadge>
          )}
          <PrimaryButton>Salvar</PrimaryButton>
          {response && <GreenBadge>{response?.msg}</GreenBadge>}
          {isLoading && <ModalCarregando></ModalCarregando>}
          {error && <RedBadge>{error?.response?.data?.msg}</RedBadge>}
        </Form>
      </Card>
    </ContainerStyle>
  );
};

export default AdicionarSublementos;
