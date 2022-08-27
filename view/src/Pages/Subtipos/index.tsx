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

import { setAllSubtipos } from "../../Redux/actions/subtiposActions";
import { SubtiposDados,InfoSubtipos } from "../../Redux/types/subtiposTypes";
import Card from "../../Components/Card";

const Subtipos = () => {
  const dispatch = useDispatch();
  const subtipos = useSelector((store:InfoSubtipos) => store?.subtipos?.subtipo);

  const isCarregado = useSelector((store: Carregador) => store?.carregador);

  useEffect(() => {
    const getAll = async () => {
      const todosItems = await urlBase.get("/admin/subtipos");
      dispatch(setIsCarregado());
      dispatch(setAllSubtipos(todosItems.data));
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
      {subtipos?.map((subtipo: SubtiposDados) => (
        <Card key={subtipo.idsubtipos}>
          <p>{subtipo.idsubtipos}</p>
          <p>{subtipo.descricao_subtipos}</p>
          <div>
            <DarkButton>
              <img src="./assets/remover.svg" alt="remover"></img>
            </DarkButton>
            <PrimaryButton>
              <img src="./assets/editar.svg" alt="editar"></img>
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

export default Subtipos;
