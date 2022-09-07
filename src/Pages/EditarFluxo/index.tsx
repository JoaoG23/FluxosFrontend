import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

// Componentes -----
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { ContainerStyle, IconModal } from "./styles";
import Modal from "../../Components/Modal";
import SelectPrimary from "./SelectPrimary";

// Services -----
import urlBase from "../../services/UrlBase";
import InputSecondary from "../../Components/Inputs/SecondaryInput";
import getDataInput from "../../services/getDataInput";
// import { useToBackUntilTime } from "../../services/toBackUntilTime";

// Redux
import {
  InfoElementos,
  ElementosDados,
} from "../../Redux/types/elementosTypes";
import { setIsCarregado } from "../../Redux/actions/carregadorActions";
import { Carregador } from "../../Redux/types/carregadorTypes";
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

// Types Components Main

import { DadosItemFluxoCaixa } from "../../Types/DadosItemFluxoCaixa";
import { IdItem } from '../../Types/IDItem'
import AlertaDanger from "../../Components/Alerta/AlertaDanger";


const EditarFluxo = () => {
  const { id } = useParams();

  const [respostaServer, setRespostaServer] = useState<RespostaServidor>({});
  const [showModalserver, setShowModalserver] = useState<boolean>(false);
  const mostrarModalServer = () => setShowModalserver(true);
  const [error, setError] = useState<any | null>(null);

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

  type RespostaServidor = {
    msg?: string;
    situacao?: boolean;
  };

  useEffect(() => {
    const buscaDadosItemFluxo = async () => {
      try {
        const buscarDados = await urlBase.get(`/admin/fluxo/numero/${id}`);
        dispatch(setIsCarregado());

        const {
          cod_elementos_item_fluxo,
          subelementos,
          tipos,
          subtipos,
          minitipos,
          nanotipos,
          descricao_item_fluxo,
          valor_item_fluxo,
        } = buscarDados.data[0];

        setValor(valor_item_fluxo);
        setDescricao(descricao_item_fluxo);
        setElememento(cod_elementos_item_fluxo);
        setSubelemento(subelementos);
        setTipo(tipos);
        setSubtipo(subtipos);
        setMinitipo(minitipos);
        setNanotipo(nanotipos);


      } catch (error) {
        setError(error)
        console.error(error);
      }
    };
    buscaDadosItemFluxo();
  }, []);

type ItemEditado = DadosItemFluxoCaixa & IdItem;

  const novoItem: ItemEditado = {
    id:id,
    elemento: elemento,
    subelementos: subelemento,
    tipos: tipo,
    subtipos: subtipo,
    minitipos: minitipo,
    nanotipos: nanotipo,
    descricao: descricao,
    valor: valor,
  };

  const atualizarItem = async () => {
    try {
      const criarItems = await urlBase.put("/admin/fluxo", novoItem);
      dispatch(setIsCarregado());
      toBackUntilTime(2000);
      mostrarModalServer();
      setRespostaServer(criarItems.data);
      console.log(criarItems);
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
          <IconModal src="./assets/ok.svg"></IconModal>
          <h3>{respostaServer.msg}</h3>
        </Modal>
      )}
      <h2>Editar o Item</h2>
      <h1>{id}</h1>
      <div>
        <label>Escolha o elemento</label>
        <SelectPrimary value={elemento}
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
        <SelectPrimary value={subelemento}
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
        <SelectPrimary value={tipos}
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
        <SelectPrimary value={subtipo}
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
        <SelectPrimary value={minitipo}
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
        <SelectPrimary value={nanotipo}
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
      <InputSecondary value={descricao}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          getDataInput(e, setDescricao);
        }}
        type="text"
      />
      <InputSecondary value={valor}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          getDataInput(e, setValor);
        }}
        type="number"
      />
      {isCarregado && <h3>Carregando ...</h3>}

      <PrimaryButton
        onClick={() => {
          atualizarItem();
        }}
      >
        + Adicionar
      </PrimaryButton>
      {error && (
        <AlertaDanger onClick={() => setError(null)}>
          <p>{error?.response?.data?.msg}</p>
        </AlertaDanger>
      )}
    </ContainerStyle>
  );
};

export default EditarFluxo;
