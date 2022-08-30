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

import { setAllNanotipos } from "../../Redux/actions/nanotiposActions";
// import { setAllMinitipos } from "../../Redux/actions/minitiposActions";
import { NanotiposDados , InfoNanotipos } from "../../Redux/types/nanotiposTypes";
import Card from "../../Components/Card";

const Nanotipos = () => {
  const dispatch = useDispatch();
  const nanotipos = useSelector((store:InfoNanotipos) => store?.nanotipos?.nanotipo);

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
  const [showModaladd, setShowModaladd] = useState(false);
  const mostrarModalAdd = () => setShowModaladd(true);
  const esconderModalAdd = () => setShowModaladd(false);

  return (
    <ContainerStyle>
      {nanotipos?.map((subtipo: NanotiposDados) => (
        <Card key={subtipo.id_nanotipos}>
          <p>{subtipo.id_nanotipos}</p>
          <p>{subtipo.descricao_nanotipos}</p>
          <div>
            <DarkButton>
              <img src="./assets/removerpequeno.svg" alt="remover"></img>
            </DarkButton>
            <PrimaryButton>
              <img src="./assets/editarpequeno.svg" alt="editar"></img>
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

export default Nanotipos;
