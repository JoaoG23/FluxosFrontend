import React, { useState } from "react";
import Card from "../../Components/Card";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { HeaderStyle, ContainerStyle, TableStyle } from "./styles";
import Modal from "../../Components/Modal";
import InputPrimary from "../../Components/Inputs/PrimaryInput";
import DarkButton from "../../Components/Buttons/ButtonDark";
const Fluxo = () => {
  const [showModal, setShowModal] = useState(false);

  function mostrarModalAdd() {
    setShowModal(true);
  }
  
  function esconderModalAdd() {
    setShowModal(false);
  }
  return (
    <ContainerStyle>
      { showModal &&
        <Modal>
          <h3>Adicione um Item</h3>
          <InputPrimary type="text" descricaoPlaceholder="Ano"></InputPrimary>
          <InputPrimary type="text" descricaoPlaceholder="Mês"></InputPrimary>
          <InputPrimary type="text" descricaoPlaceholder="Dia"></InputPrimary>
          <InputPrimary
            type="text"
            descricaoPlaceholder="Elementos"
          ></InputPrimary>
          <InputPrimary
            type="text"
            descricaoPlaceholder="Subelementos"
          ></InputPrimary>
          <InputPrimary type="text" descricaoPlaceholder="Tipos"></InputPrimary>
          <InputPrimary
            type="text"
            descricaoPlaceholder="Subtipos"
          ></InputPrimary>
          <InputPrimary
            type="text"
            descricaoPlaceholder="Minitipos"
          ></InputPrimary>
          <InputPrimary
            type="text"
            descricaoPlaceholder="Nanotipos"
          ></InputPrimary>

          <PrimaryButton>+ Adicionar</PrimaryButton>
          <DarkButton onClick={esconderModalAdd}>X</DarkButton>
        </Modal>
      }
      <HeaderStyle>
        <h2>Fluxo de Caixa</h2>
        <div>
          <PrimaryButton onClick={mostrarModalAdd}>+ adicionar</PrimaryButton>
        </div>
      </HeaderStyle>
      <TableStyle>
        <tr>
          <th>ID</th>
          <th>Ano</th>
          <th>Mês</th>
          <th>Dia</th>
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
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </TableStyle>
    </ContainerStyle>
  );
};

export default Fluxo;
