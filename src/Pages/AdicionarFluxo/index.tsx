import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// Redux 

import { useDispatch, useSelector } from "react-redux";
import { Carregador } from "../../Redux/types/carregadorTypes";
import { setIsCarregado } from "../../Redux/actions/carregadorActions";
import {
  InfoElementos,
  ElementosDados,
} from "../../Redux/types/elementosTypes";
import {
  InfoSubelementos,
  SubelementosDados,
} from "../../Redux/types/subelementosTypes";
import { InfoTipos, TiposDados } from "../../Redux/types/tiposTypes";
import { InfoSubtipos, SubtiposDados } from "../../Redux/types/subtiposTypes";
import {
  InfoMinitipos,
  MinitiposDados,
} from "../../Redux/types/minitiposTypes";
import {
  InfoNanotipos,
  NanotiposDados,
} from "../../Redux/types/nanotiposTypes";


// Components

import InputSecondary from "../../Components/Inputs/SecondaryInput";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { ContainerStyle, IconModal } from "./styles";
import Modal from "../../Components/Modal";
import SelectPrimary from "./SelectPrimary";

// Services

import urlBase from "../../services/UrlBase";
import getDataInput from "../../services/getDataInput";
// import { useToBackUntilTime } from '../../services/toBackUntilTime';

// Types do Componente Main

import { DadosItemFluxoCaixa } from '../../Types/DadosItemFluxoCaixa';
import { RespostaServidor } from '../../Types/RespostaServidor';


const AdicionarFluxo = () => {

  const [respostaServer, setRespostaServer] = useState<RespostaServidor>({});
  const [showModalserver, setShowModalserver] = useState<boolean>(false);
  const mostrarModalServer = () => setShowModalserver(true);

  const [valor, setValor] = useState<number>(0);
  const [descricao, setDescricao] = useState<string>("");
  const [elemento, setElememento] = useState<number>(0);
  const [subelemento, setSubelemento] = useState<number>(0);
  const [tipo, setTipo] = useState<number>(0);
  const [subtipo, setSubtipo] = useState<number>(0);
  const [minitipo, setMinitipo] = useState<number>(0);
  const [nanotipo, setNanotipo] = useState<number>(0);

  const dispatch = useDispatch();

  const elementos = useSelector(
    (store: InfoElementos) => store?.elementos?.elemento
  );
  const subelementos = useSelector(
    (store: InfoSubelementos) => store?.subelementos?.subelemento
  );
  const tipos = useSelector((store: InfoTipos) => store?.tipos?.tipo);
  const subtipos = useSelector(
    (store: InfoSubtipos) => store?.subtipos?.subtipo
  );
  const minitipos = useSelector(
    (store: InfoMinitipos) => store?.minitipos?.minitipo
  );
  const nanotipos = useSelector(
    (store: InfoNanotipos) => store?.nanotipos?.nanotipo
  );

  const isCarregado = useSelector((store: Carregador) => store?.carregador);

  const novoItem: DadosItemFluxoCaixa = {
    elemento: elemento,
    subelementos: subelemento,
    tipos: tipo,
    subtipos: subtipo,
    minitipos: minitipo,
    nanotipos: nanotipo,
    descricao: descricao,
    valor: valor,
  };

  const adicionarItem = async () => {
    try {
      const criarItems = await urlBase.post("/admin/fluxo", novoItem);
      dispatch(setIsCarregado());
      toBackUntilTime(1500);
      setRespostaServer(criarItems.data);
      mostrarModalServer();

    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const toBackUntilTime = (timeToAction: number) => {
    setTimeout(() => {
      navigate(-1);
    }, timeToAction);
  }

  return (
    <ContainerStyle>
      {showModalserver && (
        <Modal>
          <IconModal  src="./assets/ok.svg"></IconModal>
          <h3>{respostaServer.msg}</h3>
        </Modal>
      )}
      <h2>Adicione um Item</h2>
      <div>
        <label>Escolha o elemento</label>
        <SelectPrimary
          onChange={(e: any) => {
            getDataInput(e, setElememento);
          }}
        >
          {elementos?.map((option: ElementosDados) => (
            <option key={option.idelementos} value={option.idelementos}>
              {option.descricao_elementos}
            </option>
          ))}
        </SelectPrimary>
      </div>
      <div>
        <label>Escolha o sublementos</label>
        <SelectPrimary
          onChange={(e: any) => {
            getDataInput(e, setSubelemento);
          }}
        >
          {subelementos?.map((option: SubelementosDados) => (
            <option key={option.idsubelementos} value={option.idsubelementos}>
              {option.descricao_subelementos}
            </option>
          ))}
        </SelectPrimary>
      </div>
      <div>
        <label>Escolha o tipos</label>
        <SelectPrimary
          onChange={(e: any) => {
            getDataInput(e, setTipo);
          }}
        >
          {tipos?.map((option: TiposDados) => (
            <option key={option.id_tipos} value={option.id_tipos}>
              {option.descricao_tipos}
            </option>
          ))}
        </SelectPrimary>
      </div>
      <div>
        <label>Escolha o Subtipos</label>
        <SelectPrimary
          onChange={(e: any) => {
            getDataInput(e, setSubtipo);
          }}
        >
          {subtipos?.map((option: SubtiposDados) => (
            <option key={option.idsubtipos} value={option.idsubtipos}>
              {option.descricao_subtipos}
            </option>
          ))}
        </SelectPrimary>
      </div>
      <div>
        <label>Escolha o Minitipos</label>
        <SelectPrimary
          onChange={(e: any) => {
            getDataInput(e, setMinitipo);
          }}
        >
          {minitipos?.map((option: MinitiposDados) => (
            <option key={option.id_minitipos} value={option.id_minitipos}>
              {option.descricao_minitipos}
            </option>
          ))}
        </SelectPrimary>
      </div>
      <div>
        <label>Escolha o Nano</label>
        <SelectPrimary
          onChange={(e: any) => {
            getDataInput(e, setNanotipo);
          }}
        >
          {nanotipos?.map((option: NanotiposDados) => (
            <option key={option.id_nanotipos} value={option.id_nanotipos}>
              {option.descricao_nanotipos}
            </option>
          ))}
        </SelectPrimary>
      </div>
      <label>Descricao do Item a adicionar</label>
      <InputSecondary
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          getDataInput(e, setDescricao);
        }}
        type="text"
      />
      <InputSecondary
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          getDataInput(e, setValor);
        }}
        type="number"
      />
      {isCarregado && <h3>Carregando ...</h3>}

      <PrimaryButton
        onClick={() => {
          adicionarItem();
        }}
      >
        + Adicionar
      </PrimaryButton>
    </ContainerStyle>
  );
};

export default AdicionarFluxo;
