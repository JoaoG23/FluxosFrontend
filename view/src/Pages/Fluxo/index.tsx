import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import { HeaderStyle, ContainerStyle, TableStyle } from "./styles";
import DarkButton from "../../Components/Buttons/ButtonDark";
import AlertaDanger from "../../Components/Alerta/AlertaDanger";

// Redux
import { InformacoesItemsStore } from "../../Redux/types/fluxoTypes";
import { setTodosItemsFluxoCaixa } from "../../Redux/actions/fluxoActions";
import { useDispatch, useSelector } from "react-redux";
import { setIsCarregado } from "../../Redux/actions/carregadorActions";
import { Carregador } from "../../Redux/types/carregadorTypes";


// Services
import urlBase from "../../services/UrlBase";

// Types Component main
import { DadosItem } from "./types";

const Fluxo = () => {
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  const toEdit = (id: number | string) => {
    navigate(`/admin/fluxo/${id}`);
  };

  const dispatch = useDispatch();
  const dadosItems = useSelector(
    (store: InformacoesItemsStore) => store?.fluxo?.items
  );
  const isCarregado = useSelector((store: Carregador) => store?.carregador);

  useEffect(() => {
    const loadItemsFluxo = async () => {
      try {
        const todosItems = await urlBase.get("/admin/fluxo");
        dispatch(setIsCarregado());
        dispatch(setTodosItemsFluxoCaixa(todosItems.data));
      } catch (error) {
        setError(error as Error);
        console.error(error);
      }
    };
    loadItemsFluxo();
  }, [dispatch]);

  // ---------- Deletar item

  const deleteItemById = async (idItem: DadosItem) => {

    try {
      
      let idEncontrado = idItem.id_item_fluxo;
      const respostaItem = await urlBase.delete(`/admin/fluxo/${idEncontrado}`);
  
      const filterItensConta: any = dadosItems?.filter(
        // Eliminar do frontend
        (dado: DadosItem) => dado.id_item_fluxo !== idItem.id_item_fluxo
      );
      dispatch(setTodosItemsFluxoCaixa(filterItensConta));
    } catch (error) {
      setError(error as Error);
      console.error(error)
    }
  };

  // --------- Modal ----
  // const [showModalDeletar, setShowModalDeletar] = useState(false);

  // const mostrarModalDeletar = (time: number) => {
  //   setShowModalDeletar(true);
  //   setTimeout(() => {
  //     setShowModalDeletar(false);
  //   }, time);
  // };

  return (
    <ContainerStyle>
      <HeaderStyle>
        <h2>Fluxo de Caixa</h2>
        <Link to={"/admin/fluxo/add"}>
          <PrimaryButton>+ adicionar</PrimaryButton>
        </Link>
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
                <PrimaryButton
                  onClick={() => toEdit(item.id_item_fluxo as number)}
                >
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
      {error && <AlertaDanger onClick={ () => setError(null)}>{error?.message}</AlertaDanger>}
    </ContainerStyle>
  );
};

export default Fluxo;
