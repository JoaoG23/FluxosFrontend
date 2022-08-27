import { createStore, combineReducers } from "redux";
import carregadorReducer from "../reducers/carregadorReducer";
import dashReducer from "../reducers/dashReducer";
import fluxoReducer from "../reducers/fluxoReducer";
import modalReducer from "../reducers/modalReducer";
import elementoReducer from "../reducers/elementosReducer";
import subelementosReducer from "../reducers/subelementosReducer";

const allReducers = combineReducers({
  carregador: carregadorReducer,
  dashboard: dashReducer,
  fluxo: fluxoReducer,
  modal: modalReducer,
  elementos:elementoReducer,
  subelementos:subelementosReducer
});

const store = createStore(allReducers);

export default store;
