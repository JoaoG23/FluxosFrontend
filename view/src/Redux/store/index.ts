import { createStore, combineReducers } from "redux";
import carregadorReducer from "../reducers/carregadorReducer";
import dashReducer from "../reducers/dashReducer";
import fluxoReducer from "../reducers/fluxoReducer";
import modalReducer from "../reducers/modalReducer";
import elementoReducer from "../reducers/elementosReducer";
import subelementosReducer from "../reducers/subelementosReducer";
import tiposReducer from "../reducers/tiposReducer";
import subtiposReducer from "../reducers/subtiposReducer";
import minitiposReducer from "../reducers/minitiposReducer";
import nanotiposReducer from "../reducers/nanotiposReducer";

const allReducers = combineReducers({
  carregador: carregadorReducer,
  dashboard: dashReducer,
  fluxo: fluxoReducer,
  modal: modalReducer,
  elementos:elementoReducer,
  subelementos:subelementosReducer,
  tipos:tiposReducer,
  subtipos:subtiposReducer,
  minitipos:minitiposReducer,
  nanotipos:nanotiposReducer
});

const store = createStore(allReducers);

export default store;
