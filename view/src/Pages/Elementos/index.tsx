import { useEffect, useState } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { ContainerStyle } from "./styles";
import Modal from "../../Components/Modal";
import InputPrimary from "../../Components/Inputs/PrimaryInput";
import DarkButton from "../../Components/Buttons/ButtonDark";
import { useDispatch, useSelector } from "react-redux";
import urlBase from "../../services/UrlBase";

import { Carregador } from "../../Redux/types/carregadorTypes";
import { setIsCarregado } from "../../Redux/actions/carregadorActions";

import { setAllElementos } from "../../Redux/actions/elementosActions";

import {
  InfoElementos,
  ElementosDados,
} from "../../Redux/types/elementosTypes";
import Card from "../../Components/Card";

const Elementos = () => {
  const dispatch = useDispatch();
  const elementos = useSelector(
    (store: InfoElementos) => store?.elementos?.elemento
  );

  const isCarregado = useSelector((store: Carregador) => store?.carregador);

  useEffect(() => {
    const getAll = async () => {
      const todosItems = await urlBase.get("/admin/elementos");
      dispatch(setIsCarregado());
      dispatch(setAllElementos(todosItems.data));
    };
    getAll();
  }, [dispatch]);

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
  const [showModaladd, setShowModaladd] = useState(false);
  const mostrarModalAdd = () => setShowModaladd(true);
  const esconderModalAdd = () => setShowModaladd(false);

  return (
    <ContainerStyle>
      {elementos?.map((elemento: ElementosDados) => (
        <Card key={elemento.idelementos}>
          <h4>{elemento.idelementos}</h4>
          <h4>{elemento.descricao_elementos}</h4>
          <div>
            <DarkButton>
              <img src="./assets/remover.svg"></img>
            </DarkButton>
            <PrimaryButton>
              <img src="./assets/editar.svg"></img>
            </PrimaryButton>
          </div>
        </Card>
      ))}
      {showModaladd && (
        <Modal>
          <h2>Adicione um Item</h2>

          <InputPrimary type="text" descricaoPlaceholder="Ano" />
          <InputPrimary type="text" descricaoPlaceholder="Mês" />

          <PrimaryButton>+ Adicionar</PrimaryButton>
          <DarkButton onClick={esconderModalAdd}>X</DarkButton>
        </Modal>
      )}
        {isCarregado && <h2>Carregando ...</h2>}
    </ContainerStyle>
  );
};

export default Elementos;