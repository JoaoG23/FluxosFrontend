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
  dispatch(calkback: any): void;
  setStateOfData(filterData: any): void;
}

export const deleteItemById = async (objectItem: any, configs: ConfigsRequest) => {
  // const path = configs.path;
  const { path, dadosItems, dispatch, setStateOfData } = configs;
  // const dadosItems = configs.dadosItems;
  // const dispatch = configs.dispatch;

  let idEncontrado: number = objectItem.id_item_fluxo;
  await urlBase.delete(`${path}${idEncontrado}`);

  const filterItensConta: any = dadosItems?.filter(
    (dado: any) => dado.id_item_fluxo !== objectItem.id_item_fluxo
  );
  dispatch(setStateOfData(filterItensConta));
};
