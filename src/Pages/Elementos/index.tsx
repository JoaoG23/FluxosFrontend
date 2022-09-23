import { useState } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { ContainerStyle, Div } from "./styles";
import ModalAdd from "../../Components/ModalAdd";
import DarkButton from "../../Components/Buttons/ButtonDark";
import { useDispatch, useSelector } from "react-redux";
import { setMostrarModal } from "../../Redux/actions/modalActions";

import { Carregador } from "../../Redux/types/carregadorTypes";

import {
  InfoElementos,
  ElementosDados,
} from "../../Redux/types/elementosTypes";
import Card from "../../Components/Card";
import { ModalStore } from "../../Redux/types/modalTypes";
const Elementos = () => {
  const dispatch = useDispatch();
  const elementos = useSelector(
    (store: InfoElementos) => store?.elementos?.elemento
  );

  const modalState = useSelector((store: ModalStore) => store?.modal);

  const isCarregado = useSelector((store: Carregador) => store?.carregador);

  // ---------- Deletar item

  // const deleteItemById = async (idItem: DadosItem) => {
  //   let idEncontrado = idItem.id_item_fluxo;
  //   const respostaItem = await urlBase.delete(`/admin/fluxo/${idEncontrado}`);

  //   const filterItensConta: any = dadosItems?.filter(
  //     (dado: DadosItem) => dado.id_item_fluxo !== idItem.id_item_fluxo
  //   );
  //   dispatch(setTodosItemsFluxoCaixa(filterItensConta));

  // };

  // --------- Modal ----
  const mostrarModalAdd = () => dispatch(setMostrarModal());

  console.log(modalState);
  return (
      <ContainerStyle>
        <PrimaryButton onClick={mostrarModalAdd}>+ Adicionar</PrimaryButton>
        {elementos?.map((elemento: ElementosDados) => (
          <Card key={elemento.idelementos}>
            <p>{elemento.idelementos}</p>
            <p>{elemento.descricao_elementos}</p>
            <section>
              <DarkButton>
                <img src="./assets/remover.svg"></img>
              </DarkButton>
              <PrimaryButton>
                <img src="./assets/editar.svg"></img>
              </PrimaryButton>
            </section>
          </Card>
        ))}
        {modalState && <ModalAdd pathApi="/admin/elementos" nomeElemento='nome_elementos'></ModalAdd>}
        {isCarregado && <h2>Carregando ...</h2>}
      </ContainerStyle>
  );
};

export default Elementos;
