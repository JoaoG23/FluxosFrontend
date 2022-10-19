import { useEffect, useState } from "react";

// Components

import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { ContainerStyle, ContainerCards } from "./styles";
import Card from "../../Components/Card";
import DarkButton from "../../Components/Buttons/ButtonDark";

// Services
import urlBase from "../../services/UrlBase";

// Redux
import { Carregador } from "../../Redux/types/carregadorTypes";
import { useDispatch, useSelector } from "react-redux";
import { setAllSubelementos } from "../../Redux/actions/subelementosActions";
import {
  SubelementosDados,
  InfoSubelementos,
} from "../../Redux/types/subelementosTypes";
import Title from "../../Components/Title";
import { Link } from "react-router-dom";
import ModalSucesso from "../../Components/ModalSucesso";
import ModalCarregando from "../../Components/ModalCarregando";

const Subelementos = () => {

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const dispatch = useDispatch();
  const subelementos = useSelector(
    (store: InfoSubelementos) => store?.subelementos?.subelemento
  );

  const isCarregado = useSelector((store: Carregador) => store?.carregador);
  // ---------- Deletar item

  const deleteItemById = async (idItem: any) => {
    try {
      let idEncontrado = idItem.idsubelementos;
      await urlBase.delete(`/admin/subelementos/${idEncontrado}`);

      const filterItensConta: any = subelementos?.filter(
        (dado: any) => dado.idsubelementos !== idItem.idsubelementos
      );
      dispatch(setAllSubelementos(filterItensConta));
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
      },1600)
    } catch (error) {
      console.info(error);
    }
  };
  return (
    <ContainerStyle>
      <div>
        <PrimaryButton>
          <Link to={"/admin/subelementos/add"}>+ Adicionar</Link>
        </PrimaryButton>
      </div>
      <Card>
        <Title>Subelementos de Classificação</Title>
      </Card>
      <ContainerCards>
        {subelementos?.map((subelemento: SubelementosDados) => (
          <Card key={subelemento.idsubelementos}>
            <p>{subelemento.idsubelementos}</p>
            <p>{subelemento.descricao_subelementos}</p>
            <section>
              <DarkButton
                onClick={() => {
                  deleteItemById(subelemento);
                }}
              >
                <img src="./assets/remover.svg"></img>
              </DarkButton>
              <PrimaryButton>
                <Link
                  to={`/admin/subelementos/${
                    subelemento.idsubelementos as Number
                  }`}
                >
                  <img src="./assets/editar.svg"></img>
                </Link>
              </PrimaryButton>
            </section>
          </Card>
        ))}
      </ContainerCards>
      {isSuccess && <ModalSucesso></ModalSucesso>}
      {isCarregado && <ModalCarregando></ModalCarregando>}
    </ContainerStyle>
  );
};

export default Subelementos;
