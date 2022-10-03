import { useEffect, useState } from "react";

// Components

import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { ContainerStyle , ContainerCards } from "./styles";
import Card from "../../Components/Card";
import DarkButton from "../../Components/Buttons/ButtonDark";

// Services 
import urlBase from "../../services/UrlBase";

// Redux
import { Carregador } from "../../Redux/types/carregadorTypes";
import { useDispatch, useSelector } from "react-redux";
import { setIsCarregado } from "../../Redux/actions/carregadorActions";
import { setAllSubelementos } from "../../Redux/actions/subelementosActions";
import {
  SubelementosDados,
  InfoSubelementos,
} from "../../Redux/types/subelementosTypes";

const Subelementos = () => {

  const dispatch = useDispatch();
  const subelementos = useSelector(
    (store: InfoSubelementos) => store?.subelementos?.subelemento
  );

  const isCarregado = useSelector((store: Carregador) => store?.carregador);
  // ---------- Deletar item

  const deleteItemById = async (idItem: any) => {
    try {
      let idEncontrado = idItem.idsubelementos;
      await urlBase.delete(`/admin/subelementos/${idEncontrado}`);

      const filterItensConta: any = subelementos?.filter(
        (dado: any) => dado.idsubelementos !== idItem.idsubelementos
      );
      dispatch(setAllSubelementos(filterItensConta));
    } catch (error) {
      console.info(error);
    }
  };

  // // --------- Modal ----
  // const [showModaladd, setShowModaladd] = useState(false);
  // const mostrarModalAdd = () => setShowModaladd(true);
  // const esconderModalAdd = () => setShowModaladd(false);

  // return (
  //   <ContainerStyle>
  //     {subelementos?.map((elemento: SubelementosDados) => (
  //       <Card key={elemento.idsubelementos}>
  //         <p>{elemento.idsubelementos}</p>
  //         <p>{elemento.descricao_subelementos}</p>
  //         <section>
  //           <DarkButton>
  //             <img src="./assets/remover.svg" alt="remover"></img>
  //           </DarkButton>
  //           <PrimaryButton>
  //             <img src="./assets/editar.svg" alt="editar"></img>
  //           </PrimaryButton>
  //         </section>
  //       </Card>
  //     ))}
  //     {showModaladd && (
  //       <Modal>
  //         <h2>Adicione um Item</h2>

  //         <InputPrimary type="text" descricaoPlaceholder="Ano" />
  //         <InputPrimary type="text" descricaoPlaceholder="Mês" />

  //         <PrimaryButton>+ Adicionar</PrimaryButton>
  //         <DarkButton onClick={esconderModalAdd}>X</DarkButton>
  //       </Modal>
  //     )}
  //     {isCarregado && <h2>Carregando ...</h2>}
  //   </ContainerStyle>
  // );
  return (
    <ContainerStyle>
        <h1>Sublementos de Classificação</h1>
      <div>
        <PrimaryButton >+ Adicionar</PrimaryButton>
      </div>
      <ContainerCards>
        {subelementos?.map((subelemento: SubelementosDados) => (
          <Card key={subelemento.idsubelementos}>
            <p>{subelemento.idsubelementos}</p>
            <p>{subelemento.descricao_subelementos}</p>
            <section>
              <DarkButton
              >
                <img src="./assets/remover.svg"></img>
              </DarkButton>
              <PrimaryButton

              >
                <img src="./assets/editar.svg"></img>
              </PrimaryButton>
            </section>
          </Card>
        ))}
      </ContainerCards>
      {isCarregado && <h2>Carregando ...</h2>}
    </ContainerStyle>
  );
};

export default Subelementos;
