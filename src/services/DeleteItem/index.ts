// Item
// Router
//Array of data
// dispatch e function set

// configs of request

import urlBase from "../UrlBase";
import { DadosItem } from "../../Pages/Fluxo/types";

// const id = {
//     path:`/admin/fluxo/`,
//     dadosItem:'object',
//     dispatch
//     set:
// }

export interface ConfigsRequest {
  path?: string;
  dadosItems?: DadosItem[];
  dispatch(callback: any): void;
  setStateOfData(filterData: any): void;
}

export const deleteItemById = async (objectItem: any, configs: ConfigsRequest) => {
  const { path, dadosItems, dispatch, setStateOfData } = configs;

  let idEncontrado: number = objectItem.id_item_fluxo;
  await urlBase.delete(`${path}${idEncontrado}`);

  const filterItensConta: any = dadosItems?.filter(
    (dado: any) => dado.id_item_fluxo !== objectItem.id_item_fluxo
  );
  dispatch(setStateOfData(filterItensConta));
};
