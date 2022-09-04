import {  useState } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { ContainerStyle } from "./styles";
import Modal from "../../Components/Modal";
import InputPrimary from "../../Components/Inputs/PrimaryInput";
import DarkButton from "../../Components/Buttons/ButtonDark";
import {  useSelector } from "react-redux";

import { Carregador } from "../../Redux/types/carregadorTypes";
import { SubtiposDados,InfoSubtipos } from "../../Redux/types/subtiposTypes";
import Card from "../../Components/Card";

const Subtipos = () => {
  // const dispatch = useDispatch();
  const subtipos = useSelector((store:InfoSubtipos) => store?.subtipos?.subtipo);

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
  const esconderModalAdd = () => setShowModaladd(false);

  return (
    <ContainerStyle>
      {subtipos?.map((subtipo: SubtiposDados) => (
        <Card key={subtipo.idsubtipos}>
          <p>{subtipo.idsubtipos}</p>
          <p>{subtipo.descricao_subtipos}</p>
          <section>
            <DarkButton>
              <img src="./assets/remover.svg" alt="remover"></img>
            </DarkButton>
            <PrimaryButton>
              <img src="./assets/editar.svg" alt="editar"></img>
            </PrimaryButton>
          </section>
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
