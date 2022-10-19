import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ContainerCards, ContainerStyle } from "./styles";
import ModalQuestionamento from "../../Components/ModalQuestionamento";
import InputPrimary from "../../Components/Inputs/PrimaryInput";
import DarkButton from "../../Components/Buttons/ButtonDark";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Card from "../../Components/Card";
import ModalCarregando from "../../Components/ModalCarregando";
import Title from "../../Components/Title";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { Carregador } from "../../Redux/types/carregadorTypes";
import { TiposDados, InfoTipos } from "../../Redux/types/tiposTypes";
import { setAllTipos } from "../../Redux/actions/tiposActions";

// Services
import urlBase from "../../services/UrlBase";
import ModalSucesso from "../../Components/ModalSucesso";

const Tipos = () => {
  const dispatch = useDispatch();
  const tipos = useSelector((store: InfoTipos) => store?.tipos?.tipo);

  const isCarregado = useSelector((store: Carregador) => store?.carregador);
  const [modalQuestionamento, setModalQuestionamento] = useState(false);
  const [deleted, setDeleted] = useState({})
  const [responseSucesso, setResponseSucesso] = useState<any | null>(null);
  // ---------- Deletar item

  const deleteItemById = async (idItem: any) => {
    try {
      let idEncontrado = idItem.id_tipos;
      const deletado = await urlBase.delete(`/admin/tipos/${idEncontrado}`);

      const filterItensConta: any = tipos?.filter(
        (dado: any) => dado.id_tipos !== idItem.id_tipos
      );
      dispatch(setAllTipos(filterItensConta));
      setResponseSucesso(deletado.data);
    } catch (error) {
      console.info(error);
    }
  };


  return (
    <ContainerStyle>
      <div>
        <PrimaryButton>
          <Link to={"/admin/tipos/add"}>+ Adicionar</Link>
        </PrimaryButton>
      </div>
      <Card>
        <Title>Tipos de Classificação</Title>
      </Card>
      <ContainerCards>
        {tipos?.map((tipo: TiposDados) => (
          <Card key={tipo.id_tipos}>
            <p>{tipo.id_tipos}</p>
            <p>{tipo.descricao_tipos}</p>
            <section>
              <DarkButton
                onClick={() => {
                  // Envia o item a ser deletar
                  setModalQuestionamento(true);
                  setDeleted(tipo);
                  // deleteItemById(tipo);
                }}
              >
                <img src="./assets/remover.svg" alt="remover"></img>
              </DarkButton>
              <PrimaryButton>
                <img src="./assets/editar.svg" alt="editar"></img>
              </PrimaryButton>
            </section>
          </Card>
        ))}
      {modalQuestionamento && (
        <ModalQuestionamento>
          <div>
            <DarkButton onClick={() => {
              setModalQuestionamento(false);
              deleteItemById(deleted);

              setTimeout(() => {
                setResponseSucesso(null)
              }, 2400);
            }}>Sim</DarkButton>
            <PrimaryButton onClick={() => setModalQuestionamento(false)}>Não</PrimaryButton>
          </div>
        </ModalQuestionamento>
      )}
      { responseSucesso && <ModalSucesso>
        <p>{responseSucesso?.msg}</p>
        </ModalSucesso>}
      </ContainerCards>
      {isCarregado && <ModalCarregando />}
    </ContainerStyle>
  );
};

export default Tipos;
