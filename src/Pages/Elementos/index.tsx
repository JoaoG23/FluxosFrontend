import react, { useState } from "react";
// Components
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { ContainerStyle, ContainerCards } from "./styles";
import DarkButton from "../../Components/Buttons/ButtonDark";
import Card from "../../Components/Card";

// Services
import urlBase from "../../services/UrlBase";

// Redux
import {
  InfoElementos,
  ElementosDados,
} from "../../Redux/types/elementosTypes";
import { useDispatch, useSelector } from "react-redux";
import { Carregador } from "../../Redux/types/carregadorTypes";
import { AddModalStore, EditModalStore } from "../../Redux/types/modalTypes";
import { setAllElementos } from "../../Redux/actions/elementosActions";
import { Link, useNavigate } from "react-router-dom";
import Title from "../../Components/Title";

const Elementos = () => {
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const elementos = useSelector(
    (store: InfoElementos) => store?.elementos?.elemento
  );

  const modalStateAdd = useSelector((store: AddModalStore) => store?.addModal);
  const modalStateEdit = useSelector(
    (store: EditModalStore) => store?.editModal
  );

  const isCarregado = useSelector((store: Carregador) => store?.carregador);

  // ---------- Deletar item

  const deleteItemById = async (idItem: any) => {
    try {
      let idEncontrado = idItem.idelementos;
      await urlBase.delete(`/admin/elementos/${idEncontrado}`);

      const filterItensConta: any = elementos?.filter(
        (dado: any) => dado.idelementos !== idItem.idelementos
      );
      dispatch(setAllElementos(filterItensConta));
    } catch (error) {
      console.info(error);
    }
  };

  // --------- Modal ----

  return (
    <ContainerStyle>
      <div>
        <PrimaryButton><Link to={'/admin/elementos/add'}>+ Adicionar</Link></PrimaryButton>
      </div>
      <Card>
        <Title>Elementos de Classificação</Title>
      </Card>
      <ContainerCards>
        {elementos?.map((elemento: ElementosDados) => (
          <Card key={elemento.idelementos}>
            <p>{elemento.idelementos}</p>
            <p>{elemento.descricao_elementos}</p>
            <section>
              <DarkButton
                onClick={() => {
                  deleteItemById(elemento);
                }}
              >
                <img src="./assets/remover.svg"></img>
              </DarkButton>
              <PrimaryButton>
                <Link to={`/admin/elementos/${elemento.idelementos as Number}`}>

                <img src="./assets/editar.svg"></img>
                </Link>
              </PrimaryButton>
            </section>
          </Card>
        ))}
      </ContainerCards>
      {isCarregado && <h2>Carregando ...</h2>}
    </ContainerStyle>
  );
};

export default Elementos;
