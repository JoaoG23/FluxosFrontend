import { useEffect } from "react";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { HeaderStyle, ContainerStyle, TableStyle } from "./styles";
import Modal from "../../Components/Modal";
import InputPrimary from "../../Components/Inputs/PrimaryInput";
import DarkButton from "../../Components/Buttons/ButtonDark";
import { InformacoesItemsStore } from "../../Redux/types/fluxoTypes";
import { setTodosItemsFluxoCaixa } from "../../Redux/actions/fluxoActions";
import { useDispatch, useSelector } from "react-redux";
import urlBase from "../../services/UrlBase";

import { Carregador } from "../../Redux/types/carregadorTypes";
import { setIsCarregado } from "../../Redux/actions/carregadorActions";

import {
  setMostrarModal,
  setEsconderModal,
} from "../../Redux/actions/modalActions";

import { DadosItem } from "./types";

const Fluxo = () => {
  const dispatch = useDispatch();

  const dadosItems = useSelector(
    (store: InformacoesItemsStore) => store?.fluxo?.items
  );
  const isCarregado = useSelector((store: Carregador) => store?.carregador);
  const modal = useSelector((store: any) => store?.modal);

  useEffect(() => {
    const loadItemsFluxo = async () => {
      const todosItems = await urlBase.get("/admin/fluxo");

      dispatch(setIsCarregado());
      dispatch(setTodosItemsFluxoCaixa(todosItems.data));
    };
    loadItemsFluxo();
  }, [dispatch]);

  // ---------- Deletar item

  const deleteItemById = async (idItem: DadosItem) => {
    let idEncontrado = idItem.id_item_fluxo;
    const respostaItem = await urlBase.delete(`/admin/fluxo/${idEncontrado}`);

    const filterItensConta: any = dadosItems?.filter( // Eliminar do frontend
      (dado: DadosItem) => dado.id_item_fluxo !== idItem.id_item_fluxo
    );
    dispatch(setTodosItemsFluxoCaixa(filterItensConta));

  };

  // --------- Modal ----
  function mostrarModalAdd() {
    dispatch(setMostrarModal());
  }

  function esconderModalAdd() {
    dispatch(setEsconderModal());
  }

  return (
    <ContainerStyle>
      {modal && (
        <Modal>
          <h2>Adicione um Item</h2>
          
          <InputPrimary type="text" descricaoPlaceholder="Ano"/>
          <InputPrimary type="text" descricaoPlaceholder="Mês"/>
          <InputPrimary type="text" descricaoPlaceholder="Dia"/>
          <InputPrimary type="text" descricaoPlaceholder="Elementos" />
          <InputPrimary type="text" descricaoPlaceholder="Subelementos" />
          <InputPrimary type="text" descricaoPlaceholder="Tipos" />
          <InputPrimary type="text" descricaoPlaceholder="Subtipos" />
          <InputPrimary type="text" descricaoPlaceholder="Minitipos" />
          <InputPrimary type="text" descricaoPlaceholder="Nanotipos" />
          <InputPrimary type="text" descricaoPlaceholder="descricão do Item" />

          <PrimaryButton>+ Adicionar</PrimaryButton>
          <DarkButton onClick={esconderModalAdd}>X</DarkButton>
        </Modal>
      )}
      <HeaderStyle>
        <h2>Fluxo de Caixa</h2>
        <div>
          <PrimaryButton onClick={mostrarModalAdd}>+ adicionar</PrimaryButton>
        </div>
      </HeaderStyle>
      <TableStyle>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dia</th>
            <th>Mês</th>
            <th>Ano</th>
            <th>Hora</th>
            <th>Elementos</th>
            <th>Subelementos</th>
            <th>Tipos</th>
            <th>Subtipos</th>
            <th>Minitipos</th>
            <th>Nanotipos</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Saldo</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>

        <tbody>
          {isCarregado && <p>Carregando ...</p>}
          {dadosItems?.map((item: DadosItem) => (
            <tr key={item.id_item_fluxo}>
              <td>{item.id_item_fluxo}</td>
              <td>{item.dia_item_fluxo}</td>
              <td>{item.mes_item_fluxo}</td>
              <td>{item.ano_item_fluxo}</td>
              <td>{item.hora_item_fluxo}</td>
              <td>{item.descricao_elementos}</td>
              <td>{item.descricao_subelementos}</td>
              <td>{item.descricao_tipos}</td>
              <td>{item.descricao_subtipos}</td>
              <td>{item.descricao_minitipos}</td>
              <td>{item.descricao_nanotipos}</td>
              <td>{item.descricao_item_fluxo} </td>
              <td>{item.valor_item_fluxo} R$</td>
              <td>{item.saldo_atual} R$</td>
              <td>
                <PrimaryButton>
                  <img src="./assets/editarpequeno.svg" alt="editar"></img>
                </PrimaryButton>
              </td>
              <td>
                <DarkButton
                  onClick={() => {
                    deleteItemById(item);
                  }}
                >
                  X
                </DarkButton>
              </td>
            </tr>
          ))}
        </tbody>
      </TableStyle>
    </ContainerStyle>
  );
};

export default Fluxo;
