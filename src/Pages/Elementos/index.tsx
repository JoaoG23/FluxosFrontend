import react ,{ useState }from 'react'
// Components
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { ContainerStyle } from "./styles";
import ModalAdd from "../../Components/ModalAdd";
import ModalEdit from '../../Components/ModalEdit';
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
import { setMostrarAddModal } from "../../Redux/actions/modalActions/addModal";
import { Carregador } from "../../Redux/types/carregadorTypes";
import { AddModalStore, EditModalStore } from "../../Redux/types/modalTypes";
import { setMostrarEditModal } from "../../Redux/actions/modalActions/editModal";
import { setAllElementos } from "../../Redux/actions/elementosActions";

const Elementos = () => {
  const [idParaUpdate, setIdParaUpdate] = useState<number | string>('')
  const dispatch = useDispatch();
  const elementos = useSelector(
    (store: InfoElementos) => store?.elementos?.elemento
  );


  const modalStateAdd = useSelector((store: AddModalStore) => store?.addModal);
  const modalStateEdit = useSelector((store: EditModalStore) => store?.editModal);

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
      console.info(error)
    }

  };

  // --------- Modal ----
  const mostrarModalAdd = () => dispatch(setMostrarAddModal());
  const mostrarModalEdit = () => dispatch(setMostrarEditModal());

  return (
      <ContainerStyle>
        <PrimaryButton onClick={mostrarModalAdd}>+ Adicionar</PrimaryButton>
        {elementos?.map((elemento: ElementosDados) => (
          <Card key={elemento.idelementos}>
            <p>{elemento.idelementos}</p>
            <p>{elemento.descricao_elementos}</p>
            <section>
              <DarkButton onClick={() => {
                deleteItemById(elemento)
              }}>
                <img src="./assets/remover.svg"></img>
              </DarkButton>
              <PrimaryButton onClick={() => {
                let elementoSelecionado = elemento.idelementos as number;
                setIdParaUpdate(elementoSelecionado);
                mostrarModalEdit();
                }}>
                <img src="./assets/editar.svg"></img>
              </PrimaryButton>
            </section>
          </Card>
        ))}

        
        {modalStateAdd && <ModalAdd pathApi="/admin/elementos" nomeElemento='nome_elementos'></ModalAdd>}
        {modalStateEdit && (<ModalEdit pathApi={`/admin/elementos/${idParaUpdate}`} nomeElemento='nome_elementos'></ModalEdit>)}
        {isCarregado && <h2>Carregando ...</h2>}
      </ContainerStyle>
  );
};

export default Elementos;
