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

import { setAllMinitipos } from "../../Redux/actions/minitiposActions";
import { MinitiposDados,InfoMinitipos  } from "../../Redux/types/minitiposTypes";
import Card from "../../Components/Card";

const Minitipos = () => {
  const dispatch = useDispatch();
  const minitipos = useSelector((store:InfoMinitipos) => store?.minitipos?.minitipo);

  const isCarregado = useSelector((store: Carregador) => store?.carregador);

  useEffect(() => {
    const getAll = async () => {
      const todosItems = await urlBase.get("/admin/minitipos");
      console.info(todosItems);
      dispatch(setIsCarregado());
      dispatch(setAllMinitipos(todosItems.data));
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
      {minitipos?.map((subtipo: MinitiposDados) => (
        <Card key={subtipo.id_minitipos}>
          <p>{subtipo.id_minitipos}</p>
          <h3>{subtipo.descricao_minitipos}</h3>
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

export default Minitipos;
