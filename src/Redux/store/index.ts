import { createStore, combineReducers } from "redux";
import carregadorReducer from "../reducers/carregadorReducer";
import dashReducer from "../reducers/dashReducer";
import fluxoReducer from "../reducers/fluxoReducer";
import addModalReducer from "../reducers/modalReducer/addModalReducer";
import editModalReducer from "../reducers/modalReducer/editModalReducer";
import elementoReducer from "../reducers/elementosReducer";
import subelementosReducer from "../reducers/subelementosReducer";
import tiposReducer from "../reducers/tiposReducer";
import subtiposReducer from "../reducers/subtiposReducer";
import minitiposReducer from "../reducers/minitiposReducer";
import nanotiposReducer from "../reducers/nanotiposReducer";
import menuMobileReducer from '../reducers/menuMobileReducer';

const allReducers = combineReducers({
  carregador: carregadorReducer,
  dashboard: dashReducer,
  fluxo: fluxoReducer,
  addModal:addModalReducer ,
  editModal:editModalReducer ,
  elementos:elementoReducer,
  subelementos:subelementosReducer,
  tipos:tiposReducer,
  subtipos:subtiposReducer,
  minitipos:minitiposReducer,
  nanotipos:nanotiposReducer,
  menuMobile:menuMobileReducer
});

const store = createStore(allReducers);
// store.subscribe(() => { console.log(store.getState())}); // Para ver os dados do Store

export default store;
