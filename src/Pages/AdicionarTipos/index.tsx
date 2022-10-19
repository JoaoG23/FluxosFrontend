import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// Components
import RedBadge from "../../Components/Badges/RedBadge";
import GreenBadge from "../../Components/Badges/GreenBadge";
import { ContainerStyle, Form, Input } from "./styles";
import Card from "../../Components/Card";
import ModalCarregando from "../../Components/ModalCarregando";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Title from "../../Components/Title";

// Services
import urlBase from "../../services/UrlBase";

// Redux

const AdicionarTipos:React.FC = () => {
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
      const respostaAdicionar = await urlBase.post("/admin/tipos", body);
      setResponse(respostaAdicionar.data);
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


  return (
    <ContainerStyle>
      <Card>
        <Title>
          <>Adicionar Tipos</>
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
            {...register("nome_tipos", { required: true })}
          />
          {errors.nome_tipos?.type === "required" && (
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

export default AdicionarTipos;
